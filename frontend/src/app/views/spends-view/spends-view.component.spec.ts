import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsViewComponent } from './spends-view.component';

describe('SpendsViewComponent', () => {
  let component: SpendsViewComponent;
  let fixture: ComponentFixture<SpendsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
