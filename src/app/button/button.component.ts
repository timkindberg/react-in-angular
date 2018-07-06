import { Directive, ViewChild, ElementRef, Attribute, ContentChildren, QueryList } from "@angular/core";
import { Button } from "./button";

const React = require("react");
const ReactDOM = require("react-dom");
import { Parser } from 'html-to-react';

const parser = new Parser();

@Directive({
  selector: "button-wrapper"
})
export class ButtonWrapper {
  constructor(private el: ElementRef, @Attribute('color') attr) {
    console.log("constructor", this.el.nativeElement, this.attr);
  }

  ngOnInit() {
    console.log("ngOnInit", this.el.nativeElement.innerHTML);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.el.nativeElement.innerHTML);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit", this.el.nativeElement.innerHTML);

    ReactDOM.render(
      React.createElement(
        Button,
        { },
        parser.parse(this.el.nativeElement.innerHTML)
      ), 
      this.el.nativeElement
    );
  }
}
