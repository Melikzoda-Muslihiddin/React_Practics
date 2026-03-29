const Footer = () => {
  return (
    <footer className="bg-[#1f1f21] text-white">
      <div className="mx-auto max-w-350 px-6 py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <img
              src="/images/logo.svg"
              alt=""
              className="mb-4 h-12 w-40 object-contain brightness-0 invert"
            />

            <p className="max-w-[320px] leading-7 text-white/65">
              Strategy, automation and clean digital execution for modern
              brands.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black uppercase">Navigation</h3>
            <div className="flex flex-col gap-3 text-white/70">
              <span>Home</span>
              <span>Services</span>
              <span>Results</span>
              <span>Todo</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black uppercase">Contact</h3>
            <div className="flex flex-col gap-3 text-white/70">
              <span>hello@manifold.com</span>
              <span>+1 000 000 0000</span>
              <span>New York, USA</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black uppercase">About</h3>
            <p className="leading-7 text-white/65">
              We build digital systems that look good, work cleanly and support
              long-term growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Manifold. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
