import { NgModule } from '@angular/core';
import { RestApiSample } from './restApiSample.component';
import { RestApiSampleRoutingModule } from './restApiSample-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [RestApiSampleRoutingModule, SharedModule],
  declarations: [RestApiSample],
  exports: [RestApiSample],
  providers: [NameListService]
})
export class RestApiSampleModule { }
