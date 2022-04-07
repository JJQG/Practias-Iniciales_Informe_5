import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { RecuperarconComponent } from './recuperarcon/recuperarcon.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
  path:"registro",
  component: RegistroComponent
},
{
  path:"recuperar_contraseña",
  component: RecuperarconComponent
},
{
  path:"begin",
  component: InicioComponent
},
{
  path:"publicaciones",
  component: PublicacionesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
