import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FirstComponent } from './first/first.component';
import { HttpModule } from '@angular/http';
import { WomanComponent } from './woman/woman.component';
import { ManComponent } from './man/man.component';
import { SecondComponent } from './second/second.component';
import { CustomerService } from './customer.service';
import { HomepageComponent } from './homepage/homepage.component';
import { CancerComponent } from './cancer/cancer.component';
import { HospitalComponent } from './hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    WomanComponent,
    ManComponent,
    SecondComponent,
    HomepageComponent,
    CancerComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    DataService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
