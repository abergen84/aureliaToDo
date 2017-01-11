import { useView, customElement, bindable, inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'

@customElement('viewtodo')
@useView('./view.html')
@inject(EventAggregator)

export class ViewTodo {
	@bindable refresh
	constructor(event){
		this.data = {}
		this.state = {}
		this.event = event
	}

	attached(){
		// this.data.todos = JSON.parse(localStorage.getItem('todos'))
		// this.event.subscribe('initial', (data) => this.data.list = data)
	}

	refreshChanged(newValue, oldValue){
		// console.log(newValue, oldValue)
		// console.log(this.refresh)
		// this.data.list = this.refresh
		this.data.list = newValue
	}
	
	// list(data) {
	// 	console.log('list method', data)
	// 	this.data.list = data
	// }

	bind() {
		// this.event.subscribe('refresh', (data) => this.list(data))
	}
}