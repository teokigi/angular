import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import { API, graphqlOperation} from 'aws-amplify';
import { ToDo } from '../../../types/todo';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {
    todoList;
  
    constructor() { }

    public async onCreate(){
        const todo = { name: "My todo", description: "Hello world!" };
        await API.graphql(graphqlOperation(mutations.createTodo, {input:todo}))
        console.log('button pressed!: ' + todo.name)
    }

  async ngOnInit() {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    console.log('listing to do`s');
    console.log(allTodos);
    this.todoList = allTodos;

  }

}
