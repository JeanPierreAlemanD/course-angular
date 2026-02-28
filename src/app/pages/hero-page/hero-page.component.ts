import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.age()} años`;
  }

  changeHero() {
    this.name.update((current) => 'Spiderman');
    this.age.update((current) => 22);
  }
  
  chageAge(){
    this.age.update((current) => 60);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
}
