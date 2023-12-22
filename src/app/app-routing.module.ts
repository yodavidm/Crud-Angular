import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './componentes/crear/crear.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path:"index",component:IndexComponent
  },
  {
    path:"lista",component:ListarComponent
  },
  {
    path:"crear",component:CrearComponent,canActivate:[AuthGuard]
  },
  {
    path:"editar/:id",component:EditarComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"**",component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
