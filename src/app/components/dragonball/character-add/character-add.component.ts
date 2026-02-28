import { Component, input, output, signal } from '@angular/core';
import { ICharacter } from '../../../models/character.models';

@Component({
  selector: 'db-character-add',
  standalone: true,
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  character = input.required<ICharacter[]>();
  newCharacter = output<ICharacter>();

  addCharacterEmit() {
    if (this.name() === '' || this.power() <= 0) return;

    const newCharacterSet: ICharacter = {
      id: this.character().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(newCharacterSet);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
