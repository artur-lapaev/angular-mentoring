import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the header logo <img> and check src path', () => {
    const imageDe: DebugElement = fixture.debugElement;
    const imageEl: HTMLElement = imageDe.nativeElement;
    const img = imageEl.querySelector('.header__logo img');
    expect(img.getAttribute("src")).toEqual("assets/logo/logo.png");
  });
});
