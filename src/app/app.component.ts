import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(name: string) {
    if (this.favorites?.includes(name)){
      this.favorites = this.favorites.filter(favorite => favorite != name)
      console.log(name + " removed from favorites")
    }
    else {
      this.favorites?.push(name);
      console.log(name + " added to favorites")
    }

    console.log(this.favorites)
  }
}
