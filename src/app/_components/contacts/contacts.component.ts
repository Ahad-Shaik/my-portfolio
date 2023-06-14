import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import gsap from 'gsap';
import {  bounceInOnEnterAnimation,
  bounceOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  bounceOutDownOnLeaveAnimation,
  bounceInDownOnEnterAnimation,
  bounceOutUpOnLeaveAnimation,
  bounceInLeftOnEnterAnimation,
  bounceInRightOnEnterAnimation,
  bounceOutLeftOnLeaveAnimation,
  bounceOutRightOnLeaveAnimation,fadeInOnEnterAnimation,
  fadeInUpOnEnterAnimation,
  fadeInDownOnEnterAnimation,
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  fadeInUpBigOnEnterAnimation,
  fadeInDownBigOnEnterAnimation,
  fadeInLeftBigOnEnterAnimation,
  fadeInRightBigOnEnterAnimation,
  fadeOutOnLeaveAnimation, fadeOutUpOnLeaveAnimation,
  fadeOutDownOnLeaveAnimation,
  fadeOutLeftOnLeaveAnimation,
  fadeOutRightOnLeaveAnimation,
  fadeOutUpBigOnLeaveAnimation,
  fadeOutDownBigOnLeaveAnimation,
  fadeOutLeftBigOnLeaveAnimation,
  fadeOutRightBigOnLeaveAnimation,rotateInOnEnterAnimation,
  rotateInUpLeftOnEnterAnimation,
  rotateInUpRightOnEnterAnimation,
  rotateInDownLeftOnEnterAnimation,
  rotateInDownRightOnEnterAnimation,
  rotateOutOnLeaveAnimation,
  rotateOutUpLeftOnLeaveAnimation,
  rotateOutUpRightOnLeaveAnimation,
  rotateOutDownLeftOnLeaveAnimation,
  rotateOutDownRightOnLeaveAnimation,} from 'angular-animations';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [ bounceInOnEnterAnimation(),
    bounceInUpOnEnterAnimation(),
    bounceOutOnLeaveAnimation(),
    bounceOutDownOnLeaveAnimation(),
    bounceInDownOnEnterAnimation(),
    bounceOutUpOnLeaveAnimation(),
    bounceInLeftOnEnterAnimation(),
    bounceInRightOnEnterAnimation(),
    bounceOutLeftOnLeaveAnimation(),
    bounceOutRightOnLeaveAnimation(),
    fadeInOnEnterAnimation(),
    fadeInUpOnEnterAnimation(),
    fadeInDownOnEnterAnimation(),
    fadeInLeftOnEnterAnimation(),
    fadeInRightOnEnterAnimation(),
    fadeInUpBigOnEnterAnimation(),
    fadeInDownBigOnEnterAnimation(),
    fadeInLeftBigOnEnterAnimation(),
    fadeInRightBigOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeOutUpOnLeaveAnimation(),
    fadeOutDownOnLeaveAnimation(),
    fadeOutLeftOnLeaveAnimation(),
    fadeOutRightOnLeaveAnimation(),
    fadeOutUpBigOnLeaveAnimation(),
    fadeOutDownBigOnLeaveAnimation(),
    fadeOutLeftBigOnLeaveAnimation(),
    fadeOutRightBigOnLeaveAnimation(),
    rotateInOnEnterAnimation(),
    rotateInUpLeftOnEnterAnimation(),
    rotateInUpRightOnEnterAnimation(),
    rotateInDownLeftOnEnterAnimation(),
    rotateInDownRightOnEnterAnimation(),
    rotateOutOnLeaveAnimation(),
    rotateOutUpLeftOnLeaveAnimation(),
    rotateOutUpRightOnLeaveAnimation(),
    rotateOutDownLeftOnLeaveAnimation(),
    rotateOutDownRightOnLeaveAnimation(),]
})
export class ContactsComponent implements OnInit,OnDestroy {

  private intersectionObserver!: IntersectionObserver;  
  contState = true;
  constructor(private elementRef: ElementRef) {}
  ngOnInit(){

    const options = {
      rootMargin: '0px',
      threshold: 0.4 // Adjust this threshold as needed
    };

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.contState=true;
            // gsap.from('.cont-logos',{
            //   opacity:0,
            //   delay:0.5,
            //   x:50,
            //   stagger:0.2
            // })
            // gsap.from('.cont-text',{
            //   opacity:0,
            //   delay:0.5,
            //   x:-50,
            //   stagger:0.2
            // })
         }
         else{
          this.contState=false;
         } 
        });
      },
      options
    );

    this.intersectionObserver.observe(this.elementRef.nativeElement);
    }
  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
   
 

  
  
}
