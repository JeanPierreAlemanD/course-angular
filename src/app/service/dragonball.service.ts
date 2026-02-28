import { ICharacter } from './../models/character.models';
import { effect, Injectable, signal } from '@angular/core';

const loadFromLocalStorage = (): ICharacter[] => {
  const character = localStorage.getItem('characters');
  return character ? JSON.parse(character) : [];
};

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters = signal<ICharacter[]>(loadFromLocalStorage());

  saveToLocalStorege = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(event: any) {
    console.log(event);
    this.characters.update((c) => [...c, event]);
  }
}
