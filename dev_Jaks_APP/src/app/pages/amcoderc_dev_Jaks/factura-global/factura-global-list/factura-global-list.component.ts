import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { FacturaGlobalModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global.model';
import { FacturaGlobalService } from 'src/app/services/amcoderc_dev_Jaks/factura-global.service';




@Component({
  selector: 'app-factura-global-list',
  templateUrl: './factura-global-list.component.html',
  styleUrls: ['./factura-global-list.component.scss']
})

export class FacturaGlobalListComponent implements OnInit {

  // load FacturaGlobals
  facturaGlobals: any[] = [];
  facturaGlobal: FacturaGlobalModel;

  // Filter
  frmFilter: FormGroup;
  facturaGlobalFilter = new FacturaGlobalModel();
  showFiller = false;


  // Loading
  showLoading = false;

  // Pagination table
  first = 0;
  rows = 10;


  constructor(
    private facturaGlobalService: FacturaGlobalService,
    private cd: ChangeDetectorRef,
    
    private formBuilder: FormBuilder) {
    this.createForm();

    
  }


  ngOnInit(): void {
    
    this.load();
  }


  // Create Reactive Form
  createForm(): void {
    this.frmFilter = this.formBuilder.group({
      id: new FormControl(null),
      descripcion: new FormControl(null),
      currency: new FormControl(null),
      paymentConditions: new FormControl(null),
      orderNumber: new FormControl(null),
      folio: new FormControl(null),
      cfdiType: new FormControl(null),
      paymentForm: new FormControl(null),
      paymentMethod: new FormControl(null),
      receiver__Rfc: new FormControl(null),
      receiver__Name: new FormControl(null),
      receiver__CfdiUse: new FormControl(null),
      expeditionPlaceSandbox: new FormControl(null),
      xmlInternalId: new FormControl(null),
      pdfInternalId: new FormControl(null),
      nombreArchivoSandbox: new FormControl(null),
      nombreArchivo: new FormControl(null),

    });
  }


    // Load data
  load(): void {
    this.showLoading = true;

    this.facturaGlobals = [];

    this.facturaGlobalService.getAll(this.facturaGlobalFilter).subscribe(
      (res: any) => {
        this.facturaGlobals = res.data;
      },
      (err) => { 
        //console.log(err);
        Swal.fire('Error', 'Unexpected error', 'error');
      },
      () => {
        this.showLoading = false;
      }
    );
  }


  // Filter sidebar
  openFilter(status: boolean): void {
    this.showFiller = status;
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
              this.load();
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
              this.load();
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


  delete(facturaGlobal: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
        <strong>Record # ${facturaGlobal.id}</strong>`,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalService.delete(facturaGlobal.id).subscribe((res: any) => {
            // console.log(res);
            if (res.data[0].errorId !== 0) {
              Swal.fire('Error', res.data[0].message, 'error');
              return;
            }

            Swal.fire('Delete', 'Record deleted', 'success').then(() => {
              this.load();
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


  // Searh register
  searchList(): void {
    this.facturaGlobalFilter = this.frmFilter.value;
    this.load();
  }

  // Reset filters
  resetForm(): void {
    // reset model
    this.facturaGlobalFilter = new FacturaGlobalModel();
    this.frmFilter.reset();
    this.load();
  }




}






