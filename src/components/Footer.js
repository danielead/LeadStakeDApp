import React from "react";

export default () => {
  return (
    <div className="py-8 footer-bg">
      <footer className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div>
            <a
              href="/"
              className="logo flex flex-row items-center"
            >
              <img
                src="/images/full-logo-footer.png"
                width="220"
                className="cursor-pointer"
                alt="LEAD"
              />
            </a>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Products</div>
            <div>Business Console</div>
            <div>Settlement Layer</div>
            <div>Crypto Wallets</div>
            <div>LEAD Pride</div>
          </div> */}
          <div className="text-white leading-7 text-xs cursor-pointer flex flex-col">
            <a
              href="#"
              className="font-Montserrat-ExtraBold uppercase"
            >
              About Us
            </a>
            {/* <div>Project</div> */}
            <a href="#">Contact Us</a>
            <a href="#">Team</a>
            {/* <div>Ecosystem</div> */}
            <a href="#">The Token</a>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Solutions</div>
            <div>Grow Your Business with our Monetization</div>
            <div>Technology</div>
            <div>The PSP Solution</div>
            <div>Use Your Cryptocurrency</div>
          </div> */}
          <div className="text-white leading-7 text-xs cursor-pointer flex flex-col">
            <div className="font-Montserrat-ExtraBold uppercase">
              Documentation
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-white">
        <div fluid>
          &copy; {new Date().getFullYear()} Copyright: Lead Cyber Services Limited
        </div>
      </div>
      </footer>
    </div>
  );
};
