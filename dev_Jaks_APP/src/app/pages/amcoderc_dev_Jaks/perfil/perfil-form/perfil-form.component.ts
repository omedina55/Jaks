import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { PerfilModel } from 'src/app/models/amcoderc_dev_Jaks/perfil.model';

import { PerfilService } from 'src/app/services/amcoderc_dev_Jaks/perfil.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.scss'],
})

export class PerfilFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmPerfil: FormGroup;

  // validation form
  validation = false;
  
  // Perfil Model
  perfil = new PerfilModel();
  id = 0;
  perfilActive = true;

  // Filter
  perfilFilter = new PerfilModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private perfilService: PerfilService
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
    this.frmPerfil = this.formBuilder.group({
      id: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      descripcion: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      fechaCreacion: new FormControl(null),
      usuarioModificacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaModificacion: new FormControl(null),
      usuarioBajaId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaBaja: new FormControl(null),
      baja: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),

    });
  }


  // Set data
  initForm(): void {
    this.perfilService.get(this.id).subscribe((res: any) => {
      this.perfil = res.data[0];

      this.frmPerfil.get('id').setValue(this.perfil.id);
      this.frmPerfil.get('descripcion').setValue(this.perfil.descripcion);
      this.frmPerfil.get('fechaCreacion').setValue(this.perfil.fechaCreacion);
      this.frmPerfil.get('usuarioModificacionId').setValue(this.perfil.usuarioModificacionId);
      this.frmPerfil.get('fechaModificacion').setValue(this.perfil.fechaModificacion);
      this.frmPerfil.get('usuarioBajaId').setValue(this.perfil.usuarioBajaId);
      this.frmPerfil.get('fechaBaja').setValue(this.perfil.fechaBaja);
      this.frmPerfil.get('baja').setValue(this.perfil.baja);



      // Enable disable form
      
      if (this.perfilActive) {
        this.frmPerfil.enable();
      }
      else {
        this.frmPerfil.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmPerfil.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let perfil: PerfilModel =  new PerfilModel();
    perfil = this.frmPerfil.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      perfil.id = this.id;
      this.perfilService.update(perfil).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/perfil']);
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
      this.perfilService.create(perfil).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/perfil']);
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


  changeStatus(status: boolean, perfil: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${perfil.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.perfilService.enable(perfil.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${perfil.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.perfilService.disable(perfil.id).subscribe((res: any) => {
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
  get f() { return this.frmPerfil.controls; }

}
