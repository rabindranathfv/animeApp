import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimetopComponent } from './animetop.component';

describe('AnimetopComponent', () => {
  let component: AnimetopComponent;
  let fixture: ComponentFixture<AnimetopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimetopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
