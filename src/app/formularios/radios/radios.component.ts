import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {

  profileForm = this.fb.group({
    procesos: ['', [Validators.required]] ,
    lacaOptions: this.fb.group({
      frente: [''],
    //   dorzo: ['']
    }),
    // troquelado: ['', [Validators.required]],
    // laminado: ['', [Validators.required]],
    // laminadoOptions: this.fb.group({
    //   poliMate: [''],
    //   dorzo: [''],
    //   laminado: ['']
    // }),
  });

  onSubmit(){
    console.log(this.profileForm);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onChanges();
  }
  onChanges() {
    // this.profileForm.valueChanges.subscribe(val => {
    //   console.log(this.profileForm.value.lacaOptions.frente !== '');
    //   if(this.profileForm.value.lacaOptions){
    //     this.profileForm.patchValue({
    //           procesos: ''
    //         });
    //   }
    // });


    this.profileForm.get('lacaOptions').valueChanges.subscribe(val => {
      // console.log(this.profileForm.value.lacaOptions.frente);
      console.log('Soy Laca');
      console.log(this.profileForm);
      this.profileForm.patchValue({
        procesos: 'lacaUv'
      });
    });

    // this.profileForm.get('procesos').valueChanges.subscribe(val => {
    //   // console.log(this.profileForm.value.lacaOptions.frente);
    //   console.log('Soy procesos');
    //   console.log(this.profileForm);
    // });
  }

}


interface sijaala{
  procesos: string;
  lacaOptions: {
    frente: string;
  }
}
