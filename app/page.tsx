import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="pb-14 pt-0">
      <div className="w-full">
        <div className="overflow-hidden bg-[#0f2230]">
          <div className="relative min-h-[720px] w-full">

            {/* Background Image */}
            <Image
              src="/images/hoarded-room-mackay-before.jpg"
              alt="Severe clutter before cleanup in Mackay"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0f2230]/70" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[720px] items-center px-6 sm:px-10 lg:px-16">
              <div className="max-w-[620px]">

                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  24/7 Urgent Response Line
                </p>

                <h1 className="font-display text-[3.6rem] leading-[0.95] text-white sm:text-[4.8rem]">
                  Biohazard &amp; Trauma Cleaning Mackay
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Discreet, controlled remediation for hoarding, squalor, trauma,
                  biohazard and complex property situations across Mackay and surrounding regions.
                </p>

                <div className="mt-8 flex gap-4">
                  <a
                    href="tel:0405450705"
                    className="rounded-full bg-red-500 px-6 py-3 font-semibold text-white"
                  >
                    Call the Response Line
                  </a>

                  <Link
                    href="/services"
                    className="rounded-full border border-white/40 px-6 py-3 text-white"
                  >
                    View Services
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
