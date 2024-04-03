import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss'
})
export class Form1Component {

  @ViewChild('password') password!:NgModel

  isClicked:boolean = false

  passwordType:string = "password"
  btnText:string = "MOSTRA"

  submit(form:NgForm){
    console.log(form.value);

  }

  ShowHide(){
    if (this.passwordType == "password") {
      this.passwordType = "text"
      this.btnText = "NASCONDI"
    } else {
      this.passwordType = "password"
      this.btnText = "MOSTRA"
    }
  }

}
