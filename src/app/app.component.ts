import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <button-wrapper color="red"><b>Hello</b></button-wrapper>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
}
