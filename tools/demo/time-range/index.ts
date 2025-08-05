import { EventData } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import {  } from '@wuilmerj24/time-range';

export class DemoSharedTimeRange extends DemoSharedBase {

  testIt() {
    console.log('test time-range!');
  }

  onDrag(args){
    console.log('onDrag from ns', args.data);
  }
}