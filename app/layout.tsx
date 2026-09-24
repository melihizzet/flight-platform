<style jsx global>{`

  /* ===================================================== */
  /* UÇAK ANİMASYONU                                      */
  /* Yumuşak kalkış + hafif süzülme efekti                */
  /* ===================================================== */

  @keyframes planeFly {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    }

    15% {
      transform: translate3d(2px, -1px, 0) rotate(-1deg) scale(1.01);
    }

    30% {
      transform: translate3d(5px, -4px, 0) rotate(-2deg) scale(1.02);
    }

    45% {
      transform: translate3d(8px, -7px, 0) rotate(-3deg) scale(1.03);
    }

    60% {
      transform: translate3d(10px, -5px, 0) rotate(-2deg) scale(1.02);
    }

    75% {
      transform: translate3d(6px, -3px, 0) rotate(-1deg) scale(1.01);
    }

    90% {
      transform: translate3d(2px, -1px, 0) rotate(0deg) scale(1);
    }

    100% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    }
  }

  .animate-plane-fly {
    display: inline-block;
    transform-origin: center center;
    animation: planeFly 3.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    will-change: transform;
  }

  /* Hareket azaltma tercihi olan kullanıcılar için */
  @media (prefers-reduced-motion: reduce) {
    .animate-plane-fly {
      animation: none !important;
    }
  }

  /* ===================================================== */
  /* BİLET SEÇ BUTONU                                      */
  /* ===================================================== */

  .ucgit-ticket-button {
    background: linear-gradient(
      135deg,
      #5b2cff 0%,
      #7428ff 100%
    ) !important;

    color: white !important;

    border: none !important;

    border-radius: 12px !important;

    min-height: 48px !important;

    padding: 0 28px !important;

    font-size: 15px !important;

    font-weight: 700 !important;

    cursor: pointer !important;

    box-shadow:
      0 8px 20px rgba(91, 44, 255, 0.18) !important;

    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease !important;
  }

  .ucgit-ticket-button:hover {
    transform: translateY(-1px) !important;

    box-shadow:
      0 10px 24px rgba(91, 44, 255, 0.25) !important;
  }

`}</style>
