<script>
  export let image;
  export let text;
  export let span = 1;
  export let href = "#";
</script>

{#if span === 2}
  <a
    {href} 
    target="_blank"
    class="md:col-span-2 bg-white border border-black flex overflow-hidden h-120 no-underline hover:opacity-70 transition"
  >
    <div class="w-3/5 p-2">
      <img src={image} alt="" class="w-full h-full object-cover" />
    </div>
    <div class="w-2/5 p-2 flex items-start">
      <p class="text-2xl">{text}</p>
    </div>
  </a>
{:else}
  <a
    {href}
    target="_blank"
    class="md:col-span-1 bg-white border border-black flex flex-col h-120 no-underline hover:opacity-70 transition"
  >
    <div class="h-3/4 p-2">
      <img src={image} alt="" class="w-full h-full object-cover" />
    </div>
    <div class="h-1/4 p-2">
      <p class="text-xl">{text}</p>
    </div>
  </a>
{/if}
