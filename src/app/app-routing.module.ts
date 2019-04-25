import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentsComponent } from './component/contents/contents.component';
import { ContactComponent } from './component/contact/contact.component';
import { RegistryComponent } from './component/registry/registry.component';

const routes: Routes = [
  {path: 'contents', component: ContentsComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'registry', component: RegistryComponent},
  {path: '**', component: ContentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
