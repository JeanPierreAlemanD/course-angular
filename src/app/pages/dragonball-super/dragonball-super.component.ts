import { Component, inject } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { DragonballService } from './../../service/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  standalone: true,
  imports: [CharacterList, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css',
})
export class DragonballSuperComponent {
  
  public dbService = inject(DragonballService);
}
