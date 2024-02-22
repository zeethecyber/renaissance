<script>
  // Components
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Tracks from "../components/home/tracks.svelte";

  // Images
  import BgClouds from "$lib/images/bgClouds.png";
  import FooterClouds from "$lib/images/footer-clouds.png";
  import HeroTitle from "$lib/svg/hero-title.svg";
  import HeroElements from "$lib/images/hero-elements.png";
  import Judges from "../components/home/judges.svelte";
  import Solana from "../components/icons/solana.svelte";
  import Logo from "../components/icons/logo.svelte";
  import Accelerator from "../components/home/accelerator.svelte";
  import Prizes from "../components/home/prizes.svelte";
</script>

<div class="bg-[#FEFCF9]">
  <div style="background-image: url({BgClouds})" class="bg-cover">
    <Header />
    <section>
      <div class="container-custom mx-auto mt-4">
        <img src={HeroTitle} alt="" srcset="" class="w-full" />
      </div>

      <div class="pt-[72px] pb-[102px] container-custom mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h2
              class="text-lg text-center md:text-left md:text-2xl font-medium text-dark1"
            >
              Start building the next breakout startup and bring the crypto
              ecosystem into the Golden Age.
            </h2>
            <button
              class="hidden md:block bg-dark1 py-4 px-8 text-white italic text-2xl mt-8 font-instrument"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-24 overflow-hidden flex justify-center">
      <img src={HeroElements} alt="" class="lg:w-full min-w-[1000px]" />
    </section>
  </div>

  <Accelerator />
  <Prizes />
  <Tracks />
  <Judges />
  <div style="background-image: url({FooterClouds});" class="bg-bottom">
    <div>
      <div class="flex overflow-hidden gap-3 py-8 text-dark1">
        {#each Array(20) as _, index}
          <div class="flex gap-3 items-center">
            <span class="whitespace-nowrap font-semibold leading-none pt-1"
              >SOLANA HACKATHON</span
            >
            <Logo className="h-4" />
          </div>
        {/each}
      </div>
    </div>

    <div class="container-custom mx-auto mb-[200px]">
      <h2
        class="text-[56px] italic font-medium py-16 text-center font-instrument"
      >
        With Support From
      </h2>
      <div class="grid grid-cols-5 gap-4">
        {#each Array(20) as _, index}
          <div class="border p-[2px] bg-[#F6F6F6]">
            <div
              class="border bg-white text-dark1 h-[100px] flex items-center justify-center hover:bg-dark1 hover:text-white duration-300"
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

<style></style>
