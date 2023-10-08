import {
  ElementRef, //This is a service defined in Angular that gives us access to the DOM object for the element "nativeElement" that has this directive.
  Directive,
  Input,
  HostListener /*added HostListener this docorator allows us to subscibe(or give us the ability make sideEffect in this directive based on the event that triggered form DOM Hosted Element(the DOM element that has this attribute "appInputFormat")) */,
} from '@angular/core';

@Directive({
  selector: '[appInputFormat]', //the selector has square brackets, which basically means any elements that has this attribute "appInputFormat". If Angular finds an element with this attribute, it's going to apply this directive on that element.
})
export class InputFormatDirective {
  constructor(private hostedElement: ElementRef) {}
  @Input('appInputFormat') format: string = '';
  @HostListener('focus')
  onFocus() {
    //@HostListener('focus') focus is the name of the DOM Event
    console.log('on Focus');
  }
  @HostListener('blur') onBlur() {
    console.log('on Blur');
    let value: string = this.hostedElement.nativeElement.value;
    if (this.format === 'lowercase')
      this.hostedElement.nativeElement.value = value.toLowerCase();
    else this.hostedElement.nativeElement.value = value.toUpperCase();
  }
}
