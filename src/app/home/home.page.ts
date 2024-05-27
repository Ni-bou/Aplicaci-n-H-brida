import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any; //esta es una variable "any" es que permite cualquier valor
  /**
   * En el constructor del HomePage se colocan por parametros
   * todas aquellas propiedades con el siguiente formato
   * private =  visibilidad
   * activeRoute = identificador
   * ActiveRoute = Tipo de objeto
   * : Indica que el identificador sera de la clase posterior a los :
   */
  constructor(private activerouter: ActivatedRoute, private router: Router) {

    //se llama a la ruta activa y se obtiene sus parametrosd mediante una subscripcion
    this.activerouter.queryParams.subscribe(params => { //utilizamos lambda
      if(this.router.getCurrentNavigation().extras.state){//validamos que la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.user;//si tiene extra rescata lo enviado
        console.log(this.data)//muestra por consola l,o traido
      }else{this.router.navigate(["/login"])}//si no tiene extra la navegacion actual navegar al login
    })
  }

}
