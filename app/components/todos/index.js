import angular from 'angular';
import 'ng-redux';
import 'angular-material/angular-material.css';
import { TodoFormComponent } from '../todo-form/todo.form.component';
import { TodoListComponent } from '../todo-list/todo.list.component';
import { TodoItemComponent } from '../todo-item/todo.item.component';
import { TodoBoardComponent } from '../todo-board/todo.board.component';
import { TodosComponent } from './todos.component';

angular
.module('todos', [])
.component(TodosComponent.selector, TodosComponent)
.component(TodoBoardComponent.selector, TodoBoardComponent)
.component(TodoFormComponent.selector, TodoFormComponent)
.component(TodoListComponent.selector, TodoListComponent)
.component(TodoItemComponent.selector, TodoItemComponent);
