import { Component, OnInit } from '@angular/core';
import { MathHelperService } from 'src/app/service/math-helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private mathHelperService: MathHelperService) { }

  ngOnInit(): void {
  }

}
