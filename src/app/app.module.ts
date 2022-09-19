import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryList } from './category.list.component';
import { MainComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'CategoryList', component: CategoryList },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, MainComponent, CategoryList, NotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
