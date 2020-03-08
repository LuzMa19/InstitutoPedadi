import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
  styleUrls: ['./admision.component.css']
})
export class AdmisionComponent implements OnInit {
  Tipo: string;

  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'))
    this.Tipo=this._route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
  }

}
