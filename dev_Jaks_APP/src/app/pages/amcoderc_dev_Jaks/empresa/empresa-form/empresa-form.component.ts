import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { EmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/empresa.model';

import { EmpresaService } from 'src/app/services/amcoderc_dev_Jaks/empresa.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss'],
})

export class EmpresaFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmEmpresa: FormGroup;

  // validation form
  validation = false;
  
  // Empresa Model
  empresa = new EmpresaModel();
  id = 0;
  empresaActive = true;

  // Filter
  empresaFilter = new EmpresaModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private empresaService: EmpresaService
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
    this.frmEmpresa = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.maxLength(200)]),
      rFC: new FormControl(null, [Validators.maxLength(20)]),
      razonSocial: new FormControl(null, [Validators.maxLength(200)]),
      constrasenaVUCEM: new FormControl(null, [Validators.maxLength(200)]),
      tokenWEBVUCEM: new FormControl(null, [Validators.maxLength(200)]),
      vigencia: new FormControl(null),
      correo: new FormControl(null, [Validators.maxLength(100)]),
      usuarioCreacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaCreacion: new FormControl(null),
      usuarioModificacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaModificacion: new FormControl(null),
      usuarioBajaId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaBaja: new FormControl(null),
      baja: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      expeditionPlace: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      expeditionPlaceSandbox: new FormControl(null, [Validators.maxLength(50)]),

    });
  }


  // Set data
  initForm(): void {
    this.empresaService.get(this.id).subscribe((res: any) => {
      this.empresa = res.data[0];

      this.frmEmpresa.get('descripcion').setValue(this.empresa.descripcion);
      this.frmEmpresa.get('rFC').setValue(this.empresa.rFC);
      this.frmEmpresa.get('razonSocial').setValue(this.empresa.razonSocial);
      this.frmEmpresa.get('constrasenaVUCEM').setValue(this.empresa.constrasenaVUCEM);
      this.frmEmpresa.get('tokenWEBVUCEM').setValue(this.empresa.tokenWEBVUCEM);
      this.frmEmpresa.get('vigencia').setValue(this.empresa.vigencia);
      this.frmEmpresa.get('correo').setValue(this.empresa.correo);
      this.frmEmpresa.get('usuarioCreacionId').setValue(this.empresa.usuarioCreacionId);
      this.frmEmpresa.get('fechaCreacion').setValue(this.empresa.fechaCreacion);
      this.frmEmpresa.get('usuarioModificacionId').setValue(this.empresa.usuarioModificacionId);
      this.frmEmpresa.get('fechaModificacion').setValue(this.empresa.fechaModificacion);
      this.frmEmpresa.get('usuarioBajaId').setValue(this.empresa.usuarioBajaId);
      this.frmEmpresa.get('fechaBaja').setValue(this.empresa.fechaBaja);
      this.frmEmpresa.get('baja').setValue(this.empresa.baja);
      this.frmEmpresa.get('expeditionPlace').setValue(this.empresa.expeditionPlace);
      this.frmEmpresa.get('expeditionPlaceSandbox').setValue(this.empresa.expeditionPlaceSandbox);



      // Enable disable form
      
      if (this.empresaActive) {
        this.frmEmpresa.enable();
      }
      else {
        this.frmEmpresa.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmEmpresa.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let empresa: EmpresaModel =  new EmpresaModel();
    empresa = this.frmEmpresa.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      empresa.id = this.id;
      this.empresaService.update(empresa).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/empresa']);
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
      this.empresaService.create(empresa).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/empresa']);
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


  changeStatus(status: boolean, empresa: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${empresa.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.empresaService.enable(empresa.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${empresa.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.empresaService.disable(empresa.id).subscribe((res: any) => {
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
  get f() { return this.frmEmpresa.controls; }

}
