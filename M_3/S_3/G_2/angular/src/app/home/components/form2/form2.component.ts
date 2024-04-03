import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {

  form!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      personalData: this.fb.group({
        nome: this.fb.control(null, [Validators.required]),
        cognome: this.fb.control(null)
      }),
      authData: this.fb.group({
        email: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, [Validators.required])
      })
    })
  }
  submit(form:FormGroup){
    console.log(form.value);

  }
}
