<script>
  import Judge from "$lib/images/judge.png";
  import JudgeClouds from "$lib/images/judges-clouds.png";
  import Cracks from "$lib/images/cracks.png";
</script>

<section
  class="py-24 relative"
  style="background: linear-gradient(180deg, #FEFCF9 0%, rgba(254, 252, 249, 0.00) 51%, #FEFCF9 100%), url({JudgeClouds}), lightgray 50% / cover no-repeat;"
>
  <div class="container-custom mx-auto relative z-10">
    <div class="flex mb-20">
      <h2
        class="text-[136px] italic text-center bg-primary relative leading-none font-instrument"
      >
        Judges
      </h2>
    </div>
    <div class="grid grid-cols-5 border-r border-b">
      {#each Array(15) as _, index}
        <div class="border-t border-l py-8 px-12">
          <div>
            <img src={Judge} alt="" />
            <div>
              <h3 class="font-medium text-lg font-instrument">
                Anatoly Yakovenko
              </h3>
              <p class="font-sm font-semibold">Co-founder, Solana Labs</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <img
    src={Cracks}
    alt=""
    class="absolute top-1/2 -translate-y-1/2 opacity-30"
  />
</section>
