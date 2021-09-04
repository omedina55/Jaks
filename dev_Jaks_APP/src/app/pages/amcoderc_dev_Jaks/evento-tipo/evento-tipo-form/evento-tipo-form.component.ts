import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { EventoTipoModel } from 'src/app/models/amcoderc_dev_Jaks/evento-tipo.model';

import { EventoTipoService } from 'src/app/services/amcoderc_dev_Jaks/evento-tipo.service';

@Component({
  selector: 'app-evento-tipo-form',
  templateUrl: './evento-tipo-form.component.html',
  styleUrls: ['./evento-tipo-form.component.scss'],
})

export class EventoTipoFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmEventoTipo: FormGroup;

  // validation form
  validation = false;
  
  // EventoTipo Model
  eventoTipo = new EventoTipoModel();
  id = 0;
  eventoTipoActive = true;

  // Filter
  eventoTipoFilter = new EventoTipoModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private eventoTipoService: EventoTipoService
  ) {
    this.createForm();

  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.editAction = true;
        this.id = id;
        this.initForm();
      }
    });
  }



  // Reactive Form
  createForm(): void {
    this.frmEventoTipo = this.formBuilder.group({
      id: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      descripcion: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      baja: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),

    });
  }


  // Set data
  initForm(): void {
    this.eventoTipoService.get(this.id).subscribe((res: any) => {
      this.eventoTipo = res.data[0];

      this.frmEventoTipo.get('id').setValue(this.eventoTipo.id);
      this.frmEventoTipo.get('descripcion').setValue(this.eventoTipo.descripcion);
      this.frmEventoTipo.get('baja').setValue(this.eventoTipo.baja);



      // Enable disable form
      
      if (this.eventoTipoActive) {
        this.frmEventoTipo.enable();
      }
      else {
        this.frmEventoTipo.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmEventoTipo.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let eventoTipo: EventoTipoModel =  new EventoTipoModel();
    eventoTipo = this.frmEventoTipo.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      eventoTipo.id = this.id;
      this.eventoTipoService.update(eventoTipo).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/eventoTipo']);
        });
      },
      (err) => {
        // Error
        // console.log(err);
        Swal.fire('Error', 'Unexpected error', 'error');
      },
      () => {
        // Complete
      });
    }

    if (!this.editAction){
      this.eventoTipoService.create(eventoTipo).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/eventoTipo']);
        });
      },
      (err) => {
        // Error
        // console.log(err);
        Swal.fire('Error', 'Unexpected error', 'error');
      },
      () => {
        // Complete
      });
    }

  }


  changeStatus(status: boolean, eventoTipo: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${eventoTipo.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.eventoTipoService.enable(eventoTipo.id).subscribe((res: any) => {
            // console.log(res);
            if (res.data[0].errorId !== 0) {
              Swal.fire('Error', res.data[0].message, 'error');
              return;
            }

            Swal.fire('Edit', 'Record enabled', 'success').then(() => {
              this.initForm();
            });
          },
          (err) => {
            // Error
            // console.log(err);
            Swal.fire('Error', 'Unexpected error', 'error');
          },
          () => {
            // Complete
          });
        }
      });
    }
    if (status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to disable this record?</h4>
        <br> <strong>Record # ${eventoTipo.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.eventoTipoService.disable(eventoTipo.id).subscribe((res: any) => {
            // console.log(res);
            if (res.data[0].errorId !== 0) {
              Swal.fire('Error', res.data[0].message, 'error');
              return;
            }

            Swal.fire('Edit', 'Record disabled', 'success').then(() => {
              this.initForm();
            });
          },
          (err) => {
            // Error
            // console.log(err);
            Swal.fire('Error', 'Unexpected error', 'error');
          },
          () => {
            // Complete
          });
        }
      });
    }
  }

 
  // convenience getter for easy access to form fields
  // tslint:disable-next-line: typedef
  get f() { return this.frmEventoTipo.controls; }

}
