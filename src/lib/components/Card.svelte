<script>
  export let image;
  export let title = "";
  export let description = "";
  export let span = 1;
  export let links = [];
</script>

<div
  class="bg-white border grid grid-rows-4 p-2 gap-2 h-120 no-underline {span ===
  2
    ? 'md:col-span-2'
    : 'md:col-span-1'}"
>
  <div class="row-start-1 row-end-4 col-start-1 col-end-2">
    <img src={image} alt="" class="w-full h-full object-cover" />
  </div>
  <div
    class="row-end-5 row-start-1 col-start-1 col-end-2 justify-end flex flex-col"
  >
    <div class="min-h-1/4 bg-white pt-2 gap-4 flex flex-col justify-between">
      <div>
        {#if title}
          <h2 class="text-base">{title}</h2>
        {/if}
        {#if description}
          <p class="text-base leading-none text-gray-400 mt-1">{description}</p>
        {/if}
      </div>
      {#if links.length > 0}
        <div class="flex gap-2">
          {#each links as link}
            <a
              href={link.href}
              target="_blank"
              class="inline-flex items-center gap-1 px-2 py-1 link text-sm"
            >
              <span>↗</span>
              {link.text}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
