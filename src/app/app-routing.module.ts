import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "mofa", pathMatch: "full"
  },
  {
    path: "mofa", loadChildren: () => import('./mofa/mofa.module').then(m => m.MofaModule)
  },
  {
    path: 'mofa-admin', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(d => d.AdminDashboardModule)
  },
  {
    path: "**", redirectTo: "mofa", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
