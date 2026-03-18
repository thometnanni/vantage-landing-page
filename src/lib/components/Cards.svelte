<script>
  import Card from "./Card.svelte";

  const cards = [
    {
      span: 2,
      image: "/cards/g8.webp",
      text: "Create and edit scenes by using the web editor",
      href: "https://example.com/",
    },
    {
      span: 1,
      image: "/cards/default.png",
      text: "Contextualize and narrate  your findings",
      href: "https://example.com/",
    },
    {
      span: 1,
      image: "/cards/default.png",
      text: "Explore Gaussian Splats on the Web",
      href: "https://example.com/",
    },
    {
      span: 1,
      image: "/cards/default.png",
      text: "Create and edit scenes by using the web editor",
      href: "https://example.com/",
    },
  ];
</script>

<section class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-6xl m-auto my-8">
  {#each cards as card}
    <Card image={card.image} text={card.text} span={card.span} href={card.href} />
  {/each}
</section>
