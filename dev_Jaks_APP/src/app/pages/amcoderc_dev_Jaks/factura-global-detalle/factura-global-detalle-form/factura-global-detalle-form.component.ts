import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FacturaGlobalDetalleModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-detalle.model';

import { FacturaGlobalDetalleService } from 'src/app/services/amcoderc_dev_Jaks/factura-global-detalle.service';

@Component({
  selector: 'app-factura-global-detalle-form',
  templateUrl: './factura-global-detalle-form.component.html',
  styleUrls: ['./factura-global-detalle-form.component.scss'],
})

export class FacturaGlobalDetalleFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmFacturaGlobalDetalle: FormGroup;

  // validation form
  validation = false;
  
  // FacturaGlobalDetalle Model
  facturaGlobalDetalle = new FacturaGlobalDetalleModel();
  id = 0;
  facturaGlobalDetalleActive = true;

  // Filter
  facturaGlobalDetalleFilter = new FacturaGlobalDetalleModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private facturaGlobalDetalleService: FacturaGlobalDetalleService
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
    this.frmFacturaGlobalDetalle = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.maxLength(500)]),
      facturaGlobalId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      productCode: new FormControl(null, [Validators.maxLength(50)]),
      identificationNumber: new FormControl(null, [Validators.maxLength(50)]),
      description: new FormControl(null, [Validators.maxLength(50)]),
      unitCode: new FormControl(null, [Validators.maxLength(50)]),
      unitPrice: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      unit: new FormControl(null, [Validators.maxLength(500)]),
      quantity: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      subtotal: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      total: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      discount: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      discountVal: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),

    });
  }


  // Set data
  initForm(): void {
    this.facturaGlobalDetalleService.get(this.id).subscribe((res: any) => {
      this.facturaGlobalDetalle = res.data[0];

      this.frmFacturaGlobalDetalle.get('descripcion').setValue(this.facturaGlobalDetalle.descripcion);
      this.frmFacturaGlobalDetalle.get('facturaGlobalId').setValue(this.facturaGlobalDetalle.facturaGlobalId);
      this.frmFacturaGlobalDetalle.get('productCode').setValue(this.facturaGlobalDetalle.productCode);
      this.frmFacturaGlobalDetalle.get('identificationNumber').setValue(this.facturaGlobalDetalle.identificationNumber);
      this.frmFacturaGlobalDetalle.get('description').setValue(this.facturaGlobalDetalle.description);
      this.frmFacturaGlobalDetalle.get('unitCode').setValue(this.facturaGlobalDetalle.unitCode);
      this.frmFacturaGlobalDetalle.get('unitPrice').setValue(this.facturaGlobalDetalle.unitPrice);
      this.frmFacturaGlobalDetalle.get('unit').setValue(this.facturaGlobalDetalle.unit);
      this.frmFacturaGlobalDetalle.get('quantity').setValue(this.facturaGlobalDetalle.quantity);
      this.frmFacturaGlobalDetalle.get('subtotal').setValue(this.facturaGlobalDetalle.subtotal);
      this.frmFacturaGlobalDetalle.get('total').setValue(this.facturaGlobalDetalle.total);
      this.frmFacturaGlobalDetalle.get('discount').setValue(this.facturaGlobalDetalle.discount);
      this.frmFacturaGlobalDetalle.get('discountVal').setValue(this.facturaGlobalDetalle.discountVal);



      // Enable disable form
      
      if (this.facturaGlobalDetalleActive) {
        this.frmFacturaGlobalDetalle.enable();
      }
      else {
        this.frmFacturaGlobalDetalle.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmFacturaGlobalDetalle.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let facturaGlobalDetalle: FacturaGlobalDetalleModel =  new FacturaGlobalDetalleModel();
    facturaGlobalDetalle = this.frmFacturaGlobalDetalle.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      facturaGlobalDetalle.id = this.id;
      this.facturaGlobalDetalleService.update(facturaGlobalDetalle).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobalDetalle']);
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
      this.facturaGlobalDetalleService.create(facturaGlobalDetalle).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobalDetalle']);
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


  changeStatus(status: boolean, facturaGlobalDetalle: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${facturaGlobalDetalle.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalDetalleService.enable(facturaGlobalDetalle.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${facturaGlobalDetalle.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalDetalleService.disable(facturaGlobalDetalle.id).subscribe((res: any) => {
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
  get f() { return this.frmFacturaGlobalDetalle.controls; }

}
