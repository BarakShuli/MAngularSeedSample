import { NgModule } from '@angular/core';
import { CesiumSample } from './cesiumSample.component';
import { CesiumSampleRoutingModule } from './CesiumSample-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { AngularCesiumModule } from 'angular-cesium';

@NgModule({
  imports: [CesiumSampleRoutingModule, SharedModule, AngularCesiumModule],
  declarations: [CesiumSample],
  exports: [CesiumSample],
  providers: [NameListService]
})
export class CesiumSampleModule { }
