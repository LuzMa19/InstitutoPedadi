import { Component, OnInit } from '@angular/core';
import { AboutService, TeamPedadi } from '../../services/about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pedadi: TeamPedadi[];
  constructor(private _aboutService: AboutService) {
    this.pedadi = this._aboutService.getTeamPedadi();
  }

  ngOnInit() {
  }

}
