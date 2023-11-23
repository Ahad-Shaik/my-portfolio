import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ServiceFileService } from './_services/service-file.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private myServicefile:ServiceFileService,private elementRef: ElementRef,private sanitizer: DomSanitizer) { }

  
  panel1Expanded = true;
  panel2Expanded = false;
  expState=true;
   
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
  ngOnInit(): void {
    this.myServicefile.getServicedata().subscribe((val:any)=>{
      console.log(val);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    let hiddenElement = document.querySelectorAll(".navbar");
    hiddenElement.forEach((el) => observer.observe(el));
    gsap.from(hiddenElement,{
      opacity:0,
      x:200,
      stagger:0.2,
      delay:0.5
    })
    // from right
    // gsap.from('.nav-item',{
    //   opacity:0,
    //   delay:1
    // })

    /* from down */
    gsap.from('.nav-item',{
      opacity:0,
      delay:0.75,
      y:40,
      stagger:0.2
    })

    /* animate from top */
    // gsap.from('.nav-item',{
    //   opacity:0,
    //   delay:1,
    //   y:-40,
    // })
  
  };
}

