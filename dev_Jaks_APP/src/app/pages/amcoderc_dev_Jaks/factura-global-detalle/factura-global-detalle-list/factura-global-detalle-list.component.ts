import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { FacturaGlobalDetalleModel } from 'src/app/models/amcoderc_dev_Jaks/factura-global-detalle.model';
import { FacturaGlobalDetalleService } from 'src/app/services/amcoderc_dev_Jaks/factura-global-detalle.service';




@Component({
  selector: 'app-factura-global-detalle-list',
  templateUrl: './factura-global-detalle-list.component.html',
  styleUrls: ['./factura-global-detalle-list.component.scss']
})

export class FacturaGlobalDetalleListComponent implements OnInit {

  // load FacturaGlobalDetalles
  facturaGlobalDetalles: any[] = [];
  facturaGlobalDetalle: FacturaGlobalDetalleModel;

  // Filter
  frmFilter: FormGroup;
  facturaGlobalDetalleFilter = new FacturaGlobalDetalleModel();
  showFiller = false;


  // Loading
  showLoading = false;

  // Pagination table
  first = 0;
  rows = 10;


  constructor(
    private facturaGlobalDetalleService: FacturaGlobalDetalleService,
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
      productCode: new FormControl(null),
      identificationNumber: new FormControl(null),
      description: new FormControl(null),
      unitCode: new FormControl(null),
      unit: new FormControl(null),

    });
  }


    // Load data
  load(): void {
    this.showLoading = true;

    this.facturaGlobalDetalles = [];

    this.facturaGlobalDetalleService.getAll(this.facturaGlobalDetalleFilter).subscribe(
      (res: any) => {
        this.facturaGlobalDetalles = res.data;
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


  delete(facturaGlobalDetalle: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
        <strong>Record # ${facturaGlobalDetalle.id}</strong>`,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.facturaGlobalDetalleService.delete(facturaGlobalDetalle.id).subscribe((res: any) => {
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
    this.facturaGlobalDetalleFilter = this.frmFilter.value;
    this.load();
  }

  // Reset filters
  resetForm(): void {
    // reset model
    this.facturaGlobalDetalleFilter = new FacturaGlobalDetalleModel();
    this.frmFilter.reset();
    this.load();
  }




}






