<script>
  import { contact } from "../contact.js";
</script>

<section
  class="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-8 max-w-6xl m-auto p-4 md:px-8 pt-10"
>
  <div class="col-span-1 md:col-span-2">
    <h1 class="text-2xl leading-none sm:text-4xl mb-4">
      We

      <svg
        width="75"
        height="58"
        viewBox="0 0 75 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="inline align-baseline"
        style="transform: translate(-10px, 0px); margin-right: -5px;"
      >
        <path
          d="M73.9121 57.8882L24.4432 57.8883L24.4432 28.4988L73.9121 28.4987L73.9121 57.8882Z"
          fill="#00FF00"
        />
        <path
          d="M13.4244 28.6703L0.764924 15.6672L14.4442 0.437208L27.1037 13.4403L13.4244 28.6703Z"
          fill="#00FF00"
        />
        <path
          d="M73.9121 28.2792L73.9121 57.6089L24.5439 57.6089L13.2074 28.2792L0.408268 15.3741L14.6702 0.513748L73.9121 28.2792Z"
          fill="#00FF00"
        />
        <path
          d="M24.5469 28.5635H49.23H73.9131V57.5635H24.5469V28.5635Z"
          fill="white"
        />
        <path
          d="M24.5469 28.5635H49.23H73.9131V57.5635H24.5469V28.5635Z"
          fill="white"
        />
        <path
          d="M14.1699 0.0908203L20.7085 6.80203L27.247 13.5132L13.5391 28.7642L0.462053 15.3418L14.1699 0.0908203Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.3223 58L24.3911 58L13.2187 28.91L0.000207839 15.4007L14.4652 1.74387e-05L74.3223 28.2584L74.3223 58ZM13.9556 28.7717L24.2637 55.6115L24.1709 28.7529L17.3284 25.0147L13.9556 28.7717ZM17.8571 24.4258L24.6233 28.1223L42.1856 28.1223L27.2246 13.9916L17.8571 24.4258ZM27.4258 13.159L27.4351 13.1476L43.2897 28.1223L72.224 28.1223L16.2907 1.71629L27.4258 13.159ZM14.5506 1.01203L26.6768 13.4732L17.1774 24.0545L1.13824 15.292L14.5506 1.01203ZM2.58255 16.9588L16.6487 24.6434L13.5161 28.1328L2.58255 16.9588ZM73.5916 28.9041L73.5916 56.7427L44.1173 28.9041L73.5916 28.9041ZM43.0133 28.9041L24.9022 28.9041L25 57.2183L72.9911 57.2183L43.0133 28.9041Z"
          fill="black"
        />
      </svg>

      design open source tools and workflows for spatial journalism.
    </h1>
    <a
      href="mailto:{atob(contact.mail)}"
      class="link px-2 py-1 sm:mt-5 inline-block pointer-events-auto text-base"
    >
      Contact us
    </a>
  </div>

  <div
    class="col-span-1 md:col-span-3 leading-tight text-xl sm:text-2xl mt-6 text-gray-500"
  >
    <p>
      Vantage is a toolkit for photo- and video-based spatial reconstruction
      designed for investigative journalists and fact-checkers by
      <a class="link-secondary" href="https://krisenstab.net/"> krisenstab.</a>
    </p>
    <p class="indent-10">
      We provide open source tools and guides for spatial journalism. Our web
      apps are free to use, run entirely in your browser and keep your data on
      your device.
    </p>
    <p class="indent-10">
      Initial development was funded by the German Federal Ministry of Education
      and Research and the Prototype Fund.
    </p>
  </div>
</section>
