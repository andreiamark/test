import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, ListComponent, TodoItemCardComponent, TodoItemListComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
