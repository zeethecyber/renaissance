<script>
  import FooterBg from "$lib/images/footer-bg.png";
  import Logo from "$lib/svg/logo.svg";
</script>

<footer class="relative">
  <div class="container-custom mx-auto">
    <div class="flex justify-center mb-10">
      <h2
        class="text-center md:text-left text-2xl italic font-medium bg-primary font-victor"
      >
        Solana Foundation Hackathon Official Rules
      </h2>
    </div>
    <div
      class="w-[34vw] sm:max-w-screen-md mx-8 sm:mx-auto mb-28 relative z-10"
    >
      <p class="text-center text-dark2 text-sm leading-relaxed">
        The Solana Renaissance Hackathon is a competition where projects will be
        evaluated by judges on their technological merits without consideration
        of legal viability. Participants in the Hackathon will create software
        solely for purposes of evaluation by judges as part of a competition and
        not for commercial deployment or release as part of the Hackathon. All
        participants must comply with applicable laws and regulations when
        releasing any software that they develop as part of the Hackathon.
      </p>
      <p class="text-center text-dark2 text-sm leading-relaxed mt-8">
        The developer resources that Solana Foundation (“SF”) provides are for
        educational and inspirational purposes only. SF does not encourage,
        induce or sanction the deployment of any such applications in violation
        of applicable laws or regulations. SF does not encourage, induce or
        sanction the deployment, integration or use of any such applications
        (including the code comprising the Solana blockchain protocol) in
        violation of applicable laws or regulations and hereby prohibits any
        such deployment, integration or use. This includes use of any such
        applications by the reader (a) in violation of export control or
        sanctions laws of the United States or any other applicable
        jurisdiction, (b) if the reader is located in or ordinarily resides in a
        country or territory subject to comprehensive sanctions administered by
        the U.S. Office of Foreign Assets Control (OFAC), (c) if the reader is
        or is working on behalf of a Specially Designated National (SDN) or is a
        person subject to similar blocking or denied party prohibitions, or (d)
        in violation of the Commodities and Exchange Act.
      </p>
    </div>
    <div class="max-w-2xl mx-auto pb-20 relative z-10">
      <ul class="grid grid-cols-5 font-medium">
        <li class="py-2 flex justify-center items-center">
          <a
            class="inline-block text-sm md:text-base hover:opacity-75 duration-300"
            href="/"
          >
            Resources
          </a>
        </li>
        <li class="py-2 flex justify-center items-center">
          <a
            class="inline-block text-sm md:text-base hover:opacity-75 duration-300"
            href="/"
          >
            FAQs
          </a>
        </li>
        <li class="py-2 flex justify-center items-center">
          <a
            class="inline-block text-sm md:text-base hover:opacity-75 duration-300"
            href="/"
          >
            <img src={Logo} alt="" class="w-8 md:w-auto shrink-0" />
          </a>
        </li>
        <li class="py-2 flex justify-center items-center">
          <a
            class="inline-block text-sm md:text-base hover:opacity-75 duration-300"
            href="/"
          >
            Accelerator
          </a>
        </li>
        <li class="py-2 flex justify-center items-center">
          <a
            class="inline-block text-sm md:text-base hover:opacity-75 duration-300"
            href="/"
          >
            Register
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="absolute bottom-0 hidden sm:block left-0 right-0">
    <img src={FooterBg} alt="" class="w-full" />
  </div>
</footer>
