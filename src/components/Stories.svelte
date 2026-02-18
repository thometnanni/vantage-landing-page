<script>
  const stories = [
    {
      title: "Silbersteinstraße Graffitis 1983",
      media: "/stories/silberstein.mp4",
      href: "https://thometnanni.github.io/vantage-stories/stories/silber",
    },
    {
      title: "Genoa G8 Clashes, 2001",
      media: "/stories/g8.webp",
      href: "https://thometnanni.github.io/vantage-stories/stories/g8",
    },
    {
      title: "Vajont Disaster",
      media: "/stories/vajont.mp4",
      href: "https://thometnanni.github.io/vantage-stories/stories/vajont",
    },
  ];

  function isVideo(url) {
    const clean = url.split("?")[0].toLowerCase();
    return (
      clean.endsWith(".mp4") ||
      clean.endsWith(".webm") ||
      clean.endsWith(".ogg")
    );
  }
</script>

<section class="bg-white py-6">
  <div class="max-w-480">
    <div class="flex items-baseline justify-between gap-1">
      <h2 class="text-xl font-medium m-0 px-2 pt-4 pb-1">Stories</h2>
    </div>
  </div>

  <div class="stories-outer mt-3" role="region" aria-label="stories">
    <div class="stories-inner">
      {#each stories as story (story.href)}
        <article>
          <a
            href={story.href}
            target="_blank"
            rel="noopener noreferrer"
            class="story-card"
            aria-label={`Read story: ${story.title}`}
          >
            <div class="story-media">
              {#if isVideo(story.media)}
                <video
                  src={story.media}
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="metadata"
                  aria-label={story.title}
                ></video>
              {:else}
                <img src={story.media} alt={story.title} loading="lazy" />
              {/if}
            </div>
            <div class="story-meta">
              <h3 class="story-title m-0">{story.title}</h3>
            </div>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  @reference "tailwindcss";

  .stories-outer {
    @apply w-full overflow-x-auto overflow-y-hidden scroll-smooth;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
  }

  .stories-outer::-webkit-scrollbar {
    display: none;
  }

  .stories-inner {
    @apply flex gap-2 flex-nowrap w-max px-2 pb-4;
  }

  .story-card {
    @apply flex flex-col items-start gap-2 no-underline text-black bg-transparent p-0 w-100 h-100;
  }

  .story-media {
    @apply w-full bg-[#e9e9e9] aspect-square rounded overflow-hidden;
  }

  .story-media video {
    @apply w-full h-full object-cover block;
  }

  .story-media img {
    @apply w-full h-full object-cover block;
  }

  .story-meta {
    @apply flex flex-col gap-1;
  }

  .story-link {
    @apply self-start text-gray-400;
  }

  .story-title {
    @apply text-sm text-gray-400;
  }
</style>
