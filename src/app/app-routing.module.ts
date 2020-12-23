import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGoogleComponent} from './components/login-google/login-google.component'

const routes: Routes = [
  {path:'login', component:LoginGoogleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
