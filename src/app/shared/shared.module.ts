import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
