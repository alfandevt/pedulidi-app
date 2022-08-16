import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  tglMasuk = new Date().toLocaleString()

  constructor() { }

  ngOnInit(): void {
  }

}
