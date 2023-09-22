import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetaskComponent } from './managetask.component';

describe('ManagetaskComponent', () => {
  let component: ManagetaskComponent;
  let fixture: ComponentFixture<ManagetaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagetaskComponent]
    });
    fixture = TestBed.createComponent(ManagetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
