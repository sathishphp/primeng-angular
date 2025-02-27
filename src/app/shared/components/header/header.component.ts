import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  date = new Date();
  ngOnInit(){
    this.loadCurrentTime();
  }

  loadCurrentTime(){
    setInterval(()=>{
      this.date = new Date();
    },1000);
  }

  toggleNavigation(){
    document.querySelector('body')?.classList.toggle('toggle-sidebar')
  }
}
