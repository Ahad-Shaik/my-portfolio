import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
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

