import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todo : Todo ={
    titulo:'',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private serviceTodo: TodoService) { }

  ngOnInit(): void {
  }

  create(): void{
   this.formateData()
   this.serviceTodo.create(this.todo).subscribe((resposta)=>{
     this.serviceTodo.message('To-do criado com sucesso!')
     this.router.navigate([''])
   }, err =>{
    this.serviceTodo.message('Falha ao criar To-do')
    this.router.navigate([''])
   })
  }

  formateData():void{
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}}` 
    console.log(this.todo.dataParaFinalizar)
  }


  cancel():void {
    this.router.navigate([''])
  }

}
