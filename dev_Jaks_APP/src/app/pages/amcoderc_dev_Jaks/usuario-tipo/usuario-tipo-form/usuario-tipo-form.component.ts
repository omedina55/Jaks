import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioTipoModel } from 'src/app/models/amcoderc_dev_Jaks/usuario-tipo.model';

import { UsuarioTipoService } from 'src/app/services/amcoderc_dev_Jaks/usuario-tipo.service';

@Component({
  selector: 'app-usuario-tipo-form',
  templateUrl: './usuario-tipo-form.component.html',
  styleUrls: ['./usuario-tipo-form.component.scss'],
})

export class UsuarioTipoFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmUsuarioTipo: FormGroup;

  // validation form
  validation = false;
  
  // UsuarioTipo Model
  usuarioTipo = new UsuarioTipoModel();
  id = 0;
  usuarioTipoActive = true;

  // Filter
  usuarioTipoFilter = new UsuarioTipoModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private usuarioTipoService: UsuarioTipoService
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
    this.frmUsuarioTipo = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.maxLength(50)]),

    });
  }


  // Set data
  initForm(): void {
    this.usuarioTipoService.get(this.id).subscribe((res: any) => {
      this.usuarioTipo = res.data[0];

      this.frmUsuarioTipo.get('descripcion').setValue(this.usuarioTipo.descripcion);



      // Enable disable form
      this.usuarioTipoActive = this.usuarioTipo.active;
      if (this.usuarioTipoActive) {
        this.frmUsuarioTipo.enable();
      }
      else {
        this.frmUsuarioTipo.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmUsuarioTipo.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let usuarioTipo: UsuarioTipoModel =  new UsuarioTipoModel();
    usuarioTipo = this.frmUsuarioTipo.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      usuarioTipo.id = this.id;
      this.usuarioTipoService.update(usuarioTipo).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuarioTipo']);
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
      this.usuarioTipoService.create(usuarioTipo).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuarioTipo']);
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


  changeStatus(status: boolean, usuarioTipo: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${usuarioTipo.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioTipoService.enable(usuarioTipo.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${usuarioTipo.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioTipoService.disable(usuarioTipo.id).subscribe((res: any) => {
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
  get f() { return this.frmUsuarioTipo.controls; }

}
