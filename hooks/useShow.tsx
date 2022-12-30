import { useState } from "react";

export function useShow() {
  const [show, setShow] = useState<boolean>(true);

  const handleShow = () => {
    setShow(!show);
  };

  return {
    show,
    setShow,
    handleShow,
  };
}
