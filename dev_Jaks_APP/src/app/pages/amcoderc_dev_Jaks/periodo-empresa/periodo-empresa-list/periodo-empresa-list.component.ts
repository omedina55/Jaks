import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { PeriodoEmpresaModel } from 'src/app/models/amcoderc_dev_Jaks/periodo-empresa.model';
import { PeriodoEmpresaService } from 'src/app/services/amcoderc_dev_Jaks/periodo-empresa.service';




@Component({
  selector: 'app-periodo-empresa-list',
  templateUrl: './periodo-empresa-list.component.html',
  styleUrls: ['./periodo-empresa-list.component.scss']
})

export class PeriodoEmpresaListComponent implements OnInit {

  // load PeriodoEmpresas
  periodoEmpresas: any[] = [];
  periodoEmpresa: PeriodoEmpresaModel;

  // Filter
  frmFilter: FormGroup;
  periodoEmpresaFilter = new PeriodoEmpresaModel();
  showFiller = false;


  // Loading
  showLoading = false;

  // Pagination table
  first = 0;
  rows = 10;


  constructor(
    private periodoEmpresaService: PeriodoEmpresaService,
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

    });
  }


    // Load data
  load(): void {
    this.showLoading = true;

    this.periodoEmpresas = [];

    this.periodoEmpresaService.getAll(this.periodoEmpresaFilter).subscribe(
      (res: any) => {
        this.periodoEmpresas = res.data;
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


  delete(periodoEmpresa: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
        <strong>Record # ${periodoEmpresa.id}</strong>`,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.periodoEmpresaService.delete(periodoEmpresa.id).subscribe((res: any) => {
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
    this.periodoEmpresaFilter = this.frmFilter.value;
    this.load();
  }

  // Reset filters
  resetForm(): void {
    // reset model
    this.periodoEmpresaFilter = new PeriodoEmpresaModel();
    this.frmFilter.reset();
    this.load();
  }




}






