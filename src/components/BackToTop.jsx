import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
          fixed
          bottom-8
          right-8
          z-50
          bg-emerald-500
          hover:bg-emerald-600
          text-white
          p-4
          rounded-full
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          animate-bounce
          "
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default BackToTop;