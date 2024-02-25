<script lang="ts">
  // Images
  import HeroTitle from "$lib/svg/hero-title.svg";
  import HeroTitleSmall from "$lib/svg/hero-title-small.svg";

  import { onMount } from "svelte";

  const TAB_WIDTH = 768;

  let windowWidth = 0;

  onMount(() => {
    windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
    });

    return () => {
      window.removeEventListener("resize", () => {
        windowWidth = window.innerWidth;
      });
    };
  });
</script>

<section>
  <div class="container-custom mx-auto mt-4">
    <img
      src={windowWidth < TAB_WIDTH ? HeroTitleSmall : HeroTitle}
      alt=""
      srcset=""
      class="w-full"
    />
  </div>

  <div class="pt-[72px] pb-[102px] container-custom mx-auto">
    <div class="grid md:grid-cols-2 gap-40 items-start">
      <div>
        <h2
          class="text-lg md:text-[28px] text-center md:text-left font-medium text-dark1 leading-snug"
        >
          Start building the next breakout startup and bring the crypto
          ecosystem into the Golden Age.
        </h2>
        <button
          class="hidden md:flex items-center gap-2 bg-dark1 py-4 px-8 text-white italic text-2xl mt-8 font-victor hover:bg-primary hover:text-dark1 duration-500"
        >
          Register now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
          >
            <path
              d="M9.77734 0.777832C9.77734 4.21427 12.5631 7.00005 15.9996 7.00005C12.5631 7.00005 9.77734 9.78584 9.77734 13.2223"
              stroke="currentColor"
              stroke-width="2"
            />
            <rect
              y="6.11108"
              width="13.3333"
              height="1.77778"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex items-center justify-center md:justify-end gap-5 md:gap-9 mt-6 md:mt-0"
      >
        <div>
          <h4 class="text-2xl lg:text-5xl xl:text-7xl font-instrument italic">
            {windowWidth > TAB_WIDTH ? "March 4" : "March 4, 24"}
          </h4>
          <p class="text-2xl font-medium hidden md:block mt-2">2024</p>
        </div>
        <div class="w-8 h-[1px] bg-dark1 opacity-35"></div>
        <div>
          <h4 class="text-2xl lg:text-5xl xl:text-7xl font-instrument italic">
            {windowWidth > TAB_WIDTH ? "April 8" : "April 8, 24"}
          </h4>
          <p class="text-2xl font-medium hidden md:block mt-2">2024</p>
        </div>
      </div>

      <button
        class="md:hidden flex items-center justify-between gap-2 bg-dark1 py-4 px-8 text-white italic text-xl mt-8 font-instrument hover:bg-primary hover:text-dark1 duration-500"
      >
        Register Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <path
            d="M9.77734 0.777832C9.77734 4.21427 12.5631 7.00005 15.9996 7.00005C12.5631 7.00005 9.77734 9.78584 9.77734 13.2223"
            stroke="currentColor"
            stroke-width="2"
          />
          <rect
            y="6.11108"
            width="13.3333"
            height="1.77778"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
