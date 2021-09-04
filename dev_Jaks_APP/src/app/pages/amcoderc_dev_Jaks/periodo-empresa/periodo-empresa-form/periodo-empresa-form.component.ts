import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { PeriodoEmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/periodo-empresa.model';

import { PeriodoEmpresaService } from 'src/app/services/amcoderc_dev_Jaks/periodo-empresa.service';

@Component({
  selector: 'app-periodo-empresa-form',
  templateUrl: './periodo-empresa-form.component.html',
  styleUrls: ['./periodo-empresa-form.component.scss'],
})

export class PeriodoEmpresaFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmPeriodoEmpresa: FormGroup;

  // validation form
  validation = false;
  
  // PeriodoEmpresa Model
  periodoEmpresa = new PeriodoEmpresaModel();
  id = 0;
  periodoEmpresaActive = true;

  // Filter
  periodoEmpresaFilter = new PeriodoEmpresaModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private periodoEmpresaService: PeriodoEmpresaService
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
    this.frmPeriodoEmpresa = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      generada: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      periodo: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      mes: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaInicio: new FormControl(null, [Validators.required]),
      fechaFin: new FormControl(null, [Validators.required]),
      empresaId: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });
  }


  // Set data
  initForm(): void {
    this.periodoEmpresaService.get(this.id).subscribe((res: any) => {
      this.periodoEmpresa = res.data[0];

      this.frmPeriodoEmpresa.get('descripcion').setValue(this.periodoEmpresa.descripcion);
      this.frmPeriodoEmpresa.get('generada').setValue(this.periodoEmpresa.generada);
      this.frmPeriodoEmpresa.get('periodo').setValue(this.periodoEmpresa.periodo);
      this.frmPeriodoEmpresa.get('mes').setValue(this.periodoEmpresa.mes);
      this.frmPeriodoEmpresa.get('fechaInicio').setValue(this.periodoEmpresa.fechaInicio);
      this.frmPeriodoEmpresa.get('fechaFin').setValue(this.periodoEmpresa.fechaFin);
      this.frmPeriodoEmpresa.get('empresaId').setValue(this.periodoEmpresa.empresaId);



      // Enable disable form
      
      if (this.periodoEmpresaActive) {
        this.frmPeriodoEmpresa.enable();
      }
      else {
        this.frmPeriodoEmpresa.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmPeriodoEmpresa.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let periodoEmpresa: PeriodoEmpresaModel =  new PeriodoEmpresaModel();
    periodoEmpresa = this.frmPeriodoEmpresa.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      periodoEmpresa.id = this.id;
      this.periodoEmpresaService.update(periodoEmpresa).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/periodoEmpresa']);
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
      this.periodoEmpresaService.create(periodoEmpresa).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/periodoEmpresa']);
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


  changeStatus(status: boolean, periodoEmpresa: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${periodoEmpresa.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.periodoEmpresaService.enable(periodoEmpresa.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${periodoEmpresa.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.periodoEmpresaService.disable(periodoEmpresa.id).subscribe((res: any) => {
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
  get f() { return this.frmPeriodoEmpresa.controls; }

}
