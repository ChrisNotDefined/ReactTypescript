import React, { ReactElement } from "react";
import { InputProps } from "./interface";

// passing ref within the props
// export const Input: React.FC<InputProps> = ({inputRef}) => {
//   return (
//     <div>
//       <span>Input Component: </span>
//       <input ref={inputRef}/>
//     </div>
//   )
// }

// Using forwrding ref
export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref}/>;
});
