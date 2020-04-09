import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appMouseEnterSetble]",
})
export class MouseEnterSetbleDirective {
  private els: ElementRef; //[1]
  //TBS:此处赋初始值无效?
  @Input("appMouseEnterSetble") backgroundColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.els.nativeElement.style.backgroundColor =
      this.backgroundColor || "#DCDCFF";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.els.nativeElement.style.backgroundColor = null;
  }

  //TBS:此处添加private修饰后,无需再声明全局变量[1]和赋值[2],why?
  constructor(el: ElementRef) {
    this.els = el; //[2]
  }
}
