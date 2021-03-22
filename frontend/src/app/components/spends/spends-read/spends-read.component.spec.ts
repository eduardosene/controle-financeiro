import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsReadComponent } from './spends-read.component';

describe('SpendsReadComponent', () => {
  let component: SpendsReadComponent;
  let fixture: ComponentFixture<SpendsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
