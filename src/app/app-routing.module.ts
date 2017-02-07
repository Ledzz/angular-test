import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutorPageComponent } from './executor-page/executor-page.component';
const routes: Routes = [
  {
    path: 'executor',
    component: ExecutorPageComponent,
    data: { title: 'Заголовок' }
  },
  {path: '', redirectTo: '/executor', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
