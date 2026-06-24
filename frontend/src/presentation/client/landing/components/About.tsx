import React from 'react';
import { BoxArrowUpRight, PersonVcard } from 'react-bootstrap-icons';
import about from '@assets/about.jpeg';

function About() {
  return (
    <div className="bg-white px-5 py-10 mb-0.5">
      <div>
        <div>
          <h2 className="text-2xl pt-5 font-mono flex justify-start items-center gap-3">
            <PersonVcard />
            About me
          </h2>
        </div>
        <div className="mt-5">
          <img src={about} alt="" className="w-72" />
        </div>
        <div>
          <div className="flex flex-col gap-3 py-5  text-gray-900">
            <p>
              Halo! Saya Jujun Junaedi, lulusan PPLG yang fokus pada Full-Stack Web Development menggunakan MERN Stack dan TypeScript. Dengan pendekatan learning by doing, saya selalu menerapkan prinsip Clean Architecture untuk menghasilkan
              kode yang rapi, modular, dan mudah dirawat. Saat ini, saya juga aktif mendalami Golang dan Java untuk memperkuat sisi backend, serta siap berkontribusi aktif dalam tim developer.
            </p>
            <a href='' className="flex justify-start items-center w-[13ch] underline gap-3">
              Contact me <BoxArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
