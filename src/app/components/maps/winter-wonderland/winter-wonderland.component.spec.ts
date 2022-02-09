import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterWonderlandComponent } from './winter-wonderland.component';

describe('WinterWonderlandComponent', () => {
  let component: WinterWonderlandComponent;
  let fixture: ComponentFixture<WinterWonderlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterWonderlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterWonderlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
