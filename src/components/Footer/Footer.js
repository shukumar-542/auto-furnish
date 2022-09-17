import { faArrowRight, faEnvelope, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
      return (
            <div className="bg-sky-900">
                  <div className="container mx-auto p-10 text-white ">
                  <div className="md:flex-row md:justify-between md:basis-3/4 flex flex-col justify-center gap-5 items-center">
                        <div className="flex flex-col space-y-6">
                              <div className="flex gap-10 border-b border-slate-500 p-6">
                                    <div className="space-y-5">
                                          <h1 className="text-lg font-bold">Policy Info</h1>
                                          <ul className="space-y-2">
                                                <li><a href="/">privacy Policy</a></li>
                                                <li><a href="/">Terms Of Sales</a></li>
                                                <li><a href="/">Return Policy</a></li>
                                                <li><a href="/">Cancel Policy</a></li>
                                                <li><a href="/">Shipping Policy</a></li>

                                          </ul>
                                    </div>
                                    <div className="space-y-5">
                                          <h1 className="text-lg font-bold">Company</h1>
                                          <ul className="space-y-2">
                                                <li><a href="/">About Us</a></li>
                                                <li><a href="/">In The News </a></li>
                                                <li><a href="/">Career</a></li>
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Contact Us</a></li>
                                          </ul>
                                    </div>
                                    <div className="space-y-5">
                                          <h1 className="text-lg font-bold">Business</h1>
                                          <ul className="space-y-2">
                                                <li><a href="/">Affiliate Partner</a></li>
                                                <li><a href="/">Bulk Order </a></li>
                                                <li><a href="/">EMI</a></li>
                                                <li><a href="/">Become a Distributor</a></li>
                                          </ul>
                                    </div>

                                    <div className="space-y-5">
                                          <h1 className="text-lg font-bold">Help</h1>
                                          <ul className="space-y-2">
                                                <li><a href="/">Payment Options</a></li>
                                                <li><a href="/">FAQ </a></li>
                                                <li><a href="/">Sitemap</a></li>
                                          </ul>
                                    </div>
                              </div>
                              <div className=" flex gap-5 md:flex-row">
                                    <h1 className="text-xl font-bold " >We Shall Response quickly</h1>
                                   <div className="flex gap-10">
                                   <p><FontAwesomeIcon icon={faHeadphones} /> +8801767137701</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} /> shukumar542@gmail.com</p>
                                   
                                   </div>
                              </div>
                             
                        </div>
                        <div className="space-y-5">
                              <h1 className="text-xl font-bold">News Letter And Subscriptions</h1>
                              <p>Subscribed Our News letter to get our lates information and offers</p>
                              <div className="flex">
                                    <input type="email" name="email" id="" placeholder='Your Email....' className="p-2 border border-red-600  text-black hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600" />
                                    <button className="bg-red-600 py-2 px-4"><FontAwesomeIcon icon={faArrowRight} /></button>
                              </div>
                        </div>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;