import { SpendsUpdateComponent } from './components/spends/spends-update/spends-update.component';
import { SpendsCreateComponent } from './components/spends/spends-create/spends-create.component';
import { HomeComponent } from './views/home/home.component';
import { SpendsViewComponent } from './views/spends-view/spends-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'spends',
    component: SpendsViewComponent,
  },
  {
    path: 'spends/create',
    component: SpendsCreateComponent,
  },
  {
    path: 'spends/update/:id',
    component: SpendsUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
