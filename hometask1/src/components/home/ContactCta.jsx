const ContactCta = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="bg-[#f3f3f3] py-20 md:py-24">
      <div className="mx-auto max-w-350 px-6">
        <div className="rounded-xl bg-[#1f1f21] px-10 py-12 text-white shadow-[0_12px_35px_rgba(0,0,0,0.14)] md:px-12 md:py-14 xl:px-14">
          <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr] xl:items-start">
            
            <div>
              <h2 className="text-5xl font-black uppercase leading-[1.02] md:text-6xl xl:text-7xl">
                Subscribe
                <br />
                to <span className="text-[#ff3b3f]">L.U.Y.E</span>
              </h2>

              <p className="mt-6 text-[22px] font-semibold text-[#ff3b3f]">
                Level Up Your Email Newsletter
              </p>
            </div>


            <div className="xl:pt-2">
              <div className="space-y-7 text-[18px] leading-8 text-white/95">
                <p>
                  Our aim is to level up your email marketing to world-class
                  standards. We want to bring joy to your readers and deliver
                  excellent ROI for your business. That’s why we created our
                  email newsletter.
                </p>

                <p>
                  But here is the thing: it’s not just about us promoting our
                  agency services. In our emails, we share valuable advice and
                  practical tips based on our own experiences. Our goal is to
                  help you enhance your email marketing without breaking the
                  bank.
                </p>

                <p className="text-[#ff3b3f]">
                  Let&apos;s join forces and make your emails shine!
                </p>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-3xl font-black uppercase">
                  Subscribe to L.U.Y.E.
                </h3>

                <form className="flex w-full flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 w-full rounded-md border border-white/10 bg-white px-4 text-black outline-none placeholder:text-black/25"
                  />

                  <button
                    type="submit"
                    className="h-14 shrink-0 rounded-md bg-[#ff3b3f] px-8 text-sm font-bold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="mt-4 text-sm text-white/45">
                  Согласие на получение писем?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
