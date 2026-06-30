<script>
  export let image;
  export let title = "";
  export let description = "";
  export let span = 1;
  export let links = [];

  $: imageOnly = image && !title && !description;

  $: spanClass = span === 2 ? "md:col-span-2" : "md:col-span-1";
</script>

{#if imageOnly}
  <a
    href={links[0]?.href}
    target="_blank"
    class="group bg-white border grid grid-rows-4 h-120 no-underline {spanClass}"
  >
    <div class="row-start-1 row-end-5 col-start-1 col-end-2 relative">
      <img src={image} alt="" class="w-full h-full object-cover" />
      {#if links.length > 0}
        <div class="absolute bottom-0 left-0 flex gap-2 p-2">
          {#each links as link, i}
            <span
              class="inline-flex items-center gap-1 px-2 py-1 text-sm group-hover:bg-black group-hover:text-highlite"
              class:link={i === 0}
              class:link-secondary={i > 0}
            >{link.text}</span>
          {/each}
        </div>
      {/if}
    </div>
  </a>
{:else if image}
  <div class="bg-white border grid grid-rows-4 h-120 no-underline gap-2 p-2 {spanClass}">
    <div class="row-start-1 row-end-4 col-start-1 col-end-2">
      <img src={image} alt="" class="w-full h-full object-cover" />
    </div>
    <div class="row-end-5 row-start-1 col-start-1 col-end-2 justify-end flex flex-col">
      <div class="min-h-1/4 bg-white pt-2 gap-4 flex flex-col justify-between">
        <div>
          {#if title}<h2 class="text-base leading-tight">{title}</h2>{/if}
          {#if description}
            <p class="text-base leading-tight text-gray-400 mt-2">{description}</p>
          {/if}
        </div>
        {#if links.length > 0}
          <div class="flex gap-2">
            {#each links as link, i}
              <a
                href={link.href}
                target="_blank"
                class="inline-flex items-center gap-1 px-2 py-1 text-sm"
                class:link={i === 0}
                class:link-secondary={i > 0}
              >
                <span>↗</span>{link.text}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="bg-white border grid grid-rows-4 h-120 no-underline gap-2 p-2 {spanClass}">
    <div class="row-start-1 row-end-5 col-start-1 col-end-2 flex flex-col justify-between pt-2">
      <div>
        {#if title}<h2 class="text-2xl leading-tight">{title}</h2>{/if}
        {#if description}
          <p class="text-base leading-tight text-gray-400 mt-10 line-clamp-14">{@html description}</p>
        {/if}
      </div>
      {#if links.length > 0}
        <div class="flex gap-2">
          {#each links as link}
            <a
              href={link.href}
              target="_blank"
              class="inline-flex items-center gap-1 px-2 py-1 text-sm link-secondary"
            >
              <span>↗</span>{link.text}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}
