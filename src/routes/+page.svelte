<script lang="ts">
  // Components
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Tracks from "../components/home/tracks.svelte";

  // Images
  import BgClouds from "$lib/images/bgClouds.png";
  import FooterClouds from "$lib/images/footer-clouds.png";
  import HeroTitle from "$lib/svg/hero-title.svg";
  import HeroTitleSmall from "$lib/svg/hero-title-small.svg";
  import HeroElements from "$lib/images/hero-elements.png";
  import Judges from "../components/home/judges.svelte";
  import Solana from "../components/icons/solana.svelte";
  import Logo from "../components/icons/logo.svelte";
  import Accelerator from "../components/home/accelerator.svelte";
  import Prizes from "../components/home/prizes.svelte";
  import ElementCracks from "$lib/images/elementCracks.png";

  import { onMount } from "svelte";
  import TracksSmall from "../components/home/tracks-small.svelte";
  import Modal from "../components/ui/modal.svelte";

  const TAB_WIDTH = 768;

  let windowWidth = 0;
  let showModal = false;

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

<div class="bg-[#FEFCF9]">
  <div
    style="background-image: url({BgClouds}); background-position: center top;"
    class="bg-cover relative"
  >
    <div class="relative z-10">
      <Header />
      <section class="pb-[600px]">
        <div class="container-custom mx-auto mt-4">
          <img
            src={windowWidth < TAB_WIDTH ? HeroTitleSmall : HeroTitle}
            alt=""
            srcset=""
            class="w-full"
          />
        </div>

        <div class="pt-[72px] pb-[102px] container-custom mx-auto">
          <div class="grid md:grid-cols-2 items-start">
            <div>
              <h2
                class="text-lg text-center md:text-left md:text-2xl font-medium text-dark1"
              >
                Start building the next breakout startup and bring the crypto
                ecosystem into the Golden Age.
              </h2>
              <button
                class="hidden md:flex items-center gap-2 bg-dark1 py-4 px-8 text-white italic text-2xl mt-8 font-instrument hover:bg-primary hover:text-dark1 duration-500"
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
            <div
              class="flex items-center justify-center md:justify-end gap-5 md:gap-9 mt-6 md:mt-0"
            >
              <div>
                <h4
                  class="text-2xl lg:text-5xl xl:text-7xl font-instrument italic"
                >
                  {windowWidth > TAB_WIDTH ? "March 4" : "March 4, 24"}
                </h4>
                <p class="text-2xl font-medium hidden md:block">2024</p>
              </div>
              <div class="w-8 h-[2px] bg-dark1"></div>
              <div>
                <h4
                  class="text-2xl lg:text-5xl xl:text-7xl font-instrument italic"
                >
                  {windowWidth > TAB_WIDTH ? "April 8" : "April 8, 24"}
                </h4>
                <p class="text-2xl font-medium hidden md:block">2024</p>
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
      <section
        class="mt-24 overflow-hidden flex justify-center relative z-10 mt-[-23%]"
      >
        <img
          src={HeroElements}
          alt=""
          class="lg:w-full min-w-[1000px]"
          on:click={() => {
            showModal = true;
          }}
        />
      </section>
    </div>
    <div class="absolute top-0 left-0 right-0">
      <div class="container-custom mx-auto">
        <img src={ElementCracks} alt="" class="w-full opacity-25" />
      </div>
    </div>
  </div>

  <Accelerator />
  <Prizes />
  {#if windowWidth > 1440}
    <Tracks />
  {:else}
    <TracksSmall />
  {/if}
  <Judges />
  <div
    class="bg-bottom"
    style="background: linear-gradient(180deg, #FDF9F5 0%, rgba(254, 252, 249, 0.00) 100%), linear-gradient(0deg, rgba(198, 177, 149, 0.20) 0%, rgba(198, 177, 149, 0.20) 100%), url({FooterClouds}), lightgray 50% / cover no-repeat;"
  >
    <div>
      <marquee behavior="" direction="left">
        <div
          class="flex overflow-x-auto custom-scrollbar overflow-hidden gap-3 py-8 text-dark1"
        >
          {#each Array(20) as _, index}
            <div class="flex gap-3 items-center">
              <span class="whitespace-nowrap font-semibold leading-none pt-1"
                >SOLANA HACKATHON</span
              >
              <Logo className="h-4" />
            </div>
          {/each}
        </div>
      </marquee>
    </div>

    <div class="container-custom mx-auto mb-[200px]">
      <h2
        class="text-4xl md:text-[56px] italic font-medium py-16 text-center font-instrument"
      >
        With Support From
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {#each Array(windowWidth < TAB_WIDTH ? 12 : 20) as _, index}
          <div class="border p-[2px] bg-[#F6F6F6]">
            <div
              class="border bg-white text-dark1 h-[100px] flex items-center justify-center hover:bg-dark1 hover:text-white duration-300 cursor-pointer"
            >
              <Solana />
            </div>
          </div>
        {/each}
      </div>
    </div>
    <Footer />
  </div>
</div>

<Modal bind:showModal>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/HXcJM0mOp40?si=b6kENEYxfnBpc_ZR"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</Modal>

<style></style>
