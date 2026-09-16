import React, { useState } from "react";
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
      desc: "Connect your compatible BSC wallet to the BVT Presale platform.",
    },
    {
      Icon: TrendingUp,
      number: "02",
      title: "Select Payment",
      desc: "Choose BNB or USDT and enter the amount you want to contribute.",
    },
    {
      Icon: CheckCircle,
      number: "03",
      title: "Confirm Transaction",
      desc: "Review the transaction details and confirm the purchase through your wallet.",
    },
    {
      Icon: Gift,
      number: "04",
      title: "Receive BVT",
      desc: "Your purchased BVT allocation will be credited according to the distribution schedule.",
    },
  ];

  /* =====================================================
     PAYMENT CONFIG
  ===================================================== */

  const PAYMENT_METHODS = {
    BNB: {
      name: "BNB",
      rate: 60000,
      icon: "/images/bnb_logo.png",
      description: "Pay with BNB",
    },

    USDT: {
      name: "USDT",
      rate: 20,
      icon: "/images/usdt_logo.png",
      description: "Pay with USDT",
    },
  };

  /* =====================================================
     STATE
  ===================================================== */

  const [walletConnected, setWalletConnected] = useState(false);

  const [bnbAmount, setBnbAmount] = useState("");
  const [usdtAmount, setUsdtAmount] = useState("");

  const [bnbBuying, setBnbBuying] = useState(false);
  const [usdtBuying, setUsdtBuying] = useState(false);

  const [bnbSuccess, setBnbSuccess] = useState(false);
  const [usdtSuccess, setUsdtSuccess] = useState(false);

  const [bnbError, setBnbError] = useState("");
  const [usdtError, setUsdtError] = useState("");

  /* =====================================================
     CALCULATIONS
  ===================================================== */

  const bnbNumericAmount = parseFloat(bnbAmount) || 0;
  const usdtNumericAmount = parseFloat(usdtAmount) || 0;

  const bnbBvtAmount =
    bnbNumericAmount > 0
      ? Math.floor(bnbNumericAmount * PAYMENT_METHODS.BNB.rate)
      : 0;

  const usdtBvtAmount =
    usdtNumericAmount > 0
      ? Math.floor(usdtNumericAmount * PAYMENT_METHODS.USDT.rate)
      : 0;

  /* =====================================================
     WALLET
  ===================================================== */

  const handleWalletConnect = () => {
    setBnbError("");
    setUsdtError("");

    setWalletConnected((prev) => !prev);
  };

  /* =====================================================
     BNB INPUT
  ===================================================== */

  const handleBnbChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setBnbAmount(value);
      setBnbError("");
      setBnbSuccess(false);
    }
  };

  /* =====================================================
     USDT INPUT
  ===================================================== */

  const handleUsdtChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setUsdtAmount(value);
      setUsdtError("");
      setUsdtSuccess(false);
    }
  };

  /* =====================================================
     BUY BNB
  ===================================================== */

  const handleBuyBnb = async () => {
    setBnbError("");
    setBnbSuccess(false);

    if (!walletConnected) {
      setBnbError("Please connect your wallet first.");
      return;
    }

    if (!bnbAmount || bnbNumericAmount <= 0) {
      setBnbError("Enter a valid BNB amount to continue.");
      return;
    }

    setBnbBuying(true);

    /*
      Replace this section with your actual
      BNB smart contract transaction.
    */

    await new Promise((resolve) => setTimeout(resolve, 1800));

    setBnbBuying(false);
    setBnbSuccess(true);
  };

  /* =====================================================
     BUY USDT
  ===================================================== */

  const handleBuyUsdt = async () => {
    setUsdtError("");
    setUsdtSuccess(false);

    if (!walletConnected) {
      setUsdtError("Please connect your wallet first.");
      return;
    }

    if (!usdtAmount || usdtNumericAmount <= 0) {
      setUsdtError("Enter a valid USDT amount to continue.");
      return;
    }

    setUsdtBuying(true);

    /*
      Replace this section with your actual
      USDT smart contract transaction.
    */

    await new Promise((resolve) => setTimeout(resolve, 1800));

    setUsdtBuying(false);
    setUsdtSuccess(true);
  };

  /* =====================================================
     PAYMENT CARD
  ===================================================== */

  const PaymentCard = ({
    type,
    amount,
    bvtAmount,
    onAmountChange,
    onBuy,
    isBuying,
    success,
    error,
  }) => {
    const method = PAYMENT_METHODS[type];

    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          border
          border-[#D4AF37]/20
          bg-[#050F2B]
          shadow-[0_20px_80px_rgba(0,0,0,.25)]
        "
      >
        {/* TOP GOLD LINE */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#FFD700]
            to-transparent
          "
        />

        {/* CORNER GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-[-100px]
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#D4AF37]/[0.05]
            blur-[80px]
          "
        />

        <div className="relative z-10 p-5 sm:p-7 lg:p-8">

          {/* PAYMENT HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              border-b
              border-white/[0.07]
              pb-5
            "
          >
            <div className="flex items-center gap-4">

              {/* COIN ICON */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-white/[0.03]
                  p-1
                "
              >
                <img
                  src={method.icon}
                  alt={method.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#D4AF37]
                  "
                >
                  Payment Method
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-black
                    text-white
                    sm:text-2xl
                  "
                >
                  {method.name}
                </h3>

                <p className="mt-1 text-[10px] text-slate-500">
                  {method.description}
                </p>
              </div>
            </div>

            {/* RATE */}

            <div
              className="
                hidden
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/[0.04]
                px-3
                py-2
                text-right
                sm:block
              "
            >
              <p className="text-[7px] uppercase tracking-wider text-slate-500">
                Presale Rate
              </p>

              <p className="mt-1 font-mono text-[9px] font-bold text-[#D4AF37]">
                1 {method.name} ={" "}
                {method.rate.toLocaleString()} BVT
              </p>
            </div>
          </div>

          {/* MOBILE RATE */}

          <div
            className="
              mt-4
              block
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-3
              py-2
              sm:hidden
            "
          >
            <p className="text-[7px] uppercase tracking-wider text-slate-500">
              Presale Rate
            </p>

            <p className="mt-1 font-mono text-[9px] font-bold text-[#D4AF37]">
              1 {method.name} ={" "}
              {method.rate.toLocaleString()} BVT
            </p>
          </div>

          {/* AMOUNT INPUT */}

          <div className="mt-6">

            <div className="mb-2 flex items-center justify-between">
              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                "
              >
                Amount You Pay
              </span>

              <span className="font-mono text-[9px] text-[#D4AF37]">
                {method.name}
              </span>
            </div>

            <div
              className="
                flex
                min-h-[70px]
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
                onChange={onAmountChange}
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

              <div
                className="
                  ml-3
                  flex
                  items-center
                  gap-2
                "
              >
                <div className="h-7 w-px bg-white/[0.08]" />

                <span
                  className="
                    font-mono
                    text-xs
                    font-bold
                    text-[#D4AF37]
                  "
                >
                  {method.name}
                </span>
              </div>
            </div>
          </div>

          {/* RECEIVE BVT */}

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
            <div className="flex items-center justify-between gap-4">

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
                  You Receive
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

          {/* ERROR */}

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

          {/* SUCCESS */}

          <AnimatePresence>
            {success && (
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

                Transaction request successfully prepared.
              </motion.div>
            )}
          </AnimatePresence>

          {/* BUY BUTTON */}

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
            onClick={onBuy}
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
                BUY BVT WITH {method.name}

                <ArrowRight size={15} />
              </>
            ) : (
              <>
                CONNECT WALLET TO BUY

                <Wallet size={15} />
              </>
            )}
          </motion.button>

          {/* SECURITY */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              border-t
              border-white/[0.06]
              pt-5
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
                tracking-[0.18em]
                text-slate-500
              "
            >
              Secure BSC Transaction
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  /* =====================================================
     RETURN
  ===================================================== */

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
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">

        {/* GRID */}

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

        {/* LEFT GLOW */}

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

        {/* CENTER GLOW */}

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

        {/* RIGHT GLOW */}

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

      {/* MAIN */}

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

        {/* HEADER */}

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
              Simple Process
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
            Choose your preferred payment method,
            enter your amount and secure your BVT
            allocation during the presale.
          </p>
        </motion.div>

        {/* =================================================
            WALLET CONNECT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-8 max-w-4xl"
        >
          <button
            onClick={handleWalletConnect}
            className={`
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
                  `
                  : `
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/[0.04]
                    text-[#D4AF37]
                    hover:border-[#D4AF37]/50
                    hover:bg-[#D4AF37]/10
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
        </motion.div>

        {/* =================================================
            BNB + USDT SEPARATE SECTIONS
        ================================================= */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-6xl
            gap-5
            lg:grid-cols-2
          "
        >

          {/* BNB */}

          <PaymentCard
            type="BNB"
            amount={bnbAmount}
            bvtAmount={bnbBvtAmount}
            onAmountChange={handleBnbChange}
            onBuy={handleBuyBnb}
            isBuying={bnbBuying}
            success={bnbSuccess}
            error={bnbError}
          />

          {/* USDT */}

          <PaymentCard
            type="USDT"
            amount={usdtAmount}
            bvtAmount={usdtBvtAmount}
            onAmountChange={handleUsdtChange}
            onBuy={handleBuyUsdt}
            isBuying={usdtBuying}
            success={usdtSuccess}
            error={usdtError}
          />
        </div>

        {/* =================================================
            BUY STEPS
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

                {/* TOP LINE */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-[#FFD700]
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* NUMBER */}

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

                {/* ICON */}

                <div
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
                    className="text-[#D4AF37]"
                  />
                </div>

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

                {/* STEP */}

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