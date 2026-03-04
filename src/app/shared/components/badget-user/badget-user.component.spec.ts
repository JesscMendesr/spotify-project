import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgetUserComponent } from './badget-user.component';

describe('BadgetUserComponent', () => {
  let component: BadgetUserComponent;
  let fixture: ComponentFixture<BadgetUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgetUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
