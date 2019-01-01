import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';       
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService){ }

  ngOnInit() {
  }

  downloadPDF() {
    return '/assets/Danny_Yu_Resume.pdf'
}

}
