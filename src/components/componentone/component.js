import { useView, customElement } from 'aurelia-framework'

@customElement('componentone')
@useView('./view.html')
export class ComponentOne {
	constructor(){
	}

	attached(){
	}
}