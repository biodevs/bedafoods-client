import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateNewComponent } from './plate-new.component';

describe('PlateNewComponent', () => {
  let component: PlateNewComponent;
  let fixture: ComponentFixture<PlateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
