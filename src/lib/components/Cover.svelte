<script>
  import { onMount } from "svelte";

  let currentIndex = 0;
  let videoEls = [];

  const media = [
    // { src: "/cover/7.png", type: "image" },
    // { src: "/cover/3.png", type: "image" },
    // { src: "/cover/4.png", type: "image" },
    // { src: "/cover/5.png", type: "image" },
    {
      src: "/cover/g8.mp4",
      type: "video",
      caption:
        "Violent Clashes at the 2001 Genoa G8 Summit – Wikipedia, OpenStreetMap",
    },
    {
      src: "/cover/vajont.mp4",
      type: "video",
      caption: "Vajont dam in 1960 – Wikimedia, OpenStreetMap",
    },
    {
      src: "/cover/silber.mp4",
      type: "video",
      caption: "Petra Gall, Silbersteinstraße Graffitis 1983 – OpenStreetMap",
    },
  ];

  function goToNext() {
    currentIndex = (currentIndex + 1) % media.length;
    const video = videoEls[currentIndex];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  }

  onMount(() => {
    // Start the first video
    if (videoEls[0]) videoEls[0].play();

    const interval = setInterval(() => {
      if (media[currentIndex].type === "image") {
        goToNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<div class="relative w-full h-[70vh] border-b overflow-hidden bg-black">
  {#each media as item, index}
    {#if item.type === "image"}
      <img
        src={item.src}
        alt="Slide {index + 1}"
        class="absolute w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out {index ===
        currentIndex
          ? 'opacity-100'
          : 'opacity-0'}"
      />
    {:else if item.type === "video"}
      <video
        bind:this={videoEls[index]}
        src={item.src}
        muted
        playsinline
        on:ended={goToNext}
        class="absolute w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out {index ===
        currentIndex
          ? 'opacity-100'
          : 'opacity-0'}"
      />
    {/if}
  {/each}

  {#if media[currentIndex]?.caption}
    <div class="absolute bottom-0 left-0 right-0 text-gray-300 p-2">
      <p class="text-xs">{media[currentIndex].caption}</p>
    </div>
  {/if}
</div>
