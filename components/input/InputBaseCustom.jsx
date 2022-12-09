import React from "react";
import Input from "react-phone-number-input/input";

export default function InputBaseCustom() {
  return (
    <Input
      defaultCountry="VN"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
}
