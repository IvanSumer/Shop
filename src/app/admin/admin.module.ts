import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: '/admin/login', pathMatch:'full'},
                    { path: 'login', component: LoginComponent},
                    { path: 'dashboard', component: DashboardComponent},
                    { path: 'add', component: AddComponent},
                    { path: 'orders', component: OrdersComponent},
                    {path: 'product/:id/edit', component: EditComponent} 
                ]
            }
        ])
    ],
    exports: [],
    declarations: [
      AdminLayoutComponent,
      LoginComponent,
      AddComponent,
      EditComponent,
      DashboardComponent,
      OrdersComponent
    ]
})

export class AdminModule {}

