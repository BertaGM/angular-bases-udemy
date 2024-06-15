import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    //método getter, se usa como una propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    //si ponemos el método private no se podrá usar fuera del scoup de esta clase, no podremos acceder a este método desde el html, aunque sea del mismo módulo
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 32;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
