import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from 'src/app/models/amcoderc_dev_Jaks/usuario.model';

import { UsuarioService } from 'src/app/services/amcoderc_dev_Jaks/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})

export class UsuarioFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmUsuario: FormGroup;

  // validation form
  validation = false;
  
  // Usuario Model
  usuario = new UsuarioModel();
  id = 0;
  usuarioActive = true;

  // Filter
  usuarioFilter = new UsuarioModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private usuarioService: UsuarioService
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
    this.frmUsuario = this.formBuilder.group({
      usuario: new FormControl(null, [Validators.maxLength(50)]),
      correo: new FormControl(null, [Validators.maxLength(100)]),
      contrasena: new FormControl(null, [Validators.maxLength(50)]),
      nombre: new FormControl(null, [Validators.maxLength(100)]),
      apellidoPaterno: new FormControl(null, [Validators.maxLength(100)]),
      apellidoMaterno: new FormControl(null, [Validators.maxLength(100)]),
      usuarioCreacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaCreacion: new FormControl(null),
      usuarioModificacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaModificacion: new FormControl(null),
      usuarioBajaId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaBaja: new FormControl(null),
      baja: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      usuarioTipoId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });
  }


  // Set data
  initForm(): void {
    this.usuarioService.get(this.id).subscribe((res: any) => {
      this.usuario = res.data[0];

      this.frmUsuario.get('usuario').setValue(this.usuario.usuario);
      this.frmUsuario.get('correo').setValue(this.usuario.correo);
      this.frmUsuario.get('contrasena').setValue(this.usuario.contrasena);
      this.frmUsuario.get('nombre').setValue(this.usuario.nombre);
      this.frmUsuario.get('apellidoPaterno').setValue(this.usuario.apellidoPaterno);
      this.frmUsuario.get('apellidoMaterno').setValue(this.usuario.apellidoMaterno);
      this.frmUsuario.get('usuarioCreacionId').setValue(this.usuario.usuarioCreacionId);
      this.frmUsuario.get('fechaCreacion').setValue(this.usuario.fechaCreacion);
      this.frmUsuario.get('usuarioModificacionId').setValue(this.usuario.usuarioModificacionId);
      this.frmUsuario.get('fechaModificacion').setValue(this.usuario.fechaModificacion);
      this.frmUsuario.get('usuarioBajaId').setValue(this.usuario.usuarioBajaId);
      this.frmUsuario.get('fechaBaja').setValue(this.usuario.fechaBaja);
      this.frmUsuario.get('baja').setValue(this.usuario.baja);
      this.frmUsuario.get('usuarioTipoId').setValue(this.usuario.usuarioTipoId);



      // Enable disable form
      
      if (this.usuarioActive) {
        this.frmUsuario.enable();
      }
      else {
        this.frmUsuario.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmUsuario.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let usuario: UsuarioModel =  new UsuarioModel();
    usuario = this.frmUsuario.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      usuario.id = this.id;
      this.usuarioService.update(usuario).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuario']);
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
      this.usuarioService.create(usuario).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuario']);
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


  changeStatus(status: boolean, usuario: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${usuario.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioService.enable(usuario.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${usuario.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioService.disable(usuario.id).subscribe((res: any) => {
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
  get f() { return this.frmUsuario.controls; }

}
