import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { formBuilder }

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  generalData = this.fb.group({
    pruebaInput: ['', Validators.required],
  });

  // generalData = new FormGroup({
  //   pruebaInput: new FormControl('', Validators.required)
  // });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.generalData.value);
  }

}
