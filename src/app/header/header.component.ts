import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,MenubarModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  isCollapsed: boolean = false;
  ngOnInit() {
  }

  hideBootstrapNavCollapse(){
    const navbar = document.querySelector('.navbar-collapse');
    if(navbar != null){
      navbar.classList.remove('show');
    }
  }

}
