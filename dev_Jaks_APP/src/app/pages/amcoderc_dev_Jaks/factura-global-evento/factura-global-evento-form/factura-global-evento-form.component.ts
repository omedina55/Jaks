import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FacturaGlobalEventoModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-evento.model';

import { FacturaGlobalEventoService } from 'src/app/services/amcoderc_dev_Jaks/factura-global-evento.service';

@Component({
  selector: 'app-factura-global-evento-form',
  templateUrl: './factura-global-evento-form.component.html',
  styleUrls: ['./factura-global-evento-form.component.scss'],
})

export class FacturaGlobalEventoFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmFacturaGlobalEvento: FormGroup;

  // validation form
  validation = false;
  
  // FacturaGlobalEvento Model
  facturaGlobalEvento = new FacturaGlobalEventoModel();
  id = 0;
  facturaGlobalEventoActive = true;

  // Filter
  facturaGlobalEventoFilter = new FacturaGlobalEventoModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private facturaGlobalEventoService: FacturaGlobalEventoService
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
    this.frmFacturaGlobalEvento = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.maxLength(5000)]),
      facturaGlobalId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      eventoTipoId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      usuarioId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fecha: new FormControl(null),

    });
  }


  // Set data
  initForm(): void {
    this.facturaGlobalEventoService.get(this.id).subscribe((res: any) => {
      this.facturaGlobalEvento = res.data[0];

      this.frmFacturaGlobalEvento.get('descripcion').setValue(this.facturaGlobalEvento.descripcion);
      this.frmFacturaGlobalEvento.get('facturaGlobalId').setValue(this.facturaGlobalEvento.facturaGlobalId);
      this.frmFacturaGlobalEvento.get('eventoTipoId').setValue(this.facturaGlobalEvento.eventoTipoId);
      this.frmFacturaGlobalEvento.get('usuarioId').setValue(this.facturaGlobalEvento.usuarioId);
      this.frmFacturaGlobalEvento.get('fecha').setValue(this.facturaGlobalEvento.fecha);



      // Enable disable form
      
      if (this.facturaGlobalEventoActive) {
        this.frmFacturaGlobalEvento.enable();
      }
      else {
        this.frmFacturaGlobalEvento.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmFacturaGlobalEvento.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let facturaGlobalEvento: FacturaGlobalEventoModel =  new FacturaGlobalEventoModel();
    facturaGlobalEvento = this.frmFacturaGlobalEvento.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      facturaGlobalEvento.id = this.id;
      this.facturaGlobalEventoService.update(facturaGlobalEvento).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobalEvento']);
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
      this.facturaGlobalEventoService.create(facturaGlobalEvento).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobalEvento']);
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


  changeStatus(status: boolean, facturaGlobalEvento: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${facturaGlobalEvento.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalEventoService.enable(facturaGlobalEvento.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${facturaGlobalEvento.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalEventoService.disable(facturaGlobalEvento.id).subscribe((res: any) => {
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
  get f() { return this.frmFacturaGlobalEvento.controls; }

}
