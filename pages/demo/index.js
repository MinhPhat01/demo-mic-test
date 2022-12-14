import React from "react";
import { useNotify } from "../../hooks/useNotify";

export default function Test() {
  const { snackbarSuccess } = useNotify();

  return (
    <div>
      <button onClick={() => snackbarSuccess("success")}>Click</button>
    </div>
  );
}
