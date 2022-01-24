import Link from "next/link";
import { navLinks } from "./navLinks";
import { socials } from "./socials";

const Navigation = () => {
  return (
    <nav className="pt-4 ">
      <ul>
        {navLinks.map((link, index) => (
          <Link href={link.to} key={index} passHref>
            <li className="font-medium hover:bg-green-200 hover:scale-[1.02] antialiased transition-all cursor-pointer py-1 pl-1 rounded-md flex items-center">
              {link.icon}
              <a className="pl-2 ">{link.name}</a>
            </li>
          </Link>
        ))}
      </ul>
      <hr className="border-black opacity-40 my-4 w-[95%] mx-auto " />

      {/* Social icons */}
      <div>
        <ul className="flex items-center justify-center ">
          {socials.map(({ icon }, index) => (
            <li
              className="px-2 cursor-pointer hover:scale-[1.4] transition"
              key={index}
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
