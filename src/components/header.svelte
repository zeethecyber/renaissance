<script>
  import Logo from "$lib/svg/logo.svg";
</script>

<header class="py-10 flex justify-center items-center">
  <nav class="hidden md:block">
    <div class="border bg-[#F6F6F6]">
      <div
        class="flex items-center border m-[2px] bg-white font-medium gap-1 relative"
      >
        <a href="http://" class="py-3 w-[134px] text-center">Resources</a>
        <a href="http://" class="py-3 w-[134px] text-center mr-20"
          >Accelerator</a
        >
        <div
          class="border bg-white flex h-20 w-20 absolute left-1/2 -translate-x-1/2"
        >
          <div class="border m-[2px] grow flex items-center justify-center">
            <img src={Logo} alt="" srcset="" />
          </div>
        </div>
        <a href="http://" class="py-3 w-[134px] text-center">FAQs</a>
        <a
          href="http://"
          class="py-3 w-[134px] text-center bg-primary italic font-normal"
          >Register Now</a
        >
      </div>
    </div>
  </nav>
  <nav class="md:hidden">
    <div class="border bg-[#F6F6F6]">
      <div
        class="flex items-center border m-[2px] bg-white font-medium gap-1 relative"
      >
        <button
          class="py-3 w-[110px] mr-20 text-base flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <span>Menu</span>
        </button>

        <div
          class="border bg-white flex h-20 w-20 absolute left-1/2 -translate-x-1/2"
        >
          <div class="border m-[2px] grow flex items-center justify-center">
            <img src={Logo} alt="" srcset="" />
          </div>
        </div>
        <a
          href="http://"
          class="py-3 w-[110px] text-center bg-primary italic font-normal font-instrument"
          >Register</a
        >
      </div>
    </div>
  </nav>
</header>
