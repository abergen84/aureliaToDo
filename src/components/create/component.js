import { useView, customElement, inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'

@customElement('createtodo')
@useView('./view.html')
@inject(EventAggregator)

export class CreateTodo {
	
	constructor(event){
		this.data = {}
		this.state = {}
		this.event = event
	}

	attached(){
		this.state.showText = false
		this.data.list = JSON.parse(localStorage.getItem('todos')) || []
		// this.event.publish('initial', this.data.list)
	}

	submit(){
		const toDo = 
		{	
			title: this.title
			, todo: this.todo
			, completed: false
		}
		
		
		this.data.list.push(toDo)
		localStorage.setItem('todos', JSON.stringify(this.data.list))
		console.log(this.data.list)

		this.data.showText = true
		setTimeout(()=> this.data.showText = false, 2000)

		// this.reset()
		// this.event.publish('refresh', this.data.list)

	}

	reset() {
	}
}