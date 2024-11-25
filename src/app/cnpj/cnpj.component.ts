import { Component, OnInit } from '@angular/core';
import { CnpjService } from './cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {
  cnpjInput: string = '';
  cnpjData: any;

  constructor(private cnpjService: CnpjService) { }

  ngOnInit() {
  }

  lookupCnpj() {
    this.cnpjService.getCnpj(this.cnpjInput).subscribe(
      (data) => {
        this.cnpjData = data;
      },
      (error) => {
        console.error('Erro ao buscar CNPJ:', error);
      }
    );
  }
}