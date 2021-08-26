import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css'],
})
export class ReadAllComponent implements OnInit {

  closed = 0

  list : Todo[] = [ ]
  listFinished:Todo[] = [ ]

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }


  findAll(){
    this.todoService.findAll().subscribe((resposta) =>{
     resposta.forEach(todo => {
       if(todo.finalizado){
         this.listFinished.push(todo)
       }else{
         this.list.push(todo)
       }
     })
     this.closed = this.listFinished.length     
    })     
  }

  finalizar(item:Todo): void {
    item.finalizado = true
    this.todoService.update(item).subscribe(()=>{
      this.todoService.message('Task Concluída com sucesso')
      this.list = this.list.filter(todo => todo.id !== item.id)
      this.closed++
    })
  }

  delete(id: any):void{
    this.todoService.delete(id).subscribe((resposta)=>{
      if(resposta === null){
        this.todoService.message('Task deletada com sucesso')
        this.list = this.list.filter(todo => todo.id !== id)
      }
    })
  }

  finalizados():void{
    this.router.navigate(['/finalizados'])
  }

 

}
