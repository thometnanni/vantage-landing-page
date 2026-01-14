<script>
  import { onMount } from "svelte";
  import Gallery from "../components/Gallery.svelte";
  import Intro from "../components/Intro.svelte";

  let containerEl;
  let mounted = false;

  onMount(() => {
    mounted = true;
    const timer = setTimeout(() => {
      updateAllLines();
    }, 100);

    const handleResize = () => updateAllLines();
    const handleScroll = () => updateAllLines();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", updateAllLines);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", updateAllLines);
    };
  });

  function updateAllLines() {
    const svg = document.getElementById("svgContainer");
    if (!svg) return;

    const boxPairs = svg.querySelectorAll(".box-pair");

    boxPairs.forEach((pair) => {
      const boxes = pair.querySelectorAll(".box");

      if (boxes.length === 2) {
        const box1 = boxes[0];
        const box2 = boxes[1];

        const boxGroup1 = box1.closest(".box-group") || box1;
        const boxGroup2 = box2.closest(".box-group") || box2;

        const corners1 = getBoxCorners(box1, boxGroup1);
        const corners2 = getBoxCorners(box2, boxGroup2);

        const lines = pair.querySelectorAll(".connector-line");

        if (lines.length >= 4) {
          updateLine(lines[0], corners1.topLeft, corners2.topLeft);
          updateLine(lines[1], corners1.topRight, corners2.topRight);
          updateLine(lines[2], corners1.bottomRight, corners2.bottomRight);
          updateLine(lines[3], corners1.bottomLeft, corners2.bottomLeft);
        }
      }
    });
  }

  function getBoxCorners(element, group = null) {
    const svg = document.getElementById("svgContainer");
    const bbox = element.getBBox();
    const matrix = (group || element).getScreenCTM();

    const corners = {
      topLeft: svg.createSVGPoint(),
      topRight: svg.createSVGPoint(),
      bottomRight: svg.createSVGPoint(),
      bottomLeft: svg.createSVGPoint(),
    };

    corners.topLeft.x = bbox.x;
    corners.topLeft.y = bbox.y;
    corners.topRight.x = bbox.x + bbox.width;
    corners.topRight.y = bbox.y;
    corners.bottomRight.x = bbox.x + bbox.width;
    corners.bottomRight.y = bbox.y + bbox.height;
    corners.bottomLeft.x = bbox.x;
    corners.bottomLeft.y = bbox.y + bbox.height;

    for (let key in corners) {
      if (matrix) {
        corners[key] = corners[key].matrixTransform(matrix);
      }
      corners[key].y += window.scrollY;
    }

    return corners;
  }

  function updateLine(line, point1, point2) {
    line.setAttribute("x1", point1.x);
    line.setAttribute("y1", point1.y);
    line.setAttribute("x2", point2.x);
    line.setAttribute("y2", point2.y);
  }
</script>

<svelte:head>
  <title>Vantage</title>
  <meta
    name="description"
    content="Vantage reconstructs the spatial context of video recordings."
  />
  <meta property="og:title" content="Vantage" />
  <meta
    property="og:description"
    content="Vantage reconstructs the spatial context of video recordings."
  />
  <meta property="og:image" content="/cover.jpg" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Vantage" />
  <meta
    property="twitter:description"
    content="Vantage reconstructs the spatial context of video recordings."
  />
  <meta property="twitter:image" content="/cover.jpg" />
</svelte:head>

<div class="introContainer" bind:this={containerEl}>
  <Intro />

  <svg id="svgContainer" xmlns="http://www.w3.org/2000/svg">
    <g class="box-pair">
      <g class="box box-group rotate">
        <rect x="0" y="0" width="300" height="200" />
      </g>

      <g class="lines">
        <line
          class="connector-line"
          stroke="var(--stroke, lime)"
          stroke-width="2"
        />
        <line
          class="connector-line"
          stroke="var(--stroke, lime)"
          stroke-width="2"
        />
        <line
          class="connector-line"
          stroke="var(--stroke, lime)"
          stroke-width="2"
        />
        <line
          class="connector-line"
          stroke="var(--stroke, lime)"
          stroke-width="2"
        />
      </g>

      <g class="box box-group box">
        <rect x="30%" y="200" width="65%" height="400" />
      </g>
    </g>
  </svg>

  <div class="info p-2">
    <div>
      <p>
        <strong>Vantage</strong> is a web-based software for
        <strong>spatial reconstruction of photos and videos</strong>, designed
        for
        <strong>investigative journalists and fact-checkers</strong>,
        particularly those working in small teams or independently.
      </p>
    </div>

    <div>
      <p>
        Images and videos sourced from social media often represent crucial
        working material — and, in conflict areas, sometimes the only available
        source.
      </p>

      <p>
        This persuasive visual material demands rigorous verification: do the
        time and place of the footage correspond to the claimed event? What is
        actually visible in the images? How do clips from different angles
        relate to each other?
      </p>

      <p>
        Vantage enables perspectival reconstruction by projecting images and
        videos onto
        <strong>3D models of terrain and buildings</strong>, supporting the
        production of visual evidence.
      </p>
    </div>

    <div>
      <p>
        Until now, creating such reconstructions has been highly demanding,
        requiring advanced skills in specialist software such as GIS, 3D
        modeling, and video editing, while offering little opportunity for
        collaboration.
      </p>

      <p>
        Vantage supports this laborious but essential process by bringing all
        operational phases together in a unified, accessible web interface.
      </p>

      <p>
        Reconstructions can be exported as
        <strong>videos or interactive visualizations</strong>, supporting visual
        storytelling in investigative journalism.
      </p>
    </div>

    <div>
      <p>
        Funded by
        <a
          class="link"
          href="https://prototypefund.de/project/vantage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prototype Fund
        </a>, <strong>Vantage is open-source and freely accessible</strong>,
        ensuring that investigative tools are within reach for everyone.
      </p>

      <p>
        <a class="link" href="mailto:hi@thometnanni.net">Write us</a> for more
        information, or follow our development on
        <a class="link" href="https://github.com/thometnanni/vantage">GitHub</a
        >.
      </p>

      <p>
        <a class="link" href="https://fidel.computer/">Fidel Thomet</a> &
        <a class="link" href="https://giacomo.website/">Giacomo Nanni</a>
      </p>
    </div>
  </div>

  {#if mounted}
    <div class="relative z-10 bg-white py-4">
      <Gallery />
    </div>
  {/if}

  <div class="info bg-white overflow-x-auto" style="padding: 20px 0;">
    <div class="flex gap-6 items-center m-auto" style="padding: 0 10px; white-space: nowrap;">
      <img
        src="/bmbf.svg"
        alt=""
        class="object-contain flex-shrink-0"
        style="max-width: 30%; max-height: 150px;"
      />
      <img
        src="/pf.svg"
        alt=""
        class="object-contain flex-shrink-0"
        style="max-width: 30%; max-height: 150px;"
      />
      <img
        src="/openc.svg"
        alt=""
        class="object-contain flex-shrink-0"
        style="max-width: 30%; max-height: 150px;"
      />
    </div>
  </div>
</div>
