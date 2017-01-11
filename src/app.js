const routes = [
	{ route: ['home']
	, name: 'home'
	, moduleId: 'home/component'
	, nav: true 
	}
  , { route: ['']
	, redirect: 'home' 
	}
]


export class App { 
	configureRouter(config, router){
		config.title = 'Aurelia'
		config.map(routes)

		config.mapUnknownRoutes(()=> 'home/component')

		this.router = router
	}
}
