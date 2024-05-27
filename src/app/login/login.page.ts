import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user={
  usuario: "",
  password:""
}
  constructor(private router: Router) { }//se debe instanciar

  ngOnInit() {
  }
  ingresar(){
    //se declara e instancia un elemento de tipo navigationExtras
    let navigationExtras: NavigationExtras = {
      state:{
        user: this.user //al estado se asi
      }
    };
    this.router.navigate(['/home'],navigationExtras);//navegamos hacia el home y enviamos información adicional
  }
}
