import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[amBorderDate]'
})


export class BorderDateDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.switchBorderColorDate();
  }

  private switchBorderColorDate() {
    const createDate = parseInt(this.el.nativeElement.textContent);
    const date = new Date();
    const currentDate = date.getDate();

    if (createDate < currentDate && createDate >= currentDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
    } else if (createDate > currentDate) {
      this.el.nativeElement.style.border = '1px solid blue';
    }
  }

}
