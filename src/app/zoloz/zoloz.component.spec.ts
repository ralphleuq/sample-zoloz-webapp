import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZolozComponent } from './zoloz.component';

describe('ZolozComponent', () => {
  let component: ZolozComponent;
  let fixture: ComponentFixture<ZolozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZolozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZolozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
