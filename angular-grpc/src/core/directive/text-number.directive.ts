import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appTextNumber]',
})
export class TextNumberDirective {

  public min = input<number>(0);
  public max = input<number>(100000000);
  public decimal = input<boolean>();
  public shiftFocusOnTabKey = input<boolean>(true);

  private regex: RegExp = new RegExp('^[0-9]*$');
  private specialKeys: string[] = ['Backspace', 'ArrowLeft', 'ArrowRight'];
  private elementRef =inject(ElementRef);

  /**
   * Key board action
   */
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // shift focus to next field if user presses tab key (for accessibility)
    if (event?.key === 'Tab') {
      return this.shiftFocusOnTabKey();
    }
    if (this.specialKeys.includes(event.key)) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
    if (inputValue && !String(inputValue).match(this.regex) && !event.ctrlKey) {
      event.preventDefault();
    }
    if (this.min && inputValue) {
      if (+inputValue < this.min()) {
        event.preventDefault();
      }
    }
    if (this.max && inputValue) {
      if (+inputValue > this.max()) {
        event.preventDefault();
      }
    }
    return;
  }

  /**
   * Copy Paste action
   */
  @HostListener('paste', ['$event']) onPaste(event: { originalEvent: any; preventDefault: () => void; }) {
    const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
    if (clipboardData) {
      const regEx = this.regex;
      if (!regEx.test(clipboardData)) {
        event.preventDefault();
      }
    }
    return;
  }

  ngOnChanges(): void {
    if (this.decimal()) {
      this.regex = new RegExp('^[0-9]*\\.?[0-9]*$');
    }
  }
}


