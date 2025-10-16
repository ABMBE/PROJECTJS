import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducDetall } from './produc-detall';

describe('ProducDetall', () => {
  let component: ProducDetall;
  let fixture: ComponentFixture<ProducDetall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducDetall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducDetall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
