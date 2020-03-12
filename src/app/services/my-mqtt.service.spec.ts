import { TestBed } from '@angular/core/testing';

import { MyMqttService } from './my-mqtt.service';

describe('MyMqttService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMqttService = TestBed.get(MyMqttService);
    expect(service).toBeTruthy();
  });
});
