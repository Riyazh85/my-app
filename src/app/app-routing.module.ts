import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';


const routes: Routes = [
  { path: '', component: EnquiryListComponent },
  { path: 'create', component: EnquiryComponent },
  { path: 'view', component: EnquiryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
