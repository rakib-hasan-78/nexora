import React from "react";
import { Link } from 'react-router';
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import footerImage from '../../../assets/footer-image.png'
const FooterLinks = () => {
  return (
    <section className="footer sm:footer-horizontal text-slate-200 flex flex-row pb-10">
      <aside className="w-5/12">
      <div className="w-1/4">
        <Link to={'/'}>
            <img className="object-left"
            src={footerImage} alt="" />
        </Link>
      </div>
        <p>
          welcome to nexora INC. you go-to destination for
          <br />
          the latest & the unbiased news.
        </p>
        <div className="flex items-center space-x-3 mt-2">
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaFacebookF />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaXTwitter />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaInstagram />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaTiktok />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaYoutube />
            </Link>
        </div>
      </aside>
      <div className="w-7/12 flex items-start space-x-28 justify-end">
        <nav className="flex flex-col space-y-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col space-y-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col space-y-2">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>

      </div>     
      
    </section>
  );
};

export default FooterLinks;
