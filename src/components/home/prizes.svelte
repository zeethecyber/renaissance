<script lang="ts">
  // Components
  //   Images
  import PrizesClouds from "$lib/images/prizes-clouds.png";
  import PrizesCenter from "$lib/images/prizes-center.png";
  import PrizeQuadrant from "$lib/images/prizes-quadrant.png";
</script>

<section
  class="py-40 relative bg-cover"
  style="background: linear-gradient(180deg, #FEFCF9 0%, rgba(254, 252, 249, 0.00) 51%, #FEFCF9 100%), url({PrizesClouds}), lightgray 50% / cover no-repeat;"
>
  <div class="container-custom mx-auto">
    <div class="relative">
      <div class="absolute top-0 left-0 w-full">
        <h2 class="text-[136px] italic relative leading-none font-instrument">
          <span class="bg-primary">Prizes</span>
        </h2>
      </div>
      <div class="grid grid-cols-3">
        <!-- Row 1 -->
        <div></div>
        <div class="flex items-center justify-center">
          <div class="relative flex items-center justify-center">
            <img src={PrizeQuadrant} alt="" class="rotate-90" />
            <div class="absolute">
              <p class="font-instrument mb-4 italic font-semibold">USDC-SPL</p>
              <h3 class="text-9xl text-white font-semibold bg-dark1">$50K</h3>
              <p
                class="font-instrument bg-primary italic text-3xl w-min whitespace-nowrap"
              >
                Grand Champion
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <!-- Row 2 -->
        <div class="flex items-center justify-center">
          <div class="relative flex items-center justify-center">
            <img src={PrizeQuadrant} alt="" />
            <div class="absolute">
              <p class="font-instrument mb-4 italic font-semibold">USDC-SPL</p>
              <h3 class="text-9xl text-white font-semibold bg-dark1">$10K</h3>
              <p
                class="font-instrument bg-primary italic text-3xl w-min whitespace-nowrap"
              >
                Public Goods Award
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={PrizesCenter} alt="" class="scale-[1.15] z-10 relative" />
        </div>
        <div class="flex items-center justify-center">
          <div class="relative flex items-center justify-center">
            <img src={PrizeQuadrant} alt="" class="rotate-180" />
            <div class="absolute">
              <p class="font-instrument mb-4 italic font-semibold">USDC-SPL</p>
              <h3 class="text-9xl text-white font-semibold bg-dark1">$5K</h3>
              <p
                class="font-instrument bg-primary italic text-3xl w-min whitespace-nowrap"
              >
                Climate Award
              </p>
            </div>
          </div>
        </div>
        <!-- Row 3 -->
        <div></div>
        <div class="flex items-center justify-center">
          <div class="relative flex items-center justify-center">
            <img src={PrizeQuadrant} alt="" class="-rotate-90" />
            <div class="absolute">
              <p class="font-instrument mb-4 italic font-semibold">USDC-SPL</p>
              <h3 class="text-9xl text-white font-semibold bg-dark1">$10K</h3>
              <p
                class="font-instrument bg-primary italic text-3xl w-min whitespace-nowrap"
              >
                University Award
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</section>
