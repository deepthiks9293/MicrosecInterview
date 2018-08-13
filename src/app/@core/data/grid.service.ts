import { Injectable } from '@angular/core';

@Injectable()
export class GridService {

  data = [{
    deviceName: 'USA',
    communicationType: 'Apple Inc',
    location: '',
    firmware: '',
    telemetry: '',
    status: '',
    connection: '',
    authStatus: '',
    
  },{
    deviceName: 'Sweden',
    communicationType: 'IKEA Furnitures',
    location: '',
    firmware: '',
    telemetry: '',
    status: '',
    connection: '',
    authStatus: '',
    
  },{
    deviceName: 'Finland',
    communicationType: 'Nokia Communications',
    location: '',
    firmware: '',
    telemetry: '',
    status: '',
    connection: '',
    authStatus: '',
    
  },];

  getData() {
    return this.data;
  }
}
