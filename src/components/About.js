import Navbar from "./Navbar";
import React from "react";

export default function About() {
    return (
        <section id="about" className={"bg-gray-50 md:bg-profile bg-right-top bg-no-repeat sm-h-full h-initial z-0 " +
            "max-w-screen-xl mx-auto md:h-hero"}>
          <Navbar />
          <div className="mx-auto flex px-10 md:flex-row flex-col sm:pb-5
          h-5/6 base:bg-none max-w-screen-xl">
            <div className="md:w-7/12 lg:w-5/12 flex flex-col
            md:items-start md:text-left md:mb-16 md:mb-0 items-center text-center text-gray-900 md:text-white">
              <h1 className="sm:text-5xl text-4xl mb-4 font-medium">
                Hi, I'm Garrett.
                  <img src="/profile.png" alt="Garrett Storey"
                       className="w-7/12 mx-auto mt-5 mb-2 rounded-xl border-2 border-black/70 md:hidden"/>
                <span className={"text-2xl block pt-2"}>Owner of Potentia Web Solutions</span>
              </h1>
              <p className="mb-8 leading-relaxed md:text-xl sm:text-2xl">
                  I build elegant and useful solutions to help New Mexican businesses grow and succeed.
                  Using cutting-edge web design and ecommerce strategies, we can obliterate the competition.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex bg-none font-semibold border border-gray-900 md:border-white
                  text-center order-0 py-2 px-6 hover:text-devil-gold hover:border-devil-gold rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-900 bg-amber-600 border border-gray-900
                  text-center font-bold py-2 px-6 hover:bg-devil-gold/80 text-gray-200
                  rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
          </div>
        </section>
      );
}