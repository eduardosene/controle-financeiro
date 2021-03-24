import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsUpdateComponent } from './spends-update.component';

describe('SpendsUpdateComponent', () => {
  let component: SpendsUpdateComponent;
  let fixture: ComponentFixture<SpendsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
