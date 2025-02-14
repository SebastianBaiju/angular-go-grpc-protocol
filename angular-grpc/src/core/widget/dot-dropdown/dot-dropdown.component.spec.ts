import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotDropdownComponent } from './dot-dropdown.component';

describe('DotDropdownComponent', () => {
  let component: DotDropdownComponent;
  let fixture: ComponentFixture<DotDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
