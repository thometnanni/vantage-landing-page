<script>
  import Card from "./Card.svelte";

  const cards = [
    {
      span: 2,
      image: "/cards/vantage.png",
      title: "Vantage",
      description:
        "Spatially reconstruct events by placing and projecting imagery onto 3d models",
      links: [
        { text: "Try it", href: "https://v-a-n-t-a-g-e.github.io/vantage/" },
        { text: "Github", href: "https://github.com/v-a-n-t-a-g-e/vantage" },
        {
          text: "npm package",
          href: "https://www.npmjs.com/package/@krisenstab/vantage",
        },
      ],
    },
    {
      span: 1,
      image: "/cards/territory.png",
      title: "Territory",
      description:
        "Generate 3D city models, with elevation, textures and customisations",
      links: [
        {
          text: "Get started",
          href: "https://v-a-n-t-a-g-e.github.io/territory/",
        },
      ],
    },
    {
      span: 1,
      image: "/cards/guide-1.webp",
      title: "Performing a Spatial Reconstruction in Vantage",
      description:
        "A getting started guide for creating 3d models in Territory and aligning imagery in Vantage",
      links: [
        {
          text: "Read",
          href: "https://open.substack.com/pub/krisenstab/p/performing-a-spatial-reconstruction",
        },
      ],
    },
    // {
    //   span: 1,
    //   image: "/cards/default.png",
    //   title: "Try it",
    //   description: "Add cameras and text annotations",
    //   links: [{ text: "Explore", href: "https://example.com/" }],
    // },

    //  {
    //   span: 1,
    //   image: "/cards/default.png",
    //   title: "Developer Resources",
    //   description: "Build with the Vantage Core code",
    //   links: [{ text: "Get started", href: "https://example.com/" }],
    // },
  ];
</script>

<section
  class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8 max-w-6xl m-auto my-8"
>
  {#each cards as card}
    <Card
      image={card.image}
      title={card.title}
      description={card.description}
      span={card.span}
      links={card.links}
    />
  {/each}
</section>
