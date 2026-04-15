import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, Character } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  private _search = '';

  constructor(private api: ApiService) {}

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.applyFilter();
  }

  ngOnInit() {
    this.api.getCharacters().subscribe((data) => {
      this.characters = data.results;
      this.applyFilter();
    });
  }

  private applyFilter(): void {
    const term = this._search.trim().toLowerCase();

    this.filteredCharacters = !term
      ? this.characters
      : this.characters.filter((character) =>
          character.name.toLowerCase().includes(term)
        );
  }
}
