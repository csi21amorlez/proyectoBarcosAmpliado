import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescBarcosComponent } from './desc-barcos.component';

describe('DescBarcosComponent', () => {
  let component: DescBarcosComponent;
  let fixture: ComponentFixture<DescBarcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescBarcosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescBarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
