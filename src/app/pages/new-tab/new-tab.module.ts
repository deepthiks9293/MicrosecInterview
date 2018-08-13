
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { NewTabRoutingModule, routedComponents } from './new-tab-routing.module';
import { GridService } from '../../@core/data/grid.service';
import { StatusService } from '../../@core/data/status.service';
import { AppComponent } from './new-tab.component';


@NgModule({
  declarations: [
   AppComponent,
   ...routedComponents,
  ],
  imports: [
   ThemeModule,
   NewTabRoutingModule,
   Ng2SmartTableModule,
  ],
  providers: [GridService, StatusService],
  bootstrap: [AppComponent],
})
export class AppModule { }

