"use client";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

interface PopupNavigatorContextType {
  showPopupNavigator: () => void;
  hidePopupNavigator: () => void;
}

const PopupNavigatorContext = createContext<PopupNavigatorContextType>({
  showPopupNavigator: () => {},
  hidePopupNavigator: () => {},
});

interface ListProps {
  title: string;
  href: string;
}

export const PopupNavigatorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [popup, setPopup] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const duration = 300;
  const router = useRouter();

  const ListNavigation: ListProps[] = [
    {
      title: "Characters",
      href: "/characters",
    },
    {
      title: "Weapons",
      href: "/weapons",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const hidePopupNavigator = () => {
    if (popupRef.current) {
      popupRef.current.classList.add("animate-slide-to-right");
      setTimeout(() => {
        setPopup(false);
      }, duration);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hidePopupNavigator();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const showPopupNavigator = () => {
    setPopup(true);
  };

  return (
    <PopupNavigatorContext.Provider
      value={{ showPopupNavigator, hidePopupNavigator }}
    >
      {popup && (
        <>
          <div
            onClick={hidePopupNavigator}
            className="bg-black/20 w-screen h-screen fixed transition-all top-0 left-0 duration-500"
          ></div>
          <div
            ref={popupRef}
            className="p-4 h-full fixed top-0 right-0 transition-all"
            style={{ position: "fixed", top: 0, right: 0, zIndex: 100 }}
          >
            <div className="backdrop-blur-lg backdrop-brightness-50 flex flex-col animate-slide-to-left w-[300px] h-full p-8 bg-root border border-primary rounded-xl shadow-primary50">
              <IoCloseSharp
                onClick={hidePopupNavigator}
                className="text-2xl absolute top-9 right-8 cursor-pointer text-placeholder hover:text-white"
              />
              <p className="font-font_warface text-2xl">Genesiz</p>
              <div className="flex-1 flex flex-col justify-between">
                <div className="mt-10 flex flex-col gap-2">
                  {ListNavigation.map((item, index) => (
                    <p
                      key={index}
                      onClick={() => router.push(item.href)}
                      className="text-lg text-white hover:text-primary"
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {children}
    </PopupNavigatorContext.Provider>
  );
};

export const usePopupNavigator = (): PopupNavigatorContextType => {
  const context = useContext(PopupNavigatorContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
