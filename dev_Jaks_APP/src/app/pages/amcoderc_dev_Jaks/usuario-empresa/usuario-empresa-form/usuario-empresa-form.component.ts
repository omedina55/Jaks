import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioEmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/usuario-empresa.model';

import { UsuarioEmpresaService } from 'src/app/services/amcoderc_dev_Jaks/usuario-empresa.service';

@Component({
  selector: 'app-usuario-empresa-form',
  templateUrl: './usuario-empresa-form.component.html',
  styleUrls: ['./usuario-empresa-form.component.scss'],
})

export class UsuarioEmpresaFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmUsuarioEmpresa: FormGroup;

  // validation form
  validation = false;
  
  // UsuarioEmpresa Model
  usuarioEmpresa = new UsuarioEmpresaModel();
  id = 0;
  usuarioEmpresaActive = true;

  // Filter
  usuarioEmpresaFilter = new UsuarioEmpresaModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private usuarioEmpresaService: UsuarioEmpresaService
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
    this.frmUsuarioEmpresa = this.formBuilder.group({
      usuarioId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      empresaId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
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
    this.usuarioEmpresaService.get(this.id).subscribe((res: any) => {
      this.usuarioEmpresa = res.data[0];

      this.frmUsuarioEmpresa.get('usuarioId').setValue(this.usuarioEmpresa.usuarioId);
      this.frmUsuarioEmpresa.get('empresaId').setValue(this.usuarioEmpresa.empresaId);
      this.frmUsuarioEmpresa.get('usuarioCreacionId').setValue(this.usuarioEmpresa.usuarioCreacionId);
      this.frmUsuarioEmpresa.get('fechaCreacion').setValue(this.usuarioEmpresa.fechaCreacion);
      this.frmUsuarioEmpresa.get('usuarioModificacionId').setValue(this.usuarioEmpresa.usuarioModificacionId);
      this.frmUsuarioEmpresa.get('fechaModificacion').setValue(this.usuarioEmpresa.fechaModificacion);
      this.frmUsuarioEmpresa.get('usuarioBajaId').setValue(this.usuarioEmpresa.usuarioBajaId);
      this.frmUsuarioEmpresa.get('fechaBaja').setValue(this.usuarioEmpresa.fechaBaja);
      this.frmUsuarioEmpresa.get('baja').setValue(this.usuarioEmpresa.baja);



      // Enable disable form
      
      if (this.usuarioEmpresaActive) {
        this.frmUsuarioEmpresa.enable();
      }
      else {
        this.frmUsuarioEmpresa.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmUsuarioEmpresa.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let usuarioEmpresa: UsuarioEmpresaModel =  new UsuarioEmpresaModel();
    usuarioEmpresa = this.frmUsuarioEmpresa.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      usuarioEmpresa.id = this.id;
      this.usuarioEmpresaService.update(usuarioEmpresa).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuarioEmpresa']);
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
      this.usuarioEmpresaService.create(usuarioEmpresa).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/usuarioEmpresa']);
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


  changeStatus(status: boolean, usuarioEmpresa: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${usuarioEmpresa.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioEmpresaService.enable(usuarioEmpresa.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${usuarioEmpresa.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.usuarioEmpresaService.disable(usuarioEmpresa.id).subscribe((res: any) => {
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
  get f() { return this.frmUsuarioEmpresa.controls; }

}
