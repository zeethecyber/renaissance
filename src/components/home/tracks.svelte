<script lang="ts">
  // Components
  import TrackTabBtn from "../ui/track-tab-btn.svelte";

  // Images
  import SolanaLogo from "$lib/svg/solana-logo.svg";
  import TracksContainer from "$lib/images/tracks-container.png";
  import TrackLeft from "$lib/svg/track-bottom-left.svg";
  import TrackRight from "$lib/svg/track-top-right.svg";
  import DePinTrack from "$lib/images/depin-track.png";
  import DeFiTrack from "$lib/images/defi-track.png";
  import GamingTrack from "$lib/images/gaming-track.png";
  import ConsumerTrack from "$lib/images/consumer-track.png";
  import InfrastructureTrack from "$lib/images/infrastructure-track.png";

  const trackTabs = [
    "DePin",
    "DeFi & Payments",
    "DAOs & Communities",
    "Consumer Apps",
    "Gaming",
    "Infrastructure",
  ];
  let activeTab = "DePin";
  let activeImage = DePinTrack;

  function changeActiveTab(tab: string) {
    activeTab = tab;
    renderImages(tab);
  }

  function renderImages(tab: string) {
    switch (tab) {
      case "DePin":
        activeImage = DePinTrack;
        break;
      case "DeFi & Payments":
        activeImage = DeFiTrack;
        break;
      case "DAOs & Communities":
        activeImage = DePinTrack;
        break;
      case "Consumer Apps":
        activeImage = ConsumerTrack;
        break;
      case "Gaming":
        activeImage = GamingTrack;
        break;
      case "Infrastructure":
        activeImage = InfrastructureTrack;
        break;
    }
  }
</script>

<section class="py-24">
  <div class="container-custom mx-auto">
    <div class="relative">
      <div class="flex mb-20 gap-10">
        <h2
          class="text-[136px] italic text-center bg-primary relative leading-none font-instrument"
        >
          Tracks
        </h2>
        <div class="flex gap-6 flex-wrap max-w-3xl">
          {#each trackTabs as tab}
            <button on:click={() => changeActiveTab(tab)}>
              <TrackTabBtn title={tab} active={tab === activeTab} />
            </button>
          {/each}
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-3 flex flex-col justify-between p-10">
          <div>
            <h2 class="text-6xl font-semibold">{activeTab}</h2>
            <p class="font-medium font-2xl mt-6">
              Design crypto incentivizes to build physical infrastructure
              networks to disrupt traditional incumbents.
            </p>
          </div>
          <div>
            <p>Presented by</p>
            <img src={SolanaLogo} alt="" srcset="" />
          </div>
        </div>
        <div class="col-span-6 flex justify-center items-center">
          <div class="relative flex items-center justify-center">
            <img src={TracksContainer} alt="" />
            <img src={activeImage} alt="" class="absolute" />
          </div>
        </div>
        <div class="col-span-3 flex items-end p-10">
          <ul class="w-full flex flex-col gap-6">
            <li class="flex items-center justify-between">
              <div class="font-instrument flex gap-4 items-center">
                <span
                  class="rounded-full text-dark1 bg-primary flex items-center justify-center w-[40px] h-[32px] italic"
                  >I</span
                >
                <span class="text-[20px]">First Prize</span>
              </div>
              <div class="font-semibold text-2xl">$30,000</div>
            </li>
            <li class="flex items-center justify-between">
              <div class="font-instrument flex gap-4 items-center">
                <span
                  class="rounded-full text-dark1 bg-primary flex items-center justify-center w-[40px] h-[32px] italic"
                  >II</span
                >
                <span class="text-[20px]">Second Prize</span>
              </div>
              <div class="font-semibold text-2xl">$20,000</div>
            </li>
            <li class="flex items-center justify-between">
              <div class="font-instrument flex gap-4 items-center">
                <span
                  class="rounded-full text-dark1 bg-primary flex items-center justify-center w-[40px] h-[32px] italic"
                  >III</span
                >
                <span class="text-[20px]">Third Prize</span>
              </div>
              <div class="font-semibold text-2xl">$15,000</div>
            </li>
            <li class="flex items-center justify-between">
              <div class="font-instrument flex gap-4 items-center">
                <span
                  class="rounded-full text-dark1 bg-primary flex items-center justify-center w-[40px] h-[32px] italic"
                  >IV</span
                >
                <span class="text-[20px]">Fourth Prize</span>
              </div>
              <div class="font-semibold text-2xl">$10,000</div>
            </li>
            <li class="flex items-center justify-between">
              <div class="font-instrument flex gap-4 items-center">
                <span
                  class="rounded-full text-dark1 bg-primary flex items-center justify-center w-[40px] h-[32px] italic"
                  >V</span
                >
                <span class="text-[20px]">Fifth Prize</span>
              </div>
              <div class="font-semibold text-2xl">$5,000</div>
            </li>
          </ul>
        </div>
      </div>

      <img src={TrackLeft} alt="" class="absolute bottom-0 left-0" />
      <img src={TrackRight} alt="" class="absolute top-0 right-0" />
    </div>
  </div>
</section>
