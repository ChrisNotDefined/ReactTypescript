import React, { Component, ErrorInfo } from 'react'
import ErrorComponent from '../ErrorComponent';
import SeccondComponent from '../SeccondComponent'
import { FirstComponentProps, FirstComponentState } from './interfaces';

export default class FirstComponent extends Component<FirstComponentProps, FirstComponentState> {

  constructor(props: FirstComponentProps) {
    super(props);

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError');

    return { 
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('componentDidCatch', error, info);
  }

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <h1>First Component</h1>
        {!this.state.hasError ? <SeccondComponent/>: <ErrorComponent/>}
      </React.Fragment>
    )
  }
}
