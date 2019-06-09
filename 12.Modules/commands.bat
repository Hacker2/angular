ng generate module CustomerDashboard
ng generate component customer-dashboard/CustomerDashboard

app.module.ts -> import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
imports: [CustomerDashboardModule // add the feature module here],

customer-dashboard.module.ts -> exports: [CustomerDashboardComponent]

app.component.html -> <app-customer-dashboard></app-customer-dashboard>