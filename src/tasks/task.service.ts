import { Injectable } from '@nestjs/common'
import { Task } from './task'

@Injectable()
export class TaskService {
    tasks: Task[] = [
        { id: 1, description: 'Tarefa 1', completed: true },
        { id: 2, description: 'Tarefa 2', completed: true },
        { id: 3, description: 'Tarefa 3', completed: true },
        { id: 4, description: 'Tarefa 4', completed: true },
        { id: 5, description: 'Tarefa 5', completed: true },
    ]

    getAll() {
        return this.tasks
    }

    getById(id: number) {
        const task = this.tasks.find((value) => value.id == id)
        return task
    }

    create(task: Task) {
        let lastId = 0
        if (this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id
        }
        task.id = lastId + 1
        this.tasks.push(task)

        return task
    }

    update(task: Task) {
        const taskToUpdate = this.getById(task.id)
        if (taskToUpdate) {
            taskToUpdate.description = task.description
            taskToUpdate.completed = task.completed
        }

        return taskToUpdate
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id)
        this.tasks.splice(index, 1)
    }
}
