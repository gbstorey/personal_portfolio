import Navbar from "./Navbar";
import React from "react";

export default function About() {
    return (
        <section id="about" className={"md:bg-profile bg-right-top bg-no-repeat sm-h-full h-initial z-0 " +
            "max-w-screen-xl mx-auto md:h-hero"}>
          <Navbar />
            <hr className={"pb-6 md:invisible"}/>
          <div className="mx-auto flex px-10 md:flex-row flex-col sm:pb-5
          h-5/6 base:bg-none max-w-screen-xl">
            <div className="md:w-7/12 lg:w-5/12 flex flex-col
            md:items-start md:text-left md:mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-5xl text-4xl mb-4 font-medium text-white">
                Hi, I'm Garrett.
                <span className={"text-2xl block pt-2"}>Owner of Potentia Web Solutions</span>
              </h1>
              <p className="mb-8 leading-relaxed md:text-xl sm:text-2xl text-gray-200">
                  I build elegant and useful solutions to help New Mexican businesses grow and succeed.
                  Using cutting-edge web design and ecommerce strategies, we can obliterate the competition.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-none text-white font-semibold
                  border-2 border-white text-center order-0 py-2 px-6 hover:bg-white/20
                  rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-amber-900/90 bg-devil-gold
                  text-center font-bold py-2 px-6 hover:bg-devil-gold/90
                  rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
          </div>
        </section>
      );
}