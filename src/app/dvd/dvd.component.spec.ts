/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DvdComponent } from './dvd.component';

describe('DvdComponent', () => {
  let component: DvdComponent;
  let fixture: ComponentFixture<DvdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
