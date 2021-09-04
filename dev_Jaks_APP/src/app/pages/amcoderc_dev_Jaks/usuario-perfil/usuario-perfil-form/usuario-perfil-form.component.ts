import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioPerfilModel } from 'src/app/models/amcoderc_dev_Jaks/usuario-perfil.model';

import { UsuarioPerfilService } from 'src/app/services/amcoderc_dev_Jaks/usuario-perfil.service';

@Component({
  selector: 'app-usuario-perfil-form',
  templateUrl: './usuario-perfil-form.component.html',
  styleUrls: ['./usuario-perfil-form.component.scss'],
})

export class UsuarioPerfilFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmUsuarioPerfil: FormGroup;

  // validation form
  validation = false;
  
  // UsuarioPerfil Model
  usuarioPerfil = new UsuarioPerfilModel();
  id = 0;
  usuarioPerfilActive = true;

  // Filter
  usuarioPerfilFilter = new UsuarioPerfilModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private usuarioPerfilService: UsuarioPerfilService
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
    this.frmUsuarioPerfil = this.formBuilder.group({
      usuarioId: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      perfilId: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      usuarioCreacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
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
    this.usuarioPerfilService.get(this.id).subscribe((res: any) => {
      this.usuarioPerfil = res.data[0];

      this.frmUsuarioPerfil.get('usuarioId').setValue(this.usuarioPerfil.usuarioId);
      this.frmUsuarioPerfil.get('perfilId').setValue(this.usuarioPerfil.perfilId);
      this.frmUsuarioPerfil.get('usuarioCreacionId').setValue(this.usuarioPerfil.usuarioCreacionId);
      this.frmUsuarioPerfil.get('fechaCreacion').setValue(this.usuarioPerfil.fechaCreacion);
      this.frmUsuarioPerfil.get('usuarioModificacionId').setValue(this.usuarioPerfil.usuarioModificacionId);
      this.frmUsuarioPerfil.get('fechaModificacion').setValue(this.usuarioPerfil.fechaModificacion);
      this.frmUsuarioPerfil.get('usuarioBajaId').setValue(this.usuarioPerfil.usuarioBajaId);
      this.frmUsuarioPerfil.get('fechaBaja').setValue(this.usuarioPerfil.fechaBaja);
      this.frmUsuarioPerfil.get('baja').setValue(this.usuarioPerfil.baja);



      // Enable disable form
      
      if (this.usuarioPerfilActive) {
        this.frmUsuarioPerfil.enable();
      }
      else {
        this.frmUsuarioPerfil.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmUsuarioPerfil.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let usuarioPerfil: UsuarioPerfilModel =  new UsuarioPerfilModel();
    usuarioPerfil = this.frmUsuarioPerfil.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      usuarioPerfil.id = this.id;
      this.usuarioPerfilService.update(usuarioPerfil).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuarioPerfil']);
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
      this.usuarioPerfilService.create(usuarioPerfil).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuarioPerfil']);
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


  changeStatus(status: boolean, usuarioPerfil: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${usuarioPerfil.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioPerfilService.enable(usuarioPerfil.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${usuarioPerfil.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioPerfilService.disable(usuarioPerfil.id).subscribe((res: any) => {
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
  get f() { return this.frmUsuarioPerfil.controls; }

}
