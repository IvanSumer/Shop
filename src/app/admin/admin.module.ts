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
import { AuthGuard } from '../shared/auth.guard';
import { QuillModule } from 'ngx-quill';
import { SearchPipe } from '../shared/search.pipe';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        QuillModule.forRoot(),
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: '/admin/login', pathMatch:'full'},
                    { path: 'login', component: LoginComponent},
                    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
                    { path: 'add', component: AddComponent, canActivate: [AuthGuard]},
                    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
                    {path: 'product/:id/edit', component: EditComponent, canActivate:[AuthGuard]} 
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
      OrdersComponent,
      SearchPipe
    ]
})

export class AdminModule {}

