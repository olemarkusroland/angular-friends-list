import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Input() favorites: string[] | null = null;
  @Output() setFavorite: EventEmitter<string> = new EventEmitter<string>();

  doSetFavorite(name: string) {
    this.setFavorite.emit(name);
  }
}
