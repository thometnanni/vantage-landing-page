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
      image: "/cards/demo-1.png",
      title: "",
      description: "",
      links: [
        {
          text: "Perspectives on Brandenburger Tor",
          href: "https://v-a-n-t-a-g-e.github.io/STORY-Perspectives-on-Brandenburger-Tor/",
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
        { text: "Github", href: "https://github.com/v-a-n-t-a-g-e/territory" },
      ],
    },
    {
      span: 1,
      image: "/cards/demo-3.png",
      title: "",
      description: "",
      links: [
        {
          text: "Vajont",
          href: "https://v-a-n-t-a-g-e.github.io/STORY-Vajont/",
        },
      ],
    },
    {
      span: 1,
      image: "",
      title: "Performing a Spatial Reconstruction",
      description:
        "In this guide, we demonstrate a complete spatial reconstruction workflow: generating a 3D model of Brandenburger Tor in Territory from OpenStreetMap data, then importing it into Vantage to align historical photographs against the geometry.<br><br> Using viewfinder mode, roll, FOV, and position adjustments, projections are precisely matched, enabling free exploration across perspectives.",
      links: [
        {
          text: "Read more",
          href: "https://open.substack.com/pub/krisenstab/p/performing-a-spatial-reconstruction",
        },
      ],
    },

    {
      span: 1,
      image: "/cards/storyboard.png",
      title: "Storyboard",
      description:
        "Turn Vantage scenes and 3D models into interactive web publications.",
      links: [
        {
          text: "Get started",
          href: "https://v-a-n-t-a-g-e.github.io/storyboard/",
        },
        { text: "Github", href: "https://github.com/v-a-n-t-a-g-e/storyboard" },
      ],
    },
    {
      span: 1,
      image: "",
      title: "From Research to Presentation",
      description:
        "In this guide, we demonstrate Storyboard, a tool for turning spatial research into interactive slideshows and scrollytellings.<br> Starting from a Vantage project, slides capture camera positions, perspectives, and visible models or projections.<br><br> Transitions are refined with waypoints and previewed in slideshow or scrollytelling mode, then exported as web packages.",
      links: [
        {
          text: "Read more",
          href: "https://krisenstab.substack.com/p/from-research-to-presentation",
        },
      ],
    },
    {
      span: 1,
      image: "/cards/demo-2.png",
      title: "",
      description: "",
      links: [
        {
          text: "Silbersteinstraße",
          href: "https://v-a-n-t-a-g-e.github.io/STORY-Silbersteinstrasse/",
        },
      ],
    },
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
