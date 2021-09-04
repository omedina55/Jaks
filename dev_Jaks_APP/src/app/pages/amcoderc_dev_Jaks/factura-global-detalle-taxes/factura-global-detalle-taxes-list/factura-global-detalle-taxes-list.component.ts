import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { FacturaGlobalDetalleTaxesModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-detalle-taxes.model';
import { FacturaGlobalDetalleTaxesService } from 'src/app/services/amcoderc_dev_Jaks/factura-global-detalle-taxes.service';




@Component({
  selector: 'app-factura-global-detalle-taxes-list',
  templateUrl: './factura-global-detalle-taxes-list.component.html',
  styleUrls: ['./factura-global-detalle-taxes-list.component.scss']
})

export class FacturaGlobalDetalleTaxesListComponent implements OnInit {

  // load FacturaGlobalDetalleTaxess
  facturaGlobalDetalleTaxess: any[] = [];
  facturaGlobalDetalleTaxes: FacturaGlobalDetalleTaxesModel;

  // Filter
  frmFilter: FormGroup;
  facturaGlobalDetalleTaxesFilter = new FacturaGlobalDetalleTaxesModel();
  showFiller = false;


  // Loading
  showLoading = false;

  // Pagination table
  first = 0;
  rows = 10;


  constructor(
    private facturaGlobalDetalleTaxesService: FacturaGlobalDetalleTaxesService,
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
      name: new FormControl(null),

    });
  }


    // Load data
  load(): void {
    this.showLoading = true;

    this.facturaGlobalDetalleTaxess = [];

    this.facturaGlobalDetalleTaxesService.getAll(this.facturaGlobalDetalleTaxesFilter).subscribe(
      (res: any) => {
        this.facturaGlobalDetalleTaxess = res.data;
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


  delete(facturaGlobalDetalleTaxes: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
        <strong>Record # ${facturaGlobalDetalleTaxes.id}</strong>`,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalDetalleTaxesService.delete(facturaGlobalDetalleTaxes.id).subscribe((res: any) => {
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
    this.facturaGlobalDetalleTaxesFilter = this.frmFilter.value;
    this.load();
  }

  // Reset filters
  resetForm(): void {
    // reset model
    this.facturaGlobalDetalleTaxesFilter = new FacturaGlobalDetalleTaxesModel();
    this.frmFilter.reset();
    this.load();
  }




}






