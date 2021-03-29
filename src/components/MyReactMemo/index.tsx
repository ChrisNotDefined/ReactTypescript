import React from "react";
import { MyReactMemoProps } from "./interfaces";

const MyReactMemo: React.FC<MyReactMemoProps> = ({ name, address }) => {
  console.log("Memo render");
  return (
    <>
      <h1>My React memo</h1>
      <h2>Name: {name}</h2>
      <h3>City: {address.city}</h3>
      <h3>State: {address.state}</h3>
    </>
  );
};

export default React.memo(MyReactMemo, (prevProps, nextProps) => {
  return (
    prevProps.name === nextProps.name &&
    nextProps.address.city === prevProps.address.city &&
    nextProps.address.state === prevProps.address.state
  );
});
