 
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FirstComponent } from './first/first.component';
import { WomanComponent } from './woman/woman.component';
import { ManComponent } from './man/man.component';
import { SecondComponent } from './second/second.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CancerComponent } from './cancer/cancer.component';
import { HospitalComponent } from './hospital/hospital.component';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'woman', component: WomanComponent},
  {path: 'man', component: ManComponent},
  {path: 'second', component: SecondComponent},
  {path: '', component: HomepageComponent},
  {path: 'cancer', component: CancerComponent},
  {path: 'hospital', component: HospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
