import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import gsap from 'gsap';
import {
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
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  animations: [
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
export class TechStackComponent implements OnDestroy,OnInit {

  private intersectionObserver!: IntersectionObserver;
  techState=true;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      rootMargin: '0px',
      threshold: 0
    };

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.techState=true;
            // gsap.from('.test-logo', {
            //   opacity:0,
            //   x: 50,
            //   stagger:0.2
            // });
            // gsap.from('.skill-text',{
            //   opacity:0,
            //   delay:0.75,
            //   y:-40,
            //   stagger:0.2
            // })
         } 
         else{
          this.techState=false;
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

  @HostListener('window:beforeunload')
  stopAnimation() {
    // Stop the animation or perform any other cleanup logic
    // For example, if you have a boolean flag to control the animation state, you can set it to false:
    this.techState = false;
  }
}
