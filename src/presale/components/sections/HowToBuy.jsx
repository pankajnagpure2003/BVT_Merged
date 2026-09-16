 
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  CheckCircle,
  Gift,
  ArrowRight,
  ShieldCheck,
  Zap,
  AlertCircle,
  Loader2,
  Check,
} from "lucide-react";

function HowToBuy() {
  /* =====================================================
     BUY STEPS
  ===================================================== */

  const steps = [
    {
      Icon: Wallet,
      number: "01",
      title: "Connect Wallet",
      desc: "Connect your compatible Blockchain wallet to the BVT Presale platform.",
    },
    {
      Icon: TrendingUp,
      number: "02",
      title: "Select Amount",
      desc: "Enter the amount you want to contribute according to the available presale terms.",
    },
    {
      Icon: CheckCircle,
      number: "03",
      title: "Confirm Transaction",
      desc: "Review the transaction details and confirm through your wallet.",
    },
    {
      Icon: Gift,
      number: "04",
      title: "Receive BVT",
      desc: "Your purchased BVT allocation will be credited according to the distribution schedule.",
    },
  ];

  /* =====================================================
     PAYMENT METHODS
  ===================================================== */

  const paymentMethods = [
    {
      name: "BNB",
      symbol: "BNB",
      rate: 60000,
      icon: "/images/bnb_logo.png",
    },
    {
      name: "USDT",
      symbol: "USDT",
      rate: 20,
      icon: "/images/usdt_logo.png",
    },
  ];

  /* =====================================================
     STATE
  ===================================================== */

  const [walletConnected, setWalletConnected] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BNB");
  const [isBuying, setIsBuying] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [error, setError] = useState("");

  /* =====================================================
     CURRENT PAYMENT METHOD
  ===================================================== */

  const currentMethod = useMemo(() => {
    return (
      paymentMethods.find(
        (item) => item.name === currency
      ) || paymentMethods[0]
    );
  }, [currency]);

  /* =====================================================
     BVT CALCULATION
  ===================================================== */

  const numericAmount = parseFloat(amount) || 0;

  const bvtAmount =
    numericAmount > 0
      ? Math.floor(
          numericAmount * currentMethod.rate
        )
      : 0;

  /* =====================================================
     CURRENCY CHANGE
  ===================================================== */

  const handleCurrencyChange = (method) => {
    setCurrency(method);
    setAmount("");
    setError("");
    setPurchaseSuccess(false);
  };

  /* =====================================================
     WALLET CONNECT
  ===================================================== */

  const handleWalletConnect = () => {
    setError("");
    setPurchaseSuccess(false);

    setWalletConnected((prev) => !prev);
  };

  /* =====================================================
     AMOUNT CHANGE
  ===================================================== */

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setError("");
      setPurchaseSuccess(false);
    }
  };

  /* =====================================================
     BUY BVT
  ===================================================== */

  const handleBuy = async () => {
    setError("");
    setPurchaseSuccess(false);

    if (!walletConnected) {
      setError("Please connect your wallet first.");
      return;
    }

    if (!amount || numericAmount <= 0) {
      setError(
        `Enter a valid ${currency} amount to continue.`
      );
      return;
    }

    setIsBuying(true);

    /*
      Replace this section later with your real
      blockchain transaction / smart contract call.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 1800)
    );

    setIsBuying(false);
    setPurchaseSuccess(true);
  };

  return (
    <section
      id="how-to-buy"
      className="
        relative
        overflow-hidden
        bg-[#020B2D]
        py-10
        sm:py-24
        lg:py-28
      "
    >
      {/* =================================================
          BACKGROUND 
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(212,175,55,.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(212,175,55,.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Top glow */}
        <div
          className="
            absolute
            -left-40
            top-10
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#D4AF37]/[0.07]
            blur-[100px]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-[45%]
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-[#D4AF37]/[0.025]
            blur-[100px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.05]
            blur-[110px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-14
          "
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/[0.04]
              px-4
              py-2
            "
          >
            <Zap
              size={13}
              className="text-[#FFD700]"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#D4AF37]
              "
            >
              Simple process
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            How to Buy{" "}
            <span className="text-[#D4AF37]">
              BVT
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Follow these simple steps to secure
            your BVT tokens during the presale.
          </p>
        </motion.div>

        {/* =================================================
            PURCHASE TERMINAL
            NOW COMES FIRST
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            w-full
            max-w-4xl
          "
        >
          <div
            className="
              relative
              overflow-hidden
              border
              border-[#D4AF37]/20
              bg-[#050F2B]
              shadow-[0_20px_80px_rgba(0,0,0,.25)]
            "
          >
            {/* Scanning line */}

            <motion.div
              animate={{
                x: ["-100%", "500%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1.5,
              }}
              className="
                absolute
                left-0
                top-0
                z-10
                h-px
                w-28
                bg-gradient-to-r
                from-transparent
                via-[#FFD700]
                to-transparent
              "
            />

            {/* Corner glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-48
                w-48
                rounded-full
                bg-[#D4AF37]/[0.035]
                blur-[70px]
              "
            />

            <div
              className="
                relative
                z-10
                p-5
                sm:p-7
                lg:p-9
              "
            >
              {/* =================================================
                  TERMINAL HEADER
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  border-b
                  border-white/[0.07]
                  pb-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        ${
                          walletConnected
                            ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.7)]"
                            : "bg-[#D4AF37]"
                        }
                      `}
                    />

                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-[#D4AF37]
                      "
                    >
                      Purchase terminal
                    </p>
                  </div>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-black
                      text-white
                      sm:text-2xl
                    "
                  >
                    BUY BVT TOKEN
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-slate-500
                    "
                  >
                    Secure your BVT allocation
                    during the presale.
                  </p>
                </div>

                <div
                  className="
                    w-fit
                    border
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/[0.05]
                    px-3
                    py-2
                    font-mono
                    text-[8px]
                    font-bold
                    tracking-[0.12em]
                    text-[#D4AF37]
                  "
                >
                  BSC NETWORK
                </div>
              </div>

              {/* =================================================
                  WALLET CONNECT
              ================================================= */}

              <button
                onClick={handleWalletConnect}
                className={`
                  mt-6
                  flex
                  min-h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  border
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  ${
                    walletConnected
                      ? `
                        border-emerald-400/30
                        bg-emerald-400/[0.06]
                        text-emerald-400
                        shadow-[0_0_25px_rgba(52,211,153,.05)]
                      `
                      : `
                        border-[#D4AF37]/25
                        bg-[#D4AF37]/[0.04]
                        text-[#D4AF37]
                        hover:border-[#D4AF37]/50
                        hover:bg-[#D4AF37]/10
                        hover:shadow-[0_0_25px_rgba(212,175,55,.08)]
                      `
                  }
                `}
              >
                {walletConnected ? (
                  <>
                    <CheckCircle size={17} />
                    WALLET CONNECTED
                  </>
                ) : (
                  <>
                    <Wallet size={17} />
                    CONNECT WALLET
                  </>
                )}
              </button>

              {/* =================================================
                  PAY WITH
              ================================================= */}

              <div className="mt-7">
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    Pay with
                  </p>

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-wider
                      text-slate-600
                    "
                  >
                    Select currency
                  </span>
                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-3
                  "
                >
                  {paymentMethods.map(
                    (method) => {
                      const isActive =
                        currency === method.name;

                      return (
                        <motion.button
                          key={method.name}
                          whileHover={{
                            y: -2,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          onClick={() =>
                            handleCurrencyChange(
                              method.name
                            )
                          }
                          className={`
                            relative
                            flex
                            min-h-[64px]
                            items-center
                            justify-center
                            gap-3
                            overflow-hidden
                            border
                            px-3
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? `
                                  border-[#D4AF37]/70
                                  bg-[#D4AF37]/[0.08]
                                  text-[#FFD700]
                                  shadow-[0_0_25px_rgba(212,175,55,.06)]
                                `
                                : `
                                  border-white/[0.08]
                                  bg-white/[0.02]
                                  text-slate-500
                                  hover:border-white/[0.15]
                                  hover:bg-white/[0.035]
                                  hover:text-slate-300
                                `
                            }
                          `}
                        >
                          {isActive && (
                            <div
                              className="
                                absolute
                                left-0
                                top-0
                                h-px
                                w-full
                                bg-gradient-to-r
                                from-transparent
                                via-[#FFD700]
                                to-transparent
                              "
                            />
                          )}

                          <div
                            className={`
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              overflow-hidden
                              rounded-full
                              border
                              ${
                                isActive
                                  ? "border-[#D4AF37]/40 bg-black/10"
                                  : "border-white/[0.08]"
                              }
                            `}
                          >
                            <img
                              src={method.icon}
                              alt={method.name}
                              className="
                                h-full
                                w-full
                                object-cover
                              "
                            />
                          </div>

                          <div className="text-left">
                            <span
                              className="
                                block
                                text-xs
                                font-bold
                              "
                            >
                              {method.name}
                            </span>

                            <span
                              className="
                                mt-0.5
                                block
                                text-[8px]
                                text-slate-500
                              "
                            >
                              1 {method.name} =
                              {" "}
                              {method.rate.toLocaleString()}
                              {" "}
                              BVT
                            </span>
                          </div>

                          {isActive && (
                            <CheckCircle
                              size={14}
                              className="
                                ml-auto
                                text-[#FFD700]
                              "
                            />
                          )}
                        </motion.button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* =================================================
                  AMOUNT
              ================================================= */}

              <div className="mt-6">
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    Amount
                  </span>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      text-[#D4AF37]
                    "
                  >
                    {currency}
                  </span>
                </div>

                <div
                  className="
                    flex
                    min-h-[68px]
                    items-center
                    border
                    border-white/[0.08]
                    bg-[#020B2D]
                    px-4
                    transition-all
                    focus-within:border-[#D4AF37]/40
                    focus-within:shadow-[0_0_25px_rgba(212,175,55,.04)]
                  "
                >
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={
                      handleAmountChange
                    }
                    placeholder="0.00"
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      py-3
                      text-2xl
                      font-bold
                      text-white
                      outline-none
                      placeholder:text-slate-700
                    "
                  />

                  <span
                    className="
                      ml-3
                      font-mono
                      text-[10px]
                      font-bold
                      text-[#D4AF37]
                    "
                  >
                    {currency}
                  </span>
                </div>
              </div>

              {/* =================================================
                  RECEIVE
              ================================================= */}

              <motion.div
                layout
                className="
                  mt-4
                  border
                  border-[#D4AF37]/15
                  bg-[#D4AF37]/[0.035]
                  p-4
                  sm:p-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                      "
                    >
                      You receive
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={bvtAmount}
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="
                          mt-1
                          flex
                          items-baseline
                          gap-2
                        "
                      >
                        <span
                          className="
                            text-2xl
                            font-black
                            text-[#FFD700]
                            sm:text-3xl
                          "
                        >
                          {bvtAmount.toLocaleString()}
                        </span>

                        <span
                          className="
                            text-[9px]
                            font-bold
                            text-slate-500
                          "
                        >
                          BVT
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#D4AF37]/15
                      bg-[#020B2D]
                    "
                  >
                    <Gift
                      size={16}
                      className="text-[#D4AF37]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  ERROR
              ================================================= */}

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2
                      border
                      border-red-400/20
                      bg-red-400/[0.05]
                      px-4
                      py-3
                      text-[9px]
                      text-red-300
                    "
                  >
                    <AlertCircle
                      size={14}
                      className="shrink-0"
                    />

                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  SUCCESS
              ================================================= */}

              <AnimatePresence>
                {purchaseSuccess && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                      mt-4
                      flex
                      items-center
                      gap-3
                      border
                      border-emerald-400/20
                      bg-emerald-400/[0.05]
                      px-4
                      py-3
                      text-[9px]
                      text-emerald-300
                    "
                  >
                    <Check
                      size={15}
                      className="shrink-0"
                    />

                    Transaction request
                    successfully prepared.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  BUY BUTTON
              ================================================= */}

              <motion.button
                whileHover={
                  !isBuying
                    ? {
                        scale: 1.01,
                        boxShadow:
                          "0 0 35px rgba(212,175,55,.18)",
                      }
                    : {}
                }
                whileTap={
                  !isBuying
                    ? {
                        scale: 0.98,
                      }
                    : {}
                }
                disabled={isBuying}
                onClick={handleBuy}
                className={`
                  mt-5
                  flex
                  min-h-[60px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  px-5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-300
                  ${
                    isBuying
                      ? `
                        cursor-wait
                        border-[#D4AF37]/20
                        bg-[#D4AF37]/50
                        text-[#020B2D]/70
                      `
                      : `
                        border-[#FFD700]/30
                        bg-gradient-to-r
                        from-[#B8860B]
                        via-[#D4AF37]
                        to-[#FFD700]
                        text-[#020B2D]
                        hover:brightness-110
                      `
                  }
                `}
              >
                {isBuying ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    PROCESSING...
                  </>
                ) : walletConnected ? (
                  <>
                    BUY BVT NOW
                    <ArrowRight size={15} />
                  </>
                ) : (
                  <>
                    CONNECT WALLET TO BUY
                    <Wallet size={15} />
                  </>
                )}
              </motion.button>

              {/* =================================================
                  SECURITY
              ================================================= */}

              <div
                className="
                  mt-6
                  border-t
                  border-white/[0.06]
                  pt-5
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <ShieldCheck
                    size={13}
                    className="text-emerald-400"
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    Secured transaction
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-4
                  "
                >
                  {[
                    [
                      "/images/metamask.webp",
                      "MetaMask",
                    ],
                    [
                      "/images/trustwallet.webp",
                      "Trust Wallet",
                    ],
                    [
                      "/images/bscscan.webp",
                      "BscScan",
                    ],
                  ].map(([src, alt]) => (
                    <motion.div
                      key={alt}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        p-1
                        transition-all
                        hover:border-[#D4AF37]/30
                      "
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            4 STEP CARDS
            NOW BELOW BUY SECTION
        ================================================= */}

        <div
          className="
            mt-10
            grid
            gap-4
            sm:mt-12
            sm:grid-cols-2
            lg:mt-14
            lg:grid-cols-4
          "
        >
          {steps.map(
            (
              {
                Icon,
                number,
                title,
                desc,
              },
              i
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-white/[0.08]
                  bg-[#07143A]
                  p-6
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/30
                  hover:bg-[#091A47]
                  hover:shadow-[0_15px_40px_rgba(0,0,0,.18)]
                "
              >
                {/* Top active line */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    origin-left
                    bg-gradient-to-r
                    from-[#FFD700]
                    to-transparent
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    font-mono
                    text-[10px]
                    font-bold
                    tracking-[0.15em]
                    text-[#D4AF37]/40
                  "
                >
                  {number}
                </div>

                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  className="
                    mb-7
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/[0.06]
                    transition-all
                    duration-300
                    group-hover:border-[#D4AF37]/50
                    group-hover:bg-[#D4AF37]/10
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="
                      text-[#D4AF37]
                    "
                  />
                </motion.div>

                <h3
                  className="
                    text-base
                    font-black
                    text-white
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-slate-400
                  "
                >
                  {desc}
                </p>

                {/* Bottom arrow */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-600
                    transition-colors
                    group-hover:text-[#D4AF37]
                  "
                >
                  Step {number}

                  <ArrowRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
 
