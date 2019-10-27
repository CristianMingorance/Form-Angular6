import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../service/data.service'
import {
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(public _routeActive: ActivatedRoute, public _service: DataService) { }


  ngOnInit() {
    this._service.usuarios();
    
  }

}
