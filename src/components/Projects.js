import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-900 bg-gray-50 body-font scroll-mt-16
        text-lg md:text-xl sm:text-2xl">
          <div className="py-10 mx-auto text-center md:text-left px-10">
            <div className="flex flex-col w-full mb-10">
              <h1 className="sm:text-4xl text-3xl font-bold mb-4">
                My Projects and Designs
              </h1>
              <p className="lg:w-2/3 leading-relaxed">
                My best projects, web applications, Python programs, and data analysis reports.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {projects.map((project) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={project.image}
                  className="flex-grow basis-1/2 sm:basis-1/3 border-2 border-gray-700 h-full">
                  <div className="flex relative sm:h-72">
                    <img
                      alt="gallery"
                      className="absolute inset-0 h-full w-full object-cover
                      object-top opacity-0 md:opacity-100"
                      src={project.image}
                    /> 
                    <div className="py-4 px-2 md:p-6 relative z-1 w-full text-sm
                    bg-gray-100 opacity-100 md:opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-amber-600 font-semibold mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-xl sm:text-2xl font-semibold my-2">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed text-sm sm:text-lg">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}