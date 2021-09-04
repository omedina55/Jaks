import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FacturaGlobalModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global.model';

import { FacturaGlobalService } from 'src/app/services/amcoderc_dev_Jaks/factura-global.service';

@Component({
  selector: 'app-factura-global-form',
  templateUrl: './factura-global-form.component.html',
  styleUrls: ['./factura-global-form.component.scss'],
})

export class FacturaGlobalFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmFacturaGlobal: FormGroup;

  // validation form
  validation = false;
  
  // FacturaGlobal Model
  facturaGlobal = new FacturaGlobalModel();
  id = 0;
  facturaGlobalActive = true;

  // Filter
  facturaGlobalFilter = new FacturaGlobalModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private facturaGlobalService: FacturaGlobalService
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
    this.frmFacturaGlobal = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.maxLength(50)]),
      empresaId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      periodoId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fechaInicio: new FormControl(null),
      fechaFin: new FormControl(null),
      completadaSandbox: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      completada: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      currency: new FormControl(null, [Validators.maxLength(50)]),
      expeditionPlace: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      paymentConditions: new FormControl(null, [Validators.maxLength(50)]),
      orderNumber: new FormControl(null, [Validators.maxLength(50)]),
      folio: new FormControl(null, [Validators.maxLength(50)]),
      cfdiType: new FormControl(null, [Validators.maxLength(50)]),
      paymentForm: new FormControl(null, [Validators.maxLength(50)]),
      paymentMethod: new FormControl(null, [Validators.maxLength(50)]),
      receiver__Rfc: new FormControl(null, [Validators.maxLength(50)]),
      receiver__Name: new FormControl(null, [Validators.maxLength(50)]),
      receiver__CfdiUse: new FormControl(null, [Validators.maxLength(50)]),
      cancelada: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-128), Validators.max(127)]),
      intento: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      usuarioCreacionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      expeditionPlaceSandbox: new FormControl(null, [Validators.maxLength(50)]),
      xmlInternalId: new FormControl(null, [Validators.maxLength(50)]),
      pdfInternalId: new FormControl(null, [Validators.maxLength(50)]),
      nombreArchivoSandbox: new FormControl(null, [Validators.maxLength(200)]),
      nombreArchivo: new FormControl(null, [Validators.maxLength(200)]),
      usuarioAprobadorId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });
  }


  // Set data
  initForm(): void {
    this.facturaGlobalService.get(this.id).subscribe((res: any) => {
      this.facturaGlobal = res.data[0];

      this.frmFacturaGlobal.get('descripcion').setValue(this.facturaGlobal.descripcion);
      this.frmFacturaGlobal.get('empresaId').setValue(this.facturaGlobal.empresaId);
      this.frmFacturaGlobal.get('periodoId').setValue(this.facturaGlobal.periodoId);
      this.frmFacturaGlobal.get('fechaInicio').setValue(this.facturaGlobal.fechaInicio);
      this.frmFacturaGlobal.get('fechaFin').setValue(this.facturaGlobal.fechaFin);
      this.frmFacturaGlobal.get('completadaSandbox').setValue(this.facturaGlobal.completadaSandbox);
      this.frmFacturaGlobal.get('completada').setValue(this.facturaGlobal.completada);
      this.frmFacturaGlobal.get('currency').setValue(this.facturaGlobal.currency);
      this.frmFacturaGlobal.get('expeditionPlace').setValue(this.facturaGlobal.expeditionPlace);
      this.frmFacturaGlobal.get('paymentConditions').setValue(this.facturaGlobal.paymentConditions);
      this.frmFacturaGlobal.get('orderNumber').setValue(this.facturaGlobal.orderNumber);
      this.frmFacturaGlobal.get('folio').setValue(this.facturaGlobal.folio);
      this.frmFacturaGlobal.get('cfdiType').setValue(this.facturaGlobal.cfdiType);
      this.frmFacturaGlobal.get('paymentForm').setValue(this.facturaGlobal.paymentForm);
      this.frmFacturaGlobal.get('paymentMethod').setValue(this.facturaGlobal.paymentMethod);
      this.frmFacturaGlobal.get('receiver__Rfc').setValue(this.facturaGlobal.receiver__Rfc);
      this.frmFacturaGlobal.get('receiver__Name').setValue(this.facturaGlobal.receiver__Name);
      this.frmFacturaGlobal.get('receiver__CfdiUse').setValue(this.facturaGlobal.receiver__CfdiUse);
      this.frmFacturaGlobal.get('cancelada').setValue(this.facturaGlobal.cancelada);
      this.frmFacturaGlobal.get('intento').setValue(this.facturaGlobal.intento);
      this.frmFacturaGlobal.get('usuarioCreacionId').setValue(this.facturaGlobal.usuarioCreacionId);
      this.frmFacturaGlobal.get('expeditionPlaceSandbox').setValue(this.facturaGlobal.expeditionPlaceSandbox);
      this.frmFacturaGlobal.get('xmlInternalId').setValue(this.facturaGlobal.xmlInternalId);
      this.frmFacturaGlobal.get('pdfInternalId').setValue(this.facturaGlobal.pdfInternalId);
      this.frmFacturaGlobal.get('nombreArchivoSandbox').setValue(this.facturaGlobal.nombreArchivoSandbox);
      this.frmFacturaGlobal.get('nombreArchivo').setValue(this.facturaGlobal.nombreArchivo);
      this.frmFacturaGlobal.get('usuarioAprobadorId').setValue(this.facturaGlobal.usuarioAprobadorId);



      // Enable disable form
      
      if (this.facturaGlobalActive) {
        this.frmFacturaGlobal.enable();
      }
      else {
        this.frmFacturaGlobal.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmFacturaGlobal.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let facturaGlobal: FacturaGlobalModel =  new FacturaGlobalModel();
    facturaGlobal = this.frmFacturaGlobal.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      facturaGlobal.id = this.id;
      this.facturaGlobalService.update(facturaGlobal).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobal']);
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
      this.facturaGlobalService.create(facturaGlobal).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/facturaGlobal']);
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


  changeStatus(status: boolean, facturaGlobal: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${facturaGlobal.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalService.enable(facturaGlobal.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${facturaGlobal.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalService.disable(facturaGlobal.id).subscribe((res: any) => {
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
  get f() { return this.frmFacturaGlobal.controls; }

}
