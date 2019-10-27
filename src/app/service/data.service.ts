import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http'
import { invalid } from '@angular/compiler/src/render3/view/util';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  arrDocument_type = ["DNI","NIE"]
  formOkey 
  confiEmail= ""
  confiPass = ""
  usuario = {}
  datos =  {
    
    name: "",
    surname: "",
    fechaNacimiento:  {dia: "", mes: "", year: ""},
    document_type: "",
    identification: "",
    email: "",
    password: "",
    gender: "",

  }
  constructor(public _http: HttpClient) {}

  

  usuarios() {

    this._http.get("https://my-json-server.typicode.com/volkz/technical-form/users").subscribe((response) => {

      console.log(response);

    })

  }
  usuarioId(id) {


    this._http.get("https://my-json-server.typicode.com/volkz/technical-form/users/ " + id).subscribe((response) => {

      this.usuario = response

    })

  }

  pushDatos() {

    this.formOkey  = true

    let arr = Object.keys(this.datos)

    for (let i = 0; i < arr.length; i++) {

      let key = arr[i]

      if (this.datos[key] == "") {
      console.log(this.datos)
        this.formOkey= false;

      }
    }


if (this.formOkey) {
   this._http.post("https://my-json-server.typicode.com/volkz/technical-form/users", this.datos)
      .subscribe((response) => {
        alert("Datos introduzidos con exito")
      })
}else{

  alert("Introduzca los datos correctamente")
}
   

  }


  comprobandoDatos(){

    if(this.datos.name && this.datos.surname && this.datos.identification && this.datos.email && this.datos.gender && this.datos.fechaNacimiento != undefined){
        
     var divDisplay = document.getElementsByClassName("invalid-feedback")
      
      
     alert("Resvise los datos introducidos")
    }else{
      
      
    }
  }
          nuevoUsuario() {
        
            
            this._http.post("https://my-json-server.typicode.com/volkz/technical-form/users", this.datos).subscribe((response) => {
              
            
             
            
            })
          }

  
  modificarUsuario() {

    this._http.post("https://my-json-server.typicode.com/volkz/technical-form/users", this.datos).subscribe((response) => {


    })
  }
}
