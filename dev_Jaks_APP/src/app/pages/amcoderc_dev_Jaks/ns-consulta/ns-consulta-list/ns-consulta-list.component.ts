import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { NsConsultaModel } from 'src/app/models/amcoderc_dev_Jaks/ns-consulta.model';
import { NsConsultaService } from 'src/app/services/amcoderc_dev_Jaks/ns-consulta.service';




@Component({
  selector: 'app-ns-consulta-list',
  templateUrl: './ns-consulta-list.component.html',
  styleUrls: ['./ns-consulta-list.component.scss']
})

export class NsConsultaListComponent implements OnInit {

  // load NsConsultas
  nsConsultas: any[] = [];
  nsConsulta: NsConsultaModel;

  // Filter
  frmFilter: FormGroup;
  nsConsultaFilter = new NsConsultaModel();
  showFiller = false;


  // Loading
  showLoading = false;

  // Pagination table
  first = 0;
  rows = 10;


  constructor(
    private nsConsultaService: NsConsultaService,
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
      tranId: new FormControl(null),
      cfdiTimbrada: new FormControl(null),
      transactionType: new FormControl(null),
      ticketCaja: new FormControl(null),
      relatedTranId: new FormControl(null),
      name: new FormControl(null),
      status: new FormControl(null),
      subtotalFormato: new FormControl(null),
      accountNumber: new FormControl(null),
      typeName: new FormControl(null),
      amountTaxable: new FormControl(null),
      itemTypeName: new FormControl(null),
      rate: new FormControl(null),
      entityName: new FormControl(null),
      entityFullName: new FormControl(null),
      descuentoPorAplicar: new FormControl(null),
      otherRefNum: new FormControl(null),

    });
  }


    // Load data
  load(): void {
    this.showLoading = true;

    this.nsConsultas = [];

    this.nsConsultaService.getAll(this.nsConsultaFilter).subscribe(
      (res: any) => {
        this.nsConsultas = res.data;
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


  delete(nsConsulta: any){
    if (!status) {
      Swal.fire({
        // title: '',
        html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
        <strong>Record # ${nsConsulta.id}</strong>`,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.value) {
          this.nsConsultaService.delete(nsConsulta.id).subscribe((res: any) => {
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
    this.nsConsultaFilter = this.frmFilter.value;
    this.load();
  }

  // Reset filters
  resetForm(): void {
    // reset model
    this.nsConsultaFilter = new NsConsultaModel();
    this.frmFilter.reset();
    this.load();
  }




}






