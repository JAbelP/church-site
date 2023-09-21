import React from "react";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";

const ebG = EB_Garamond({ subsets: ["latin"] });

function Footer() {
  return (
    <div className={ebG.className}>
      <div className="text-black mt-6">
        <div className="bg-black h-8 mb-8" />
        <div className="flex flex-row gap-x-6 justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8445983612955!2d-81.38578!3d28.4541006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c56424b846b%3A0x86231d74c47a331f!2s7600%20Winegard%20Rd%2C%20Orlando%2C%20FL%2032809!5e0!3m2!1sen!2sus!4v1695267438256!5m2!1sen!2sus"
            width="703"
            height="324"
            style={{ border: "0" }} // Convert the style attribute to an object
            allowFullScreen="" // camelCase "allowfullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="w-[343px] h-[324px] relative  my-4 text-4xl">
            {/* Time and dates  */}
            <div className="w-[395px] mt-5 ">
              <div className="mb-8">
                <p className="underline">Visítanos</p>
                <p>7600 Winegard Rd. Orlando, FL 32809</p>
              </div>
              <div>
                <p className="underline">Horas</p>
                <div>
                  <p>Domingo 1:30 PM</p>
                  <p>Viernes 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-56">
          <div className="mb-40">
            <p className="text-5xl">Links</p>
            <p className="font-semibold">MOSAIC MENNONITE CONFERENCE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
