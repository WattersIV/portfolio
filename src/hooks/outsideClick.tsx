import { useEffect, useState } from "react";

//@ts-ignore
export default function OutsideClick(ref) {
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    //@ts-ignore
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //@ts-ignore
        setIsClicked(true);
      } else {
        //@ts-ignore
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}
