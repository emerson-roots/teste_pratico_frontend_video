import { Router } from '@angular/router';
import { ConteinerService } from 'src/app/services/conteiner.service';
import { Component, OnInit } from '@angular/core';
import { ConteinerDTO } from 'src/app/dto/conteiner.dto';

@Component({
  selector: 'app-conteiner-lista',
  templateUrl: './conteiner-lista.component.html',
  styleUrls: ['./conteiner-lista.component.css']
})
export class ConteinerListaComponent implements OnInit {

  conteinerDTO!: ConteinerDTO[];

  constructor(
    private conteinerService: ConteinerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){

    this.conteinerService.findAll()
      .subscribe(response => {
        this.conteinerDTO = response;
      },
      error => {
        console.log("ocorreu um erro ao listar conteiners. Erro: " + JSON.stringify(error))
      })
  }

  delete(id: number){

    this.conteinerService.delete(id)
      .subscribe(() => {
        this.findAll();
        alert("Conteiner excluído com sucesso.")
      },
      error => {
        console.log("ocorreu um erro ao deletar conteiner. Erro: " + JSON.stringify(error))
      })
  }

  edit(id: number) {
    this.router.navigate(['conteiner/editar', id])
  }

}
