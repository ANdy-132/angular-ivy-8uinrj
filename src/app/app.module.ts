import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryList } from './about.component';
import { MainComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: CategoryList },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, MainComponent, CategoryList, NotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

