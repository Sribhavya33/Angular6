import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent},
  { path: 'create', component: CreateEmployeeComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MainNavComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
