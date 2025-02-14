import { Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@Component({
  selector: 'app-search',
  imports: [ ReactiveFormsModule,    MatAutocompleteModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public search = output<string>();
  public searchFinished = output<string>();
  public searchField =  new FormControl('');
  public suggestedList = input<SuggestedList[]>([]);


  searchItem( event: EventTarget | null) {
    this.search.emit((event as HTMLInputElement).value);
  }
  clickSuggestion (item: SuggestedList) {
    this.searchField.setValue(item.name)
    this.search.emit(item.name);
    this.searchFinished.emit(item.name);
  }

  pressEnter(event:KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchFinished.emit(this.searchField.value ??'');
    }
  }

}

export interface SuggestedList {id: string; name: string}
