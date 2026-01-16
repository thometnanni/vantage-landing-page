<script>
  import { onMount } from "svelte";

  let images = [];
  let loading = true;
  let error = null;
  let outer;
  let inner;
  let mousemoveEnabled = true;
  let programmaticScroll = false;
  const margin = 30;

  onMount(async () => {
    try {
      const response = await fetch(
        "https://api.are.na/v2/channels/vantage-3vctc210p7q"
      );
      const data = await response.json();

      images = data.contents
        .map((block) => ({
          title: block.title || "",
          url: block.image.display.url,
        }))
        .reverse();

      loading = false;
    } catch (err) {
      error = err.message;
      loading = false;
      console.error("Error fetching Are.na channel:", err);
    }
  });

  function onMousemove(e) {
    if (!mousemoveEnabled || !outer || !inner) {
      return;
    }

    const outerElWidth = outer.getBoundingClientRect().width;
    const innerElWidth = inner.getBoundingClientRect().width;

    if (innerElWidth <= outerElWidth) {
      return;
    }

    const outerRect = outer.getBoundingClientRect();
    const x = e.clientX - outerRect.left;
    const fraction = (x - margin) / (outerElWidth - margin * 2);
    const diff = innerElWidth - outerElWidth;

    programmaticScroll = true;
    outer.scrollTo({ left: diff * fraction, behavior: "instant" });
    requestAnimationFrame(() => (programmaticScroll = false));
  }

  function onMouseover() {
    mousemoveEnabled = true;
  }

  function onScroll() {
    if (!programmaticScroll) {
      mousemoveEnabled = false;
    }
  }
</script>

<div
  bind:this={outer}
  class="gallery w-full overflow-x-auto scroll-smooth"
  style="scrollbar-width: none;"
  role="region"
  aria-label="gallery"
  on:mousemove={onMousemove}
  on:mouseenter={onMouseover}
  on:scroll={onScroll}
>
  {#if loading}
  {:else if error}
    <div class="p-8 text-center text-red-600">Error: {error}</div>
  {:else if images.length > 0}
    <div bind:this={inner} class="flex gap-2 flex-nowrap w-max p-2">
      {#each images as image (image.url)}
        <div class="flex flex-col items-start gap-2">
          <img
            src={image.url}
            alt={image.title}
            class="flex-shrink-0 object-contain rounded"
            style="max-height: 450px;"
          />
          {#if image.title}
            <p class="text-sm text-gray-400 max-w-xs">{image.title}</p>
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <div class="p-8 text-center text-gray-600">No images found</div>
  {/if}
</div>

<style>
  .gallery::-webkit-scrollbar {
    display: none;
  }
</style>
