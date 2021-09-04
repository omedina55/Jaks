import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { NsConsultaModel } from 'src/app/models/amcoderc_dev_Jaks/ns-consulta.model';

import { NsConsultaService } from 'src/app/services/amcoderc_dev_Jaks/ns-consulta.service';

@Component({
  selector: 'app-ns-consulta-form',
  templateUrl: './ns-consulta-form.component.html',
  styleUrls: ['./ns-consulta-form.component.scss'],
})

export class NsConsultaFormComponent implements OnInit {
  // Add Or Edit
  editAction = false;

  // Form Group
  frmNsConsulta: FormGroup;

  // validation form
  validation = false;
  
  // NsConsulta Model
  nsConsulta = new NsConsultaModel();
  id = 0;
  nsConsultaActive = true;

  // Filter
  nsConsultaFilter = new NsConsultaModel();

  // Loading
  showLoading = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,

    private nsConsultaService: NsConsultaService
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
    this.frmNsConsulta = this.formBuilder.group({
      facturaGlobalId: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      tranDate: new FormControl(null),
      tranId: new FormControl(null, [Validators.maxLength(50)]),
      entityId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      cfdiTimbrada: new FormControl(null, [Validators.maxLength(50)]),
      transactionType: new FormControl(null, [Validators.maxLength(50)]),
      ticketCaja: new FormControl(null, [Validators.maxLength(50)]),
      relatedTranId: new FormControl(null, [Validators.maxLength(50)]),
      name: new FormControl(null, [Validators.maxLength(500)]),
      transactionId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      status: new FormControl(null, [Validators.maxLength(100)]),
      transactionOrder: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      amountForeign: new FormControl(null, [Validators.pattern('^[0-9]+(\.[0-9]{1,4})?$')]),
      subtotalFormato: new FormControl(null, [Validators.maxLength(200)]),
      accounId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      accountNumber: new FormControl(null, [Validators.maxLength(50)]),
      typeName: new FormControl(null, [Validators.maxLength(500)]),
      amountTaxable: new FormControl(null, [Validators.maxLength(500)]),
      taxItemId: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      itemTypeName: new FormControl(null, [Validators.maxLength(500)]),
      rate: new FormControl(null, [Validators.maxLength(50)]),
      entityName: new FormControl(null, [Validators.maxLength(500)]),
      entityFullName: new FormControl(null, [Validators.maxLength(500)]),
      descuentoPorAplicar: new FormControl(null, [Validators.maxLength(500)]),
      otherRefNum: new FormControl(null, [Validators.maxLength(50)]),

    });
  }


  // Set data
  initForm(): void {
    this.nsConsultaService.get(this.id).subscribe((res: any) => {
      this.nsConsulta = res.data[0];

      this.frmNsConsulta.get('facturaGlobalId').setValue(this.nsConsulta.facturaGlobalId);
      this.frmNsConsulta.get('tranDate').setValue(this.nsConsulta.tranDate);
      this.frmNsConsulta.get('tranId').setValue(this.nsConsulta.tranId);
      this.frmNsConsulta.get('entityId').setValue(this.nsConsulta.entityId);
      this.frmNsConsulta.get('cfdiTimbrada').setValue(this.nsConsulta.cfdiTimbrada);
      this.frmNsConsulta.get('transactionType').setValue(this.nsConsulta.transactionType);
      this.frmNsConsulta.get('ticketCaja').setValue(this.nsConsulta.ticketCaja);
      this.frmNsConsulta.get('relatedTranId').setValue(this.nsConsulta.relatedTranId);
      this.frmNsConsulta.get('name').setValue(this.nsConsulta.name);
      this.frmNsConsulta.get('transactionId').setValue(this.nsConsulta.transactionId);
      this.frmNsConsulta.get('status').setValue(this.nsConsulta.status);
      this.frmNsConsulta.get('transactionOrder').setValue(this.nsConsulta.transactionOrder);
      this.frmNsConsulta.get('amountForeign').setValue(this.nsConsulta.amountForeign);
      this.frmNsConsulta.get('subtotalFormato').setValue(this.nsConsulta.subtotalFormato);
      this.frmNsConsulta.get('accounId').setValue(this.nsConsulta.accounId);
      this.frmNsConsulta.get('accountNumber').setValue(this.nsConsulta.accountNumber);
      this.frmNsConsulta.get('typeName').setValue(this.nsConsulta.typeName);
      this.frmNsConsulta.get('amountTaxable').setValue(this.nsConsulta.amountTaxable);
      this.frmNsConsulta.get('taxItemId').setValue(this.nsConsulta.taxItemId);
      this.frmNsConsulta.get('itemTypeName').setValue(this.nsConsulta.itemTypeName);
      this.frmNsConsulta.get('rate').setValue(this.nsConsulta.rate);
      this.frmNsConsulta.get('entityName').setValue(this.nsConsulta.entityName);
      this.frmNsConsulta.get('entityFullName').setValue(this.nsConsulta.entityFullName);
      this.frmNsConsulta.get('descuentoPorAplicar').setValue(this.nsConsulta.descuentoPorAplicar);
      this.frmNsConsulta.get('otherRefNum').setValue(this.nsConsulta.otherRefNum);



      // Enable disable form
      
      if (this.nsConsultaActive) {
        this.frmNsConsulta.enable();
      }
      else {
        this.frmNsConsulta.disable();
      }

    });
  }


  saveForm() {
    if (!this.frmNsConsulta.valid) {
      // Set true validation
      this.validation = true;
    
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let nsConsulta: NsConsultaModel =  new NsConsultaModel();
    nsConsulta = this.frmNsConsulta.value;
    //{{SaveGetActiveValue}}
    if (this.editAction) {
      nsConsulta.id = this.id;
      this.nsConsultaService.update(nsConsulta).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/nsConsulta']);
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
      this.nsConsultaService.create(nsConsulta).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/amcoderc_dev_Jaks/nsConsulta']);
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


  changeStatus(status: boolean, nsConsulta: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to enable this record?</h4>  <br>
        <strong>Record # ${nsConsulta.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.nsConsultaService.enable(nsConsulta.id).subscribe((res: any) => {
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
        <br> <strong>Record # ${nsConsulta.id}</strong>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.nsConsultaService.disable(nsConsulta.id).subscribe((res: any) => {
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
  get f() { return this.frmNsConsulta.controls; }

}
