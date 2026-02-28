import { Component, signal } from '@angular/core';
import { ICharacter } from '../../models/character.models';

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  name = signal('');
  power = signal(0);

  characters = signal<ICharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6500 },
    { id: 5, name: 'Yancha', power: 500 },
  ]);

  addCharacter() {
    if (this.name() === '' || this.power() <= 0) return;

    const newCharacter: ICharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    console.log(newCharacter);
    this.characters.update((c) => [...c, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
