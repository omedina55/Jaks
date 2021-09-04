import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FacturaGlobalDetalleTaxesModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-detalle-taxes.model';

import { FacturaGlobalDetalleTaxesService } from 'src/app/services/amcoderc_dev_Jaks/factura-global-detalle-taxes.service';

@Component({
  selector: 'app-factura-global-detalle-taxes-form',
  templateUrl: './factura-global-detalle-taxes-form.component.html',
  styleUrls: ['./factura-global-detalle-taxes-form.component.scss'],
})

export class FacturaGlobalDetalleTaxesFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmFacturaGlobalDetalleTaxes: FormGroup;

  // validation form
  validation = false;
  
  // FacturaGlobalDetalleTaxes Model
  facturaGlobalDetalleTaxes = new FacturaGlobalDetalleTaxesModel();
  id = 0;
  facturaGlobalDetalleTaxesActive = true;

  // Filter
  facturaGlobalDetalleTaxesFilter = new FacturaGlobalDetalleTaxesModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private facturaGlobalDetalleTaxesService: FacturaGlobalDetalleTaxesService
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
    this.frmFacturaGlobalDetalleTaxes = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.maxLength(50)]),
      facturaGlobalDetalleId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      name: new FormControl(null, [Validators.maxLength(50)]),
      base: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      rate: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      isRetention: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      total: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),

    });
  }


  // Set data
  initForm(): void {
    this.facturaGlobalDetalleTaxesService.get(this.id).subscribe((res: any) => {
      this.facturaGlobalDetalleTaxes = res.data[0];

      this.frmFacturaGlobalDetalleTaxes.get('descripcion').setValue(this.facturaGlobalDetalleTaxes.descripcion);
      this.frmFacturaGlobalDetalleTaxes.get('facturaGlobalDetalleId').setValue(this.facturaGlobalDetalleTaxes.facturaGlobalDetalleId);
      this.frmFacturaGlobalDetalleTaxes.get('name').setValue(this.facturaGlobalDetalleTaxes.name);
      this.frmFacturaGlobalDetalleTaxes.get('base').setValue(this.facturaGlobalDetalleTaxes.base);
      this.frmFacturaGlobalDetalleTaxes.get('rate').setValue(this.facturaGlobalDetalleTaxes.rate);
      this.frmFacturaGlobalDetalleTaxes.get('isRetention').setValue(this.facturaGlobalDetalleTaxes.isRetention);
      this.frmFacturaGlobalDetalleTaxes.get('total').setValue(this.facturaGlobalDetalleTaxes.total);



      // Enable disable form
      
      if (this.facturaGlobalDetalleTaxesActive) {
        this.frmFacturaGlobalDetalleTaxes.enable();
      }
      else {
        this.frmFacturaGlobalDetalleTaxes.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmFacturaGlobalDetalleTaxes.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let facturaGlobalDetalleTaxes: FacturaGlobalDetalleTaxesModel =  new FacturaGlobalDetalleTaxesModel();
    facturaGlobalDetalleTaxes = this.frmFacturaGlobalDetalleTaxes.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      facturaGlobalDetalleTaxes.id = this.id;
      this.facturaGlobalDetalleTaxesService.update(facturaGlobalDetalleTaxes).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobalDetalleTaxes']);
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
      this.facturaGlobalDetalleTaxesService.create(facturaGlobalDetalleTaxes).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobalDetalleTaxes']);
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


  changeStatus(status: boolean, facturaGlobalDetalleTaxes: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${facturaGlobalDetalleTaxes.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalDetalleTaxesService.enable(facturaGlobalDetalleTaxes.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${facturaGlobalDetalleTaxes.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalDetalleTaxesService.disable(facturaGlobalDetalleTaxes.id).subscribe((res: any) => {
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
  get f() { return this.frmFacturaGlobalDetalleTaxes.controls; }

}
