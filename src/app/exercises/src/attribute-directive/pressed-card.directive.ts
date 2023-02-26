
// import { Directive, ElementRef, HostListener } from '@angular/core';


// @Directive({
//     selector: '[appTouchScaleAnimation]'
// })
// export class TouchScaleAnimationDirective {

//     private element: ElementRef;
//     private currentAnimation: any;

//     constructor(el: ElementRef) {
//         this.element = el;
//     }

//     @HostListener('touch', ['$event'])
//     onTouch(args: any): void {
//         if (args.action === 'down') {
//             this.animatePressed();
//         } else if (args.action === 'up') {
//             this.animateReleased();
//         }
//     }

//     private animatePressed(): void {
//         if (this.currentAnimation) {
//             this.currentAnimation.cancel();
//         }
//         this.currentAnimation = this.element.nativeElement.animate({
//             scale: { x: 0.98, y: 0.98 },
//             opacity: 0.8,
            
//             duration: 100, curve : 
//         }).catch(function (e : any) { });
//     }

//     private animateReleased(): void {
//         if (this.currentAnimation) {
//             this.currentAnimation.cancel();
//         }
//         this.currentAnimation = this.element.nativeElement.animate({
//             scale: { x: 1, y: 1 },
//             opacity: 1,
//             duration: 100
//         }).catch(function (e: any) { });
//     }

// }
