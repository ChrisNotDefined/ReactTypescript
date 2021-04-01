import React from "react";
import "./App.css";
import { Input } from "./components/input";
import SuperComponent from "./components/SuperComponent";

class App extends React.Component {
  // Callback Refs
  // inputRef: HTMLInputElement | null;
  // React refs
  inputRef: React.RefObject<HTMLInputElement>;
  compRef: React.RefObject<SuperComponent>;
  childRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);

    // Callback refs intitialize in null
    // this.inputRef = null;
    this.inputRef = React.createRef();
    this.compRef = React.createRef();
    this.childRef = React.createRef();
  }

  // Only callable in componentDidMount and componentDidUpdate
  componentDidMount() {
    // Callback refs
    // console.log(this.inputRef);
    // React refs need to call current property
    console.log(this);
    console.log(this.inputRef.current);
    console.log(this.compRef.current);
    // this.inputRef?.focus();
    this.inputRef.current?.focus();
    this.compRef.current?.printSuperComponent();
    this.childRef.current && (this.childRef.current.value = 'child');
  }

  // For callback refs
  // getInputRef = (element: HTMLInputElement) => {
  //   this.inputRef = element;
  // }
 
  render() {
    return (
      <>
        <h1>My App</h1>
        <SuperComponent ref={this.compRef} />
        {/* Callback refs */}
        {/* <input ref={this.getInputRef}/> */}
        {/* React refs */}
        <input ref={this.inputRef} />
        {/* Passing ref as a prop to reference the child */}
        {/* <Input inputRef={this.childRef} />  */}
        {/* Passing ref with forwardRef<type> */}
        <Input ref={this.childRef} /> 
      </>
    );
  }
}

export default App;
