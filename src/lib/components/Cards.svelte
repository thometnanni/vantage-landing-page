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
        { text: "View code", href: "https://github.com/v-a-n-t-a-g-e/vantage" },
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
    // {
    //   span: 1,
    //   image: "/cards/default.png",
    //   title: "Getting Started",
    //   description: "Set up Vantage with our guide",
    //   links: [{ text: "Learn more", href: "https://example.com/" }],
    // },
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
  class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl m-auto my-8"
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
