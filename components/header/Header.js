import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { ButtonText, ButtonOutlined, Navigation, Search } from "..";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="bg-white shadow-md h-[60px] w-screen fixed top-0 z-30 ">
        <div className="max-w-[1248px] mx-auto h-full flex items-center px-1 md:px-4 ">
          {/* Mobile menu button */}
          <div className="mr-3 md:hidden" onClick={toggleMenu}>
            <HiMenuAlt2 size={25} />
          </div>
          <Link href="/" passHref>
            <a className="font-medium text-[24px] ">
              The
              <span className="text-green-700 font-medium text-[24px] ">
                Un
              </span>
              explained.
            </a>
          </Link>
          <div className="flex-1 ml-6 ">{/* <Search /> */}</div>
          <div className="hidden md:flex items-center">
            <div className="mr-4 ">
              <ButtonText text="Log in" />
            </div>
            <div>
              <ButtonOutlined text="Create account" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}

      {open && (
        <>
          <div className="w-[240px] fixed top-0 left-[0] h-screen z-20 bg-white shadow-xl md:hidden animate-fade-in">
            <div className="mt-[70px]"></div>
            <Navigation closeMenu={closeMenu} />
            <hr className="border-black opacity-40 my-4 w-[95%] mx-auto " />
            <div className="flex flex-col justify-center items-center mt-4 ">
              <div className="mb-4 ">
                <ButtonText text="Log in" />
              </div>
              <div>
                <ButtonOutlined text="Create account" />
              </div>
            </div>
          </div>

          {/* Backdrop */}
          <div
            className="bg-black w-screen h-screen fixed top-0 right-0 z-10 opacity-50"
            onClick={closeMenu}
          ></div>
        </>
      )}
    </>
  );
};

export default Header;
