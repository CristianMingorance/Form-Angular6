import { Component, OnInit } from '@angular/core';
import {
  DataService
} from '../service/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public _routeActive: ActivatedRoute, public _service: DataService) {

    this._routeActive.paramMap.subscribe(
      (params) => {

        console.log(params.get("id"))

        this._service.usuarioId(params.get("id"));

      })
   }

  ngOnInit() {
  }

}
