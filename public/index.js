import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import MainTemplate from './components/MainTemplate.vue'
import Home from './components/Home.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

// export so we can use in components
export var router = new VueRouter()

// define routes
router.map({
	'/': {
		component: Home
	}
})

// fallback route
router.redirect({
	'*': '/'
})

// expose the whole thing on element with 'app' as an id
router.start(MainTemplate, '#app')
