import { NgModule } from '@angular/core';
import { BootstrapSample } from './bootstrapSample.component';
import { BootstrapSampleRoutingModule } from './bootstrapSample-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [BootstrapSampleRoutingModule, SharedModule],
  declarations: [BootstrapSample],
  exports: [BootstrapSample],
  providers: [NameListService]
})
export class BootstrapSampleModule { }
