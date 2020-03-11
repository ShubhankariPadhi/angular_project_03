import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  constructor(private e1:ElementRef,private renderer:Renderer2) {
    e1.nativeElement.style.backgroundColor="yellow"; // using ElementRef 
 
    }
   
   
   
    @HostListener('mouseenter') onMouseEnter() {
     this.highlight('yellow');
   }
   
   @HostListener('mouseleave') onMouseLeave() {
     this.highlight('blue');
   }
   
   private highlight(color: string) {
     this.e1.nativeElement.style.backgroundColor = color;
   } 
 
 /* 
 @HostBinding('style.backgroundColor') bgColor="green";
 @HostListener('click')myClick(){
   this.bgColor="blue";
 }  */
 
 ngAfterViewInit(){
   console.log(this.e1);
   this.renderer.setStyle(this.e1.nativeElement,'backgroundColor','grey');
 }
}
