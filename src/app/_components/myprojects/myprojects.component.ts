import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { gsap } from 'gsap';
import {wobbleAnimation ,fadeInRightAnimation,heartBeatAnimation,
  bounceOnEnterAnimation,
  flashOnEnterAnimation,
  pulseOnEnterAnimation,
  rubberBandOnEnterAnimation,
  shakeOnEnterAnimation,
  swingOnEnterAnimation,
  tadaOnEnterAnimation,
  wobbleOnEnterAnimation,
  jelloOnEnterAnimation,
  flipOnEnterAnimation,
  bounceInOnEnterAnimation,
  bounceOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  bounceOutDownOnLeaveAnimation,
  bounceInDownOnEnterAnimation,
  bounceOutUpOnLeaveAnimation,
  bounceInLeftOnEnterAnimation,
  bounceInRightOnEnterAnimation,
  bounceOutLeftOnLeaveAnimation,
  bounceOutRightOnLeaveAnimation,
  fadeInOnEnterAnimation,
  fadeInUpOnEnterAnimation,
  fadeInDownOnEnterAnimation,
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  fadeInUpBigOnEnterAnimation,
  fadeInDownBigOnEnterAnimation,
  fadeInLeftBigOnEnterAnimation,
  fadeInRightBigOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeOutUpOnLeaveAnimation,
  fadeOutDownOnLeaveAnimation,
  fadeOutLeftOnLeaveAnimation,
  fadeOutRightOnLeaveAnimation,
  fadeOutUpBigOnLeaveAnimation,
  fadeOutDownBigOnLeaveAnimation,
  fadeOutLeftBigOnLeaveAnimation,
  fadeOutRightBigOnLeaveAnimation,
  flipInXOnEnterAnimation,
  flipInYOnEnterAnimation,
  flipOutXOnLeaveAnimation,
  flipOutYOnLeaveAnimation,
  lightSpeedInOnEnterAnimation,
  lightSpeedOutOnLeaveAnimation,
  rotateInOnEnterAnimation,
  rotateInUpLeftOnEnterAnimation,
  rotateInUpRightOnEnterAnimation,
  rotateInDownLeftOnEnterAnimation,
  rotateInDownRightOnEnterAnimation,
  rotateOutOnLeaveAnimation,
  rotateOutUpLeftOnLeaveAnimation,
  rotateOutUpRightOnLeaveAnimation,
  rotateOutDownLeftOnLeaveAnimation,
  rotateOutDownRightOnLeaveAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideInDownOnEnterAnimation,
  slideInLeftOnEnterAnimation,
  slideOutUpOnLeaveAnimation,
  slideOutDownOnLeaveAnimation,
  slideOutLeftOnLeaveAnimation,
  slideOutRightOnLeaveAnimation,
  zoomInOnEnterAnimation,
  zoomInUpOnEnterAnimation,
  zoomInDownOnEnterAnimation,
  zoomInLeftOnEnterAnimation,
  zoomInRightOnEnterAnimation,
  zoomOutOnLeaveAnimation,
  zoomOutUpOnLeaveAnimation,
  zoomOutDownOnLeaveAnimation,
  zoomOutLeftOnLeaveAnimation,
  zoomOutRightOnLeaveAnimation,
  hingeOnLeaveAnimation,
  jackInTheBoxOnEnterAnimation,
  rollInOnEnterAnimation,
  rollOutOnLeaveAnimation,
  expandOnEnterAnimation,
  collapseOnLeaveAnimation,
  fadeInExpandOnEnterAnimation,
  fadeOutCollapseOnLeaveAnimation,
  expandRightOnEnterAnimation,
  collapseLeftOnLeaveAnimation,
  fadeInExpandRightOnEnterAnimation,
  fadeOutCollapseLeftOnLeaveAnimation
} from 'angular-animations';
@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss'],
  animations: [
    wobbleAnimation(),fadeInRightAnimation(),
    heartBeatAnimation(),
    bounceInRightOnEnterAnimation({ anchor: 'enter1' }),
    bounceInRightOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter3', delay: 200, animateChildren: 'none' }),
    bounceOnEnterAnimation(),
    flashOnEnterAnimation(),
    pulseOnEnterAnimation(),
    rubberBandOnEnterAnimation(),
    shakeOnEnterAnimation(),
    swingOnEnterAnimation(),
    tadaOnEnterAnimation(),
    wobbleOnEnterAnimation(),
    jelloOnEnterAnimation(),
    flipOnEnterAnimation(),
    bounceInOnEnterAnimation(),
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
    flipInXOnEnterAnimation(),
    flipInYOnEnterAnimation(),
    flipOutXOnLeaveAnimation(),
    flipOutYOnLeaveAnimation(),
    lightSpeedInOnEnterAnimation(),
    lightSpeedOutOnLeaveAnimation(),
    rotateInOnEnterAnimation(),
    rotateInUpLeftOnEnterAnimation(),
    rotateInUpRightOnEnterAnimation(),
    rotateInDownLeftOnEnterAnimation(),
    rotateInDownRightOnEnterAnimation(),
    rotateOutOnLeaveAnimation(),
    rotateOutUpLeftOnLeaveAnimation(),
    rotateOutUpRightOnLeaveAnimation(),
    rotateOutDownLeftOnLeaveAnimation(),
    rotateOutDownRightOnLeaveAnimation(),
    slideInRightOnEnterAnimation(),
    slideInUpOnEnterAnimation(),
    slideInDownOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    slideOutUpOnLeaveAnimation(),
    slideOutDownOnLeaveAnimation(),
    slideOutLeftOnLeaveAnimation(),
    slideOutRightOnLeaveAnimation(),
    zoomInOnEnterAnimation(),
    zoomInUpOnEnterAnimation(),
    zoomInDownOnEnterAnimation(),
    zoomInLeftOnEnterAnimation(),
    zoomInRightOnEnterAnimation(),
    zoomOutOnLeaveAnimation(),
    zoomOutUpOnLeaveAnimation(),
    zoomOutDownOnLeaveAnimation(),
    zoomOutLeftOnLeaveAnimation(),
    zoomOutRightOnLeaveAnimation(),
    hingeOnLeaveAnimation(),
    jackInTheBoxOnEnterAnimation(),
    rollInOnEnterAnimation(),
    rollOutOnLeaveAnimation(),
    expandOnEnterAnimation({ duration: 400 }),
    collapseOnLeaveAnimation({ duration: 400 }),
    fadeInExpandOnEnterAnimation({ duration: 400 }),
    fadeOutCollapseOnLeaveAnimation({ duration: 400 }),
    expandRightOnEnterAnimation({ duration: 400 }),
    collapseLeftOnLeaveAnimation({ duration: 400 }),
    fadeInExpandRightOnEnterAnimation({ duration: 400 }),
    fadeOutCollapseLeftOnLeaveAnimation({ duration: 400 })
  ]
})

export class MyprojectsComponent implements OnInit,OnDestroy{
  private intersectionObserver!: IntersectionObserver;  
  projState=true;
  constructor(private elementRef: ElementRef) {}
  ngOnInit(){

    const options = {
      rootMargin: '0px',
      threshold: 0.1 // Adjust this threshold as needed
    };

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // gsap.from('.proj-text',{
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
            this.projState=true;
         } 
        else{
          this.projState=false;
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
