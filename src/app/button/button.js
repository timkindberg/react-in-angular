import React from "react";
import ReactDOM from "react-dom";
// import { Parser } from 'html-to-react';

// const parser = new Parser();

import "./button.css";

export class Button extends React.Component {
  render() {
    // const ngProps = this.props.ngContent ? { dangerouslySetInnerHTML: { __html: this.props.ngContent }} : {};
    // const ngContentAsReact = parser.parse(this.props.ngContent);

    return (
      <div>
        <button class="Button">{ this.props.children }</button>
        { /* <button class="Button" {...ngProps}>{ this.props.children }</button> */ }
        { /* <button class="Button" >{ngContentAsReact }</button> */ }
      </div>
    );
  }
}