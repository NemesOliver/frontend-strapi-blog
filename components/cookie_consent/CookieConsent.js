import { ButtonOutlined } from "..";

const CookieConsent = ({ accept, decline }) => {
  return (
    <div className="fixed bottom-0 left-0 bg-green-100 border-t-2 w-full py-2 px-4 z-40  ">
      <div>
        <p className="font-bold">We use cookies</p>
        <p className="text-[14px] pb-2">
          We use cookies and other tracking technologies to improve your
          browsing experience on our website, to analyze our website traffic,
          and to understand where our visitors are coming from.
        </p>
      </div>
      <div>
        <ButtonOutlined text="Agree" onClick={accept} />
        <button onClick={decline} className="absolute right-5 top-2 ">
          x
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
