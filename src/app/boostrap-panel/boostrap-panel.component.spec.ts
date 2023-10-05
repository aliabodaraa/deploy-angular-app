import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapPanelComponent } from './boostrap-panel.component';

describe('BoostrapPanelComponent', () => {
  let component: BoostrapPanelComponent;
  let fixture: ComponentFixture<BoostrapPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoostrapPanelComponent]
    });
    fixture = TestBed.createComponent(BoostrapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
