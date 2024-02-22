<script>
  import FooterBg from "$lib/images/footer-bg.png";
  import Logo from "$lib/svg/logo.svg";
</script>

<footer class="relative">
  <div class="container-custom mx-auto">
    <div class="flex justify-center mb-10">
      <h2 class="text-2xl italic font-medium bg-primary font-instrument">
        Solana Foundation Hackathon Official Rules
      </h2>
    </div>
    <div
      class="max-w-[34vw] mx-auto mb-28
    max-w-[34vw] mx-auto mb-28"
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
    <div class="flex justify-center pb-20">
      <ul class="flex items-center font-medium">
        <li>
          <a class="py-2 w-[112px] inline-block" href="https://"> Resources </a>
        </li>
        <li>
          <a class="py-2 w-[112px] inline-block" href="https://">
            Accelerator
          </a>
        </li>
        <li>
          <a class="py-2 w-[112px] inline-block" href="https://">
            <img src={Logo} alt="" />
          </a>
        </li>
        <li>
          <a class="py-2 w-[112px] inline-block" href="https://"> FAQs </a>
        </li>
        <li>
          <a class="py-2 w-[112px] inline-block" href="https://"> Register </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="absolute bottom-0">
    <img src={FooterBg} alt="" class="w-full" />
  </div>
</footer>
