import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-dot-dropdown',
  imports: [NgClass],
  templateUrl: './dot-dropdown.component.html',
  styleUrl: './dot-dropdown.component.scss'
})
export class DotDropdownComponent {
  public items = input<DotDownItems[]>([]);
  public event= output<DotDownItems>({});
  public dropDownOpen= signal(false);

  itemClick(item:DotDownItems) {
    this.dropDownOpen.set(false);
    this.event.emit(item);
  }

}

export interface DotDownItems {event: string , name: string , icon: string, enable: true, class: string}
