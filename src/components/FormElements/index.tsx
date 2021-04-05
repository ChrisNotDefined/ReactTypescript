import React, { Component } from "react";
import { FormElementsProps, FormElementsState } from "./interfaces";

export default class FormElements extends Component<
  FormElementsProps,
  FormElementsState
> {
  constructor(props: FormElementsProps) {
    super(props);

    this.state = {
      inputValue: "test",
      textareaValue: "test of text area",
      selectedValue: "Banana",
    };
  }

  handleChangeEvent = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { value, name } = event.currentTarget;
    this.setState(({
      [name]: value,
    } as unknown) as FormElementsState);
  };

  render() {
    const { inputValue, textareaValue, selectedValue } = this.state;

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        Input: <input defaultValue={inputValue} name="inputValue" />
        <br />
        Textarea: <textarea defaultValue={textareaValue} name="textareaValue" />
        <br />
        Select:{" "}
        <select defaultValue={selectedValue} name="selectedValue">
          <option value="mango">Mango</option>
          <option value="apple">Apple</option>
          <option value="Banana">Banana</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
