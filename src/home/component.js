import { useView } from 'aurelia-framework'

const routes = [
	{ route: ['dashboard']
	, name: 'dashboard'
	, moduleId: 'dashboard/component'
	, nav: true 
	}
	, { route: ['create']
	, name: 'create'
	, moduleId: 'components/create/component'
	, nav: true 
	}
	// , { route: ['view']
	// , name: 'view'
	// , moduleId: 'components/view/component'
	// , nav: true 
	// }
  , { route: ['']
	, redirect: 'dashboard' 
	}
]

@useView('./view.html')
export class Home { 
	configureRouter(config, router){
		config.title = 'Aurelia'
		config.map(routes)

		config.mapUnknownRoutes(()=> 'dashboard/component')

		this.router = router
	}
}
