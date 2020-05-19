import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nhapinfo',
  templateUrl: './nhapinfo.page.html',
  styleUrls: ['./nhapinfo.page.scss'],
})
export class NhapinfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToBill(){
    this.router.navigateByUrl('/bangkechitiet')
  }

}
