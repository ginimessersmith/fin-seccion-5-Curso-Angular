import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from '../dbz/components/list/list.component';
import { MainPageComponent } from './pages/main-pages.components';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent],
  exports: [
    MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
