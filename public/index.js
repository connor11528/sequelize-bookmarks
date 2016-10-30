import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import MainTemplate from './components/MainTemplate.vue'
import Home from './components/Home.vue'
import Authors from './components/Authors.vue'
import Author from './components/Author.vue'
import Books from './components/Books.vue'
import Book from './components/Book.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

// export so we can use in components
export var router = new VueRouter()

// define routes
router.map({
	'/': {
		component: Home
	},
	'/authors': {
		component: Authors
	},
	'/author/:id': {
		component: Author
	},
	'/books': {
		component: Books
	},
	'/book/:id': {
		component: Book
	}
})

// fallback route
router.redirect({
	'*': '/'
})

// expose the whole thing on element with 'app' as an id
router.start(MainTemplate, '#app')
