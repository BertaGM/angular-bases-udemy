import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  //CommonModule es necesario para que todos los ngIf, ngFor, ngSwitch, etc sean funcionales
  //fuera del módulo de heroes
  imports: [CommonModule],
})
export class HeroesModule {}
