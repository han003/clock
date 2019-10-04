import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneSelectorDialogComponent } from './timezone-selector-dialog.component';

describe('TimezoneSelectorDialogComponent', () => {
  let component: TimezoneSelectorDialogComponent;
  let fixture: ComponentFixture<TimezoneSelectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneSelectorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
