import { Component, input } from '@angular/core';
import { ICharacter } from '../../../models/character.models';

@Component({
  selector: 'db-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters = input.required<ICharacter[]>();
  listTitle = input.required<string>();
}
