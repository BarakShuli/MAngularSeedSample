import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapSample } from './bootstrapSample.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bootstrap', component: BootstrapSample }
    ])
  ],
  exports: [RouterModule]
})
export class BootstrapSampleRoutingModule { }
