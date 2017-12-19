import angular from 'angular';
import 'ng-redux';
import 'angular-material/angular-material.css';
import { TodoFormComponent } from '../todo-form/todo.form.component';
import { TodoListComponent } from '../todo-list/todo.list.component';
import { TodoItemComponent } from '../todo-item/todo.item.component';
import { TodosComponent } from './todos.component';

angular
.module('todos', [])
.component(TodoFormComponent.selector, TodoFormComponent)
.component(TodoListComponent.selector, TodoListComponent)
.component(TodoItemComponent.selector, TodoItemComponent)
.component(TodosComponent.selector, TodosComponent);
