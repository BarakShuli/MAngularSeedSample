import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestApiSample } from './restApiSample.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'restApiSample', component: RestApiSample }
    ])
  ],
  exports: [RouterModule]
})
export class RestApiSampleRoutingModule { }
