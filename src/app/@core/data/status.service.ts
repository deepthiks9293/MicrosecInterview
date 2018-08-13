import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {

  data = [{
    jobName: 'USA',
    status: 'Applying...',
    firmware: '',
    noDevices: '',
    success: '',
    fail: '',
    startTime: '',
    endTime: '',   
  },{
    jobName: 'Sweden',
    status: 'IKEA Furnitures',
    firmware: '',
    noDevices: '',
    success: '',
    fail: '',
    startTime: '',
    endTime: '',
    
  },{
    jobName: 'Finland',
    status: 'Nokia Communications',
    firmware: '',
    noDevices: '',
    success: '',
    fail: '',
    startTime: '',
    endTime: '',
    
  },];

  getData() {
    return this.data;
  }
}
