import { useEffect } from "react";
import { Close } from "./icons/Close";

export function Popup({
  title,
  link,
  description,
  closePopup,
}: {
  title: string;
  link: string;
  description: string;
  closePopup: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={closePopup}
      ></div>
      <div className="relative z-50 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] bg-black lg:h-88 h-80 shadow-sm shadow-yellow-500 rounded-xl p-4 text-white">
        <div className="flex max-h-full">
          <div className="flex items-center w-[400%] md:w-[200%] max-h-full">
            <img
              src={link}
              className="md:mt-8 md:mb-8 max-h-full overflow-y-clip"
            ></img>
          </div>
          <div className="ml-12">
            <div
              onClick={closePopup}
              className="justify-self-end cursor-pointer"
            >
              <Close />
            </div>
            <div className="md:mt-8">
              <h2 className="text-yellow-500 text-xl font-bold">{title}</h2>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
