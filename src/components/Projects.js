import {CodeBracketIcon} from "@heroicons/react/24/solid"
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font scroll-mt-16">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Projects and Designs
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                My best projects, web applications, Python programs, and data analysis reports.
              </p>
            </div>
            <div className="flex flex-wrap">
              {projects.map((project) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative h-full">
                    <img
                      alt="gallery"
                      className="absolute inset-0 h-full w-full object-cover object-left-top opacity-0 lg:opacity-100"
                      src={project.image}
                    /> 
                    <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-800 bg-gray-900 opacity-100 lg:opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}