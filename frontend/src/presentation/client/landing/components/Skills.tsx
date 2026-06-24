import React from 'react';
import { Braces } from 'react-bootstrap-icons';
import { skills } from '../data/skills';

function Skills() {
  return (
    <div className="bg-white px-5 py-10 mb-0.5">
      <div>
        <div>
          <h2 className="text-2xl py-5 font-mono flex justify-start items-center gap-3">
            <Braces />
            Skills
          </h2>
        </div>
        <div className=" text-gray-900 grid grid-cols-1 gap-5 lg:gap-8">
          {skills.map((skill) => (
            <div key={skill.id}>
              <h2>{skill.title}</h2>
              <div className="flex flex-wrap gap-2  mt-1">
                {skill.tech.map((t) => (
                  <div>
                    <p className="bg-gray-200 p-2">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
