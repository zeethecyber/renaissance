<script lang="ts">
  // Components
  //   Images
  import PreSeed from "$lib/images/pre-seed.png";
  import Network from "$lib/images/network.png";
  import Mentorship from "$lib/images/mentorship.png";
  import BgCloud from "$lib/images/bg-cloud-single.png";
</script>

<section class="py-40 relative">
  <div class="container-custom mx-auto relative z-[10]">
    <div class="mb-20 grid xl:grid-cols-2 2xl:grid-cols-3">
      <div class="2xl:col-span-2">
        <div class="flex">
          <p
            class="text-[20px] md:text-2xl text-dark2 font-medium mb-10 after:content-[''] after:w-16 md:after:w-24 after:h-[1px] relative after:absolute after:left-[120%] flex items-center after:bg-[#BDBDBD]"
          >
            Now introducing
          </p>
        </div>
        <h2
          class="text-6xl lg:text-8xl 2xl:text-[136px] italic relative leading-none font-instrument"
        >
          <span class="bg-primary">Colosseum's</span><br /><span
            class="bg-primary">Accelerator</span
          >
        </h2>
      </div>
      <div class="flex items-end">
        <p class="font-medium text-[20px] md:text-2xl text-dark2 mt-12">
          All hackathon winners will be interviewed and considered for
          Colosseum's accelerator program. Accepted teams will receive:
        </p>
      </div>
    </div>
    <div
      class="grid justify-center xl:justify-start xl:grid-cols-3 h-[1000px] mt-28 gap-x-20 gap-y-28"
    >
      <div>
        <div class="flex flex-col md:items-center xl:items-start">
          <div class="relative">
            <img src={PreSeed} alt="" />
            <div
              class="w-[34px] h-[50px] text-[20px] text-white italic font-instrument bg-dark1 rounded-full absolute top-0 left-0 flex items-center justify-center"
            >
              I
            </div>
          </div>
          <h3 class="text-4xl md:text-7xl font-semibold mt-10">$250,000</h3>
          <h5
            class="text-xl md:text-2xl font-medium mt-2 text-dark2 xl:text-left"
          >
            in pre-seed funding
          </h5>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex flex-col md:items-center xl:items-start">
          <div class="relative">
            <img src={Network} alt="" />
            <div
              class="w-[34px] h-[50px] text-[20px] text-white italic font-instrument bg-dark1 rounded-full absolute top-0 left-0 flex items-center justify-center"
            >
              II
            </div>
          </div>
          <h3 class="text-4xl md:text-7xl font-semibold mt-10">Network</h3>
          <h5
            class="text-xl md:text-2xl font-medium mt-2 text-dark2 xl:text-left"
          >
            Exclusive access to an elite founder network
          </h5>
        </div>
      </div>
      <div class="flex items-end">
        <div class="flex flex-col md:items-center xl:items-start">
          <div class="relative">
            <img src={Mentorship} alt="" />
            <div
              class="w-[34px] h-[50px] text-[20px] text-white italic font-instrument bg-dark1 rounded-full absolute top-0 left-0 flex items-center justify-center"
            >
              III
            </div>
          </div>
          <h3 class="text-4xl md:text-7xl font-semibold mt-10">Mentorship</h3>
          <h5
            class="text-xl md:text-2xl font-medium mt-2 text-dark2 xl:text-left"
          >
            Direct ecosystem connections and 1:1 mentorship.
          </h5>
        </div>
      </div>
    </div>
  </div>
  <img src={BgCloud} alt="" class="absolute top-0 right-0" />
  <img src={BgCloud} alt="" class="absolute bottom-0 left-0" />
</section>
