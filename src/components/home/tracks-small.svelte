<script lang="ts">
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
  import Accordion from "../ui/accordion.svelte";

  let activeImage = DePinTrack;

  function renderImages(tab: string) {
    switch (tab) {
      case "DePin":
        activeImage = DePinTrack;
        break;
      case "DeFi":
        activeImage = DeFiTrack;
        break;
      case "Payments":
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

  let show: number | null = 0;
  const items = [
    "DePin",
    "DeFi",
    "Payments",
    "Consumer Apps",
    "Gaming",
    "Infrastructure",
  ];

  const showCollapse = (i: number) => {
    i === show ? (show = null) : (show = i);
    renderImages(items[i]);
  };
</script>

<section class="py-24">
  <div class="container-custom mx-auto">
    <div class="relative">
      <div class="flex gap-10 relative z-10">
        <h2
          class="text-6xl lg:text-8xl 2xl:text-heading-large italic text-center bg-primary relative leading-none font-instrument"
        >
          Tracks
        </h2>
      </div>
      {#each items as item, i}
        <Accordion index={i} {item} {show} {showCollapse}>
          <div class="mt-10">
            <h2 class="text-6xl font-semibold">
              {show !== null && show >= 0 && items[show]}
            </h2>
            <p class="font-medium text-2xl mt-6">
              Design crypto incentivizes to build physical infrastructure
              networks to disrupt traditional incumbents.
            </p>
          </div>
          <div>
            <p class="text-lg mt-6">Presented by</p>
            <img src={SolanaLogo} alt="" srcset="" />
          </div>
          <div class="relative flex items-center justify-center mt-10">
            <img src={TracksContainer} alt="" />
            <img src={activeImage} alt="" class="absolute" />
          </div>
          <ul class="w-full flex flex-col gap-6 mt-10">
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
        </Accordion>
      {/each}

      <img
        src={TrackLeft}
        alt=""
        class="hidden md:block absolute bottom-0 left-0"
      />
      <img
        src={TrackRight}
        alt=""
        class="hidden md:block absolute top-0 right-0"
      />
    </div>
  </div>
</section>
