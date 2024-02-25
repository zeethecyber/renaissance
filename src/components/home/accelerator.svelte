<script lang="ts">
  //   Images
  import PreSeed from "$lib/images/prize-img-1.png";
  import Network from "$lib/svg/prize-img-2.svg";
  import Mentorship from "$lib/svg/prize-img-3.svg";
  import BgCloud from "$lib/images/bg-cloud-single.png";
  import Title from "../ui/title.svelte";
  import AcceleratorCard from "../ui/accelerator-card.svelte";
</script>

<section class="pt-40 relative">
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
        <Title>
          <span class="bg-primary inline-block">Colosseum's</span><br /><span
            class="bg-primary inline-block">Accelerator</span
          >
        </Title>
      </div>
      <div class="flex items-end">
        <p class="font-medium text-[20px] md:text-2xl text-dark2 mt-12">
          All hackathon winners will be interviewed and considered for
          Colosseum's accelerator program. Accepted teams will receive:
        </p>
      </div>
    </div>
    <div
      class="grid justify-center xl:justify-start xl:grid-cols-3 xl:h-[1000px] mt-28 gap-x-20 gap-y-28"
    >
      <div class="flex items-start">
        <AcceleratorCard
          number={1}
          image={PreSeed}
          title="$250,000"
          subtitle="in pre-seed funding"
        />
      </div>

      <div class="flex items-center">
        <AcceleratorCard
          number={2}
          image={Network}
          title="Network"
          subtitle="Exclusive access to an elite founder network"
        />
      </div>
      <div class="flex items-end">
        <AcceleratorCard
          number={3}
          image={Mentorship}
          title="Mentorship"
          subtitle="Direct ecosystem connections and 1:1 mentorship."
        />
      </div>
    </div>
  </div>
  <img src={BgCloud} alt="" class="absolute top-0 right-0" />
  <img src={BgCloud} alt="" class="absolute bottom-0 left-0" />
</section>
