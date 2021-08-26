import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo : Todo ={
    titulo:'',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private serviceTodo: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.todo.id = this.route.snapshot.paramMap.get("id")!
    this.findById()  
  }


  findById(): void{
    this.serviceTodo.findById(this.todo.id).subscribe((resposta)=>{
      this.todo = resposta
    })
  }

  update():void{
    this.serviceTodo.update(this.todo).subscribe((resposta)=>{
      this.serviceTodo.message('Informações atualizada com sucesso')
      this.router.navigate([''])
    }, error =>{
      this.serviceTodo.message('Falha ao atualizar todo')
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
