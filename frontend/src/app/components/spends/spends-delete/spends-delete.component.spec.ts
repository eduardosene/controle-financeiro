import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsDeleteComponent } from './spends-delete.component';

describe('SpendsDeleteComponent', () => {
  let component: SpendsDeleteComponent;
  let fixture: ComponentFixture<SpendsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
