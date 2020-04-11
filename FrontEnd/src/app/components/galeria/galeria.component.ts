import { Component, OnInit } from '@angular/core';
import {GaleriaService, foto} from '../../services/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
 fotoMaternal: foto[]
 fotoPreescolar: foto[]
 fotoPrimaria: foto[]
 fotoFeria: foto[]
 fotoTaller: foto[]
 fotoFestival: foto[]
 fotoInstalaciones: foto[]

  constructor(private _galeriaService: GaleriaService) {
    this.fotoMaternal=_galeriaService.getfotoMaternal();
    this.fotoPreescolar=_galeriaService.getfotoPreescolar();
    this.fotoPrimaria=_galeriaService.getfotoPrimaria();
    this.fotoFeria=_galeriaService.getfotoFeria();
    this.fotoTaller=_galeriaService.getfotoTaller();
    this.fotoFestival=_galeriaService.getfotoFestival();
    this.fotoInstalaciones=_galeriaService.getfotoInstalaciones();

   }


  ngOnInit() {
  }

}
