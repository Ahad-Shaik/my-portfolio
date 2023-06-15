import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import {heartBeatAnimation,
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
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
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
export class ExperienceComponent implements OnInit {

  panel1Expanded = true;
  panel2Expanded = false;
  expState=true;
  
  private intersectionObserver!: IntersectionObserver;
  constructor(private elementRef: ElementRef,private sanitizer: DomSanitizer) {}

  
  togglePanels(panel: string): void {
    if (panel == 'panel1') {
      this.panel1Expanded = true;
      this.panel2Expanded = false;
    }  if (panel == 'panel2') {
      this.panel1Expanded = false;
      this.panel2Expanded = true;
    }
  }

  getPdfUrl(): any {
    const pdfPath = 'assets/Ahad_Resume.pdf'; 
    return this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
  }
  
  previewPdf(): any{
    const pdfUrl = 'assets/Ahad_Resume.pdf'; 
    window.open(pdfUrl, '_blank');
    return this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);

  }
  
  ngOnInit(){
    const options = {
      rootMargin: '0px',
      threshold: 0.01 // Adjust this threshold as needed
    };
    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.expState=true;
          // gsap.from('.exp-head',{
          //   opacity:0,
          //   delay:0.3,
          //   y:-50,
          //   stagger:0.2
          // })
          // gsap.from('.wipro-subhead',{
          //   opacity:0,
          //   delay:0.3,
          //   x:50,
          //   stagger:0.2
          // })
          // gsap.from('.exp-desc .proj-desc',{
          //   opacity:0,
          //   delay:0.3,
          //   x:-50,
          //   stagger:0.2
          // })
          
        } 
        else{
          this.expState=false;
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
