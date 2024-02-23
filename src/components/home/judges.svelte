<script>
  import Judge from "$lib/images/judge.png";
  import JudgeClouds from "$lib/images/judges-clouds.png";
  import Cracks from "$lib/images/cracks.png";

  import { onMount } from "svelte";
  let isMobile = false;

  function checkIsMobile() {
    isMobile = window.innerWidth < 768;
  }

  onMount(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  });
</script>

<section
  class="py-24 relative"
  style="background: linear-gradient(180deg, #FEFCF9 0%, rgba(254, 252, 249, 0.00) 51%, #FEFCF9 100%), url({JudgeClouds}), lightgray 50% / cover no-repeat;"
>
  <div class="container-custom mx-auto relative z-10">
    <div class="flex mb-20">
      <h2
        class="text-6xl lg:text-8xl 2xl:text-heading-large italic text-center bg-primary relative leading-none font-instrument"
      >
        Judges
      </h2>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-r border-b"
    >
      {#each Array(Math.min(!isMobile ? 15 : 8, 15)) as _, index}
        <div class="border-t border-l xl:py-8 xl:px-12 p-4 group">
          <div>
            <img src={Judge} alt="" class="group-hover:mix-blend-darken" />
            <div>
              <h3
                class="font-medium xl:text-lg font-instrument group-hover:bg-primary duration-300"
              >
                Anatoly Yakovenko
              </h3>
              <p class="text-sm font-semibold">Co-founder, Solana Labs</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div
      class="border bg-[#F6F6F6] mt-10 md:hidden"
      style="top: calc(100% + 8px)"
    >
      <div class="border m-[2px] bg-white font-medium flex flex-col">
        <button class="py-3 w-full text-center">Load More</button>
      </div>
    </div>
  </div>
  <img
    src={Cracks}
    alt=""
    class="absolute top-1/2 -translate-y-1/2 opacity-30"
  />
</section>
