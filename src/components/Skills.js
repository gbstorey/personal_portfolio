import React from "react";
import { skills } from "../data";
import {CheckBadgeIcon} from "@heroicons/react/24/solid"

export default function Skills() {
    return (
        <section id="skills" className="text-gray-900 bg-gray-200 body-font scroll-mt-16 px-10 pb-10
        text-lg md:text-xl sm:text-2xl align-left">
          <div className="mx-auto">
            <div className="mb-10">
              <h1 className="sm:text-4xl text-3xl font-bold mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="text-gray-900 leading-relaxed lg:w-2/3">
                These are the skills I feel I can confidently apply in a production environment. I love learning new technologies and can be flexible with the stack I work in.
              </p>
            </div>
            <div className="flex flex-wrap sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="border-2 border-gray-700 rounded flex p-4 h-full items-center">
                    <CheckBadgeIcon className="text-amber-600 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="font-semibold">
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