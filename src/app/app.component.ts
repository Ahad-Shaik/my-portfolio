import { Component, ElementRef, OnInit } from '@angular/core';
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
  };
}

