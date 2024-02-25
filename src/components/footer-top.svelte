<script lang="ts">
  import Solana from "../components/icons/solana.svelte";
  import Logo from "../components/icons/logo.svelte";

  import { onMount } from "svelte";

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
    class="text-4xl md:text-[56px] italic font-medium py-16 text-center font-victor"
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
