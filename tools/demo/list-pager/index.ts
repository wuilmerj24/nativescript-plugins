import { ObservableArray } from '@nativescript/core';
import { DemoSharedBase } from '../utils';
import {  } from '@wuilmerj24/list-pager';

export class DemoSharedListPager extends DemoSharedBase {
  items = new ObservableArray([
    { title: "Uno" },
    { title: "Dos" },
    { title: "Tres" },
    { title: "Cuatro" }
  ]);
  testIt() {
    console.log('test list-pager!');
  }
}