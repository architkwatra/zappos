import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { AboutLLamaComponent } from './about-llama/about-llama.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'aboutLlama', component: AboutLLamaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }