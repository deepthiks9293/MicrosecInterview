import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { GridService } from '../../../@core/data/grid.service';
import { StatusService } from '../../../@core/data/status.service';

@Component({
  selector: 'ngx-smart-table1',
  template: 
         `
    <div class="dropdown ghost-dropdown" ngbDropdown>
      <button type="button" class="btn btn-sm" ngbDropdownToggle 
              [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}" style="width: 200px;">
        {{ type }}
      </button>
      <ul ngbDropdownMenu class="dropdown-menu">
        <li class="dropdown-item" *ngFor="let t of types" (click)="type = t">{{ t }}</li>
      </ul>
    </div>
    <ng2-smart-table [settings]="settings" [source]="source">
        </ng2-smart-table>
  `,
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTable1Component {

  settings = {    
    actions: false,
    selectMode: 'multi',

    columns: {
      
      deviceName: {
        title: 'Device Name',
        type: 'string',
        filter: false,
        
      },
      communicationType: {
        title: 'Communication Type',
        type: 'string',
        filter: false,
      },
      location: {
        title: 'Location',
        type: 'string',
        filter: false,
      },
      firmware: {
        title: 'Firmware',
        type: 'string',
        filter: false,
      },
      telemetry: {
        title: 'Telemetry',
        type: 'string',
        filter: false,
      },
      status: {
        title: 'Status',
        type: 'string',
        filter: false,
      },
      connection: {
        title: 'Last Connection',
        type: 'string',
        filter: false,
      },
      authStatus: {
        title: 'Authentication Status',
        type: 'string',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  type = 'All Devices';
  types: string[] = ['All Devices', 'Blocked Devices'];
  constructor(private service: GridService) {
    const data = this.service.getData();
    this.source.load(data);
  }
}


@Component({
  selector: 'ngx-smart-table2',
  template: `
    <div>
    <nb-card>
      <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle 
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}" style="width: 200px;">
            {{ type }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item" *ngFor="let t of types" (click)="type = t">{{ t }}</li>
          </ul>
      </div>
      <h3>Certificate Management</h3>
      <p><strong>0</strong>open</p>
      <nb-tabset>       
        <nb-tab tabTitle="Alarms">
          <span>Content #2</span>
        </nb-tab>
        <nb-tab tabTitle="Job Status">
          <ng2-smart-table [settings]="settings" [source]="source">
          </ng2-smart-table>
        </nb-tab>
      </nb-tabset>
    </nb-card>
    </div>
  `,
})
export class SmartTable2Component { 
   settings = {    
    actions: false,
     selectMode: 'multi',
    columns: {
      
      jobName: {
        title: 'Job Name',
        type: 'string',
        filter: false,
        
      },
      status: {
        title: 'Status',
        type: 'string',
        filter: false,
      },
      firmware: {
        title: 'Firmware',
        type: 'string',
        filter: false,
      },
      noDevices: {
        title: 'No Devices',
        type: 'boolean',
        filter: false,
      },
      success: {
        title: 'Succeeded',
        type: 'boolean',
        filter: false,
      },
      fail: {
        title: 'Failed',
        type: 'boolean',
        filter: false,
      },
      startTime: {
        title: 'START TIME',
        type: 'string',
        filter: false,
      },
      endTime: {
        title: 'END TIME',
        type: 'string',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  type = 'All Devices';
  types: string[] = ['All Devices', 'Blocked Devices'];
  constructor(private service: StatusService) {
    const data = this.service.getData();
    this.source.load(data);
  }

   
}



@Component({
  selector: 'ngx-smart-table',
  templateUrl: './grid.component.html',
})

export class SmartTableComponent {
  tabs: any[] = [
    {
      title: 'Devices',
      route: '/pages/new-tab/grid/smart-table1',
    },
    {
      title: 'ManageCertificates',
      route: '/pages/new-tab/grid/smart-table2',
    },
    {
      title: 'Blocked Devices',
    },
    {
      title: 'Settings',
    },
  ];

}
