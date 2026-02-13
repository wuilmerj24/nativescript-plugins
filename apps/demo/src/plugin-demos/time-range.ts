import { Observable, EventData, Page, Frame } from '@nativescript/core';
import { DemoSharedTimeRange } from '@demo/shared';
import {} from '@wuilmerj24/time-range';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  const fpsMonitor = new FpsMonitorComponent();
}

export class DemoModel extends DemoSharedTimeRange {}

export class FpsMonitorComponent {
  fpsText: string = 'FPS: 0';
  private frame: any;
  private animationId: number;
  constructor() {
    this.startFPSMonitoring();
  }
  private startFPSMonitoring() {
    let lastTime = performance.now();
    let frames = 0;

    const calculateFPS = (currentTime: number) => {
      frames++;

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
        this.fpsText = `FPS: ${fps}`;
        frames = 0;
        lastTime = currentTime;
      }

      this.animationId = requestAnimationFrame(calculateFPS);
    };

    this.animationId = requestAnimationFrame(calculateFPS);
  }

  public stopFPSMonitoring() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
