import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    HomeComponent,
    CustomersComponent,
    ContractorsComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzListModule,
  ]
})
export class HomeModule { }
