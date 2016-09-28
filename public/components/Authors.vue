
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Authors</h1>
		
		<spinner v-ref:spinner size="xl" fixed text="Loading Authors"></spinner>
		<Author-List :list.sync="authors"></Author-List>

	</div>
</template>

<script>
// get the component and make the template avail as <author-list>
import AuthorList from './AuthorList.vue'
import { spinner } from 'vue-strap'

export default {
	name: 'authors',
	components: {
		AuthorList,
		spinner
	},
	data(){
		return {
			authors: [] // [{bio: 'wizard', name: 'Harry Potter', Books: [1,2,3]}]
		}
	},
	ready(){
		this.$refs.spinner.show()
		this.getAuthors()
	},
	methods: {
		getAuthors: function(){
			this.$http.get('/api/authors').then(function(authors){
				// set the data after ajax request
                this.$set('authors', authors.body)
            }, function(err){
            	console.error('oh shit')
            }).then(function(){
            	this.$refs.spinner.hide()
            })
		}
	}
}
</script>