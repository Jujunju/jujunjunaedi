import {  Code2, User } from 'lucide-react';
import { Braces, House } from 'react-bootstrap-icons';

function Navbar() {
  return (
    <div className="fixed left-0 right-0 bottom-0 mx-10 my-10 bg-gray-100 shadow-xl rounded-full p-2">
      <nav>
        <ul className="flex gap-18  justify-center items-center">
          <li className="flex flex-col justify-center items-center">
            <House size={20} />
            <span className="text-sm">Home</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <User size={20} />
            <span className="text-sm">About</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Code2 size={20} />
            <span className="text-sm">Skills</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Braces size={20} />
            <span className="text-sm">Projecs</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
