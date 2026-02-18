<script>
  import { onMount } from "svelte";

  let smallTextPos = { x: 0, y: 0, width: 0, height: 0 };
  let largeBoxPos = { x: 0, y: 0, width: 0, height: 0 };

  function updatePositions() {
    const svg = document.getElementById("svgContainer");
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
    const svgContainer = svg.closest(".max-w-480");
    const containerRect = svgContainer
      ? svgContainer.getBoundingClientRect()
      : svgRect;

    const smallBox = svg.querySelector(".box-group.rotate rect");
    if (smallBox) {
      const bbox = smallBox.getBBox();
      const matrix = smallBox.closest(".box-group").getScreenCTM();

      const p = svg.createSVGPoint();
      p.x = bbox.x;
      p.y = bbox.y;
      const transformed = p.matrixTransform(matrix);

      smallTextPos = {
        x: transformed.x - containerRect.left,
        y: transformed.y + window.scrollY,
        width: bbox.width,
        height: bbox.height,
      };
    }

    const largeBox = svg.querySelector(".box-group:not(.rotate) rect");
    if (largeBox) {
      const bbox = largeBox.getBBox();
      const matrix = largeBox.closest(".box-group").getScreenCTM();

      const p = svg.createSVGPoint();
      p.x = bbox.x;
      p.y = bbox.y;
      const transformed = p.matrixTransform(matrix);

      largeBoxPos = {
        x: transformed.x - containerRect.left,
        y: transformed.y + window.scrollY,
        width: bbox.width,
        height: bbox.height,
      };
    }
  }

  onMount(() => {
    updatePositions();

    const handleResize = () => updatePositions();
    const handleScroll = () => updatePositions();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="fixed top-2 z-100 right-2 gap-1 flex flex-col items-end">
  <a
    href="https://thometnanni.github.io/vantage-stories/"
    target="_blank"
    rel="noopener noreferrer"
    class="text-xs pointer-events-auto"
  >
    Demos
  </a>
  <a href="mailto:hi@thometnanni.net" class="text-xs pointer-events-auto">
    Contact us
  </a>
</div>

{#if smallTextPos.width > 0}
  <div
    class="absolute z-[-1px] flex items-start justify-start bg-white pointer-events-auto"
    style={`
      left: ${smallTextPos.x}px;
      top: ${smallTextPos.y}px;
      width: ${smallTextPos.width}px;
      height: ${smallTextPos.height}px;
      transform: rotate(-25deg);
      transform-origin: top left;
    `}
  >
    <p
      class="text-base leading-tight text-left text-black m-0 p-3 overflow-hidden"
    >
      Vantage reconstructs the spatial context of video recordings.
    </p>
  </div>
{/if}

{#if largeBoxPos.width > 0}
  <div
    class="absolute z-[-1px] bg-white overflow-hidden pointer-events-auto"
    style={`
      left: ${largeBoxPos.x}px;
      top: ${largeBoxPos.y}px;
      width: ${largeBoxPos.width}px;
      height: ${largeBoxPos.height}px;
    `}
  >
    <video
      autoplay
      loop
      muted
      src="/demo.mp4"
      class="w-full h-full object-cover"
    ></video>
  </div>
{/if}

<style>
  a {
    color: black;
    background-color: var(--highlite);
    border-radius: 20px;
    padding: 0px 5px;
    text-decoration: none;
  }
</style>
