import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { RegistryComponent } from './component/registry/registry.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
