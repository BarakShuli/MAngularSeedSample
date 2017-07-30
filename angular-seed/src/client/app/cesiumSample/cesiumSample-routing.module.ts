import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CesiumSample } from './cesiumSample.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cesiumSample', component: CesiumSample }
    ])
  ],
  exports: [RouterModule]
})
export class CesiumSampleRoutingModule { }
