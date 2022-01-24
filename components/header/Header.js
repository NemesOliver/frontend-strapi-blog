import Link from "next/link";
import { ButtonText, ButtonOutlined } from "..";

const Header = () => {
  return (
    <div className="bg-white shadow-md h-[60px] w-screen fixed top-0 z-10 ">
      <div className="max-w-[1248px] mx-auto h-full flex items-center ">
        <Link href="/" passHref>
          <a className="font-medium text-[24px] flex-1">
            The
            <span className="text-green-700 font-medium text-[24px] ">Un</span>
            explained.
          </a>
        </Link>
        {/* Should be List items */}
        <div className="mr-4 ">
          <ButtonText text="Log in" />
        </div>
        <div>
          <ButtonOutlined text="Create account" />
        </div>
      </div>
    </div>
  );
};

export default Header;
