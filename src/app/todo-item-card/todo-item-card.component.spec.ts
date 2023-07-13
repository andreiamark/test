import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemCardComponent } from './todo-item-card.component';

describe('TodoItemCardComponent', () => {
  let component: TodoItemCardComponent;
  let fixture: ComponentFixture<TodoItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemCardComponent]
    });
    fixture = TestBed.createComponent(TodoItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
