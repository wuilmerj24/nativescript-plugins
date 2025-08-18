import { DemoSharedBase } from '../utils';
import {  } from '@wuilmerj24/carousel';

export class DemoSharedCarousel extends DemoSharedBase {
  public myItems: Array<any> = Array.from({ length: 100 }).map((_, i) => ({
    title: `Item ${i}`,
  }))
  constructor(
    
  ){
    super();
    
  }
  testIt() {
    console.log('test carousel!');
  }
}