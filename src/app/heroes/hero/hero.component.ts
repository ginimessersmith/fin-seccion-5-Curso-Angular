import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'IronMam';
  public fullName: string = 'Tony Stark';
  public edad: number = 45;

  setName(nameIntro: string): void {
    this.name = nameIntro
  }
  setFullName(fullNameIntro: string): void {
    this.fullName = fullNameIntro
  }
  setEdad(edadIntro: number): void {
    this.edad = edadIntro
  }

  getName(): string {
    return this.name
  }
  getFullname(): string {
    return this.fullName
  }
  getEdad(): number {
    return this.edad
  }

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }
  get capitalizedFullname(): string {
    return this.fullName.toUpperCase()
  }

  getHeroDescripcion(): string {
    return `${this.name} - ${this.fullName} - ${this.edad}`
  }

  changeNameHero(): void {
    this.name = 'Spider-Man'
  }
  changeEdadHero(newEdad: number): void {
    this.edad = newEdad
  }

  changeFullNameHero() {
    this.fullName = 'Peter Parker'
  }

  resetDatos():void{
    this.name='IronMan'
    this.fullName='Tony Stark'
    this.edad=45
  }
}
