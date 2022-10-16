import React from "react";
import { skills } from "../data";
import {CpuChipIcon, CheckBadgeIcon} from "@heroicons/react/24/solid"

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-16">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
              <CpuChipIcon className="w-10 inline-block mb-4"/>
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                These are the skills I feel I can confidently apply in a production environment. I love learning new technologies and can be flexible with the stack I work in.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <CheckBadgeIcon className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}