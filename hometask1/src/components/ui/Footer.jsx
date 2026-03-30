import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] px-6 pb-12 pt-20">
      <div className="mx-auto max-w-280">
        <div className="grid gap-y-12 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <p className="max-w-55 text-[13px] leading-8 text-[#7b7b7b]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-[14px] text-[#1877F2]" />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-[14px] text-[#E4405F]" />
              </a>

              <a href="#" aria-label="Google">
                <FaGoogle className="text-[14px] text-[#DB4437]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-[#2d2d2d]">Home</h3>

            <ul className="mt-7 space-y-4">
              <li className="text-[13px] text-[#4f4f4f]">Booking</li>
              <li className="text-[13px] text-[#4f4f4f]">Facilities</li>
              <li className="text-[13px] text-[#4f4f4f]">Location</li>
              <li className="text-[13px] text-[#4f4f4f]">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-[#2d2d2d]">Help</h3>

            <ul className="mt-7 space-y-4">
              <li className="text-[13px] text-[#4f4f4f]">About Us</li>
              <li className="text-[13px] text-[#4f4f4f]">Help center</li>
              <li className="text-[13px] text-[#4f4f4f]">Privacy policy</li>
              <li className="text-[13px] text-[#4f4f4f]">FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-[#2d2d2d]">
              Get the app
            </h3>

            <ul className="mt-7 space-y-4">
              <li className="text-[13px] text-[#4f4f4f]">iOS app</li>
              <li className="text-[13px] text-[#4f4f4f]">Android app</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
