import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boostrap-panel',
  templateUrl: './boostrap-panel.component.html',
  styleUrls: ['./boostrap-panel.component.css'],
})
export class BoostrapPanelComponent {
  @Input('InputHeadingProp') passedHeadingValue: any;
  @Input('InputBodyProp') passedBodyValue: any;
  @Output('outputValue') emitterOutput = new EventEmitter();
  onClick() {
    let person = { name: 'ali', age: 26 };
    this.emitterOutput.emit(person);
  }
}