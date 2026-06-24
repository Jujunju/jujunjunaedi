import { BoxArrowUpRight, CodeSquare } from 'react-bootstrap-icons';
import { projects } from '../data/projects';
import '../css/projects.style.css'

function Projects() {
  return (
    <div className="bg-white px-5 py-10 mb-0.5">
      <div>
        <div>
          <h2 className="text-2xl py-5 font-mono flex justify-start items-center gap-3">
            <CodeSquare />
            My Projects
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div className=" p-2">
                <div>
                  <img src={project.image} alt="" className="" />
                </div>
                <div className="overflow-y-auto h-56 no-scrollbar">
                  <h2 className="mt-5 text-xl font-semibold">{project.title}</h2>
                  <p className="mt-4 text-sm tracking-tight">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech) => (
                      <div>
                        <p className="bg-gray-200 p-2 text-sm">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <a href="" className="flex justify-center  items-center gap-2 font-semibold bg-green-800 text-white underline py-2">
                    Visit App <BoxArrowUpRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
