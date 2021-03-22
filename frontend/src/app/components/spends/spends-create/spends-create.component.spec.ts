import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsCreateComponent } from './spends-create.component';

describe('SpendsCreateComponent', () => {
  let component: SpendsCreateComponent;
  let fixture: ComponentFixture<SpendsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
