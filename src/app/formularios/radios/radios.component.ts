import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {

  procesosForm = this.fb.group({
    procesos: ['', [Validators.required]] ,
    lacaOptions: this.fb.group({
      options: [''],
    //   dorzo: ['']
    }),
    // troquelado: ['', [Validators.required]],
    // laminado: ['', [Validators.required]],
    // laminadoOptions: this.fb.group({
    //   poliMate: [''],
    //   dorzo: [''],
    //   laminado: ['']
    // }),

    // procesosForm = new FormGroup({
    //   procesos: new FormControl(),
    //   lacaOptions: new FormGroup({
    //     frente : new FormControl()
    //   })
  });

  // });

  onSubmit() {
    console.log(this.procesosForm);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.onChanges();
    this.changeLacaOptions();
  }

  changeLacaOptions(){
    this.procesosForm.get('lacaOptions').valueChanges.subscribe(val => {
      // console.log(this.profileForm.value.lacaOptions.frente);
      console.log('Soy Laca');
      console.log(this.procesosForm);
      this.procesosForm.patchValue({
        procesos: 'lacaUv'
      });
    });
  }

}
