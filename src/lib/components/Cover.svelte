<script>
  import { onMount } from "svelte";

  let media = [];
  let currentIndex = 0;

  function preloadNext() {
    const nextIndex = (currentIndex + 1) % media.length;
    if (media[nextIndex]) {
      const img = new Image();
      img.src = media[nextIndex].src;
    }
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % media.length;
    preloadNext();
  }

  onMount(async () => {
    const res = await fetch(
      "https://api.are.na/v2/channels/vantage-3vctc210p7q/contents?per=100",
    );
    const data = await res.json();
    media = data.contents
      .filter((b) => b.class === "Image")
      .map((b) => ({
        src: b.image.large.url,
        caption: b.title === "image" ? "" : (b.title ?? ""),
      }));

    preloadNext();

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  });
</script>

<div class="relative w-full h-[70vh] overflow-hidden bg-black">
  {#each media as item, index}
    <img
      src={item.src}
      alt="Slide {index + 1}"
      class="absolute w-full h-full object-cover transition-opacity duration-700 {index ===
      currentIndex
        ? 'opacity-100'
        : 'opacity-0'}"
    />
  {/each}

  {#if media[currentIndex]?.caption}
    <div class="absolute bottom-0 left-0 right-0 text-gray-300 p-2">
      <p class="text-xs">{media[currentIndex].caption}</p>
    </div>
  {/if}
</div>
