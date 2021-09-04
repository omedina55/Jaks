import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ConfiguracionModel } from 'src/app/models/amcoderc_dev_Jaks/configuracion.model';

import { ConfiguracionService } from 'src/app/services/amcoderc_dev_Jaks/configuracion.service';

@Component({
  selector: 'app-configuracion-form',
  templateUrl: './configuracion-form.component.html',
  styleUrls: ['./configuracion-form.component.scss'],
})

export class ConfiguracionFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmConfiguracion: FormGroup;

  // validation form
  validation = false;
  
  // Configuracion Model
  configuracion = new ConfiguracionModel();
  id = 0;
  configuracionActive = true;

  // Filter
  configuracionFilter = new ConfiguracionModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private configuracionService: ConfiguracionService
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
    this.frmConfiguracion = this.formBuilder.group({
      id: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      descripcion: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      valor: new FormControl(null, [Validators.required, Validators.maxLength(5000)]),

    });
  }


  // Set data
  initForm(): void {
    this.configuracionService.get(this.id).subscribe((res: any) => {
      this.configuracion = res.data[0];

      this.frmConfiguracion.get('id').setValue(this.configuracion.id);
      this.frmConfiguracion.get('descripcion').setValue(this.configuracion.descripcion);
      this.frmConfiguracion.get('valor').setValue(this.configuracion.valor);



      // Enable disable form
      
      if (this.configuracionActive) {
        this.frmConfiguracion.enable();
      }
      else {
        this.frmConfiguracion.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmConfiguracion.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let configuracion: ConfiguracionModel =  new ConfiguracionModel();
    configuracion = this.frmConfiguracion.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      configuracion.id = this.id;
      this.configuracionService.update(configuracion).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/configuracion']);
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
      this.configuracionService.create(configuracion).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/configuracion']);
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


  changeStatus(status: boolean, configuracion: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${configuracion.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.configuracionService.enable(configuracion.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${configuracion.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.configuracionService.disable(configuracion.id).subscribe((res: any) => {
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
  get f() { return this.frmConfiguracion.controls; }

}
