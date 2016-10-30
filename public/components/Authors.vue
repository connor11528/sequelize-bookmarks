
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Authors</h1>
		
		<spinner v-ref:spinner size="xl" fixed text="Loading Authors"></spinner>
		<typeahead :data="authorNames" :on-hit="goToAuthorPage" placeholder="Search authors">
			</typeahead>

		<Author-List :list.sync="authors"></Author-List>

	</div>
</template>

<script>
// get the component and make the template avail as <author-list>
import AuthorList from './AuthorList.vue'
import { spinner, typeahead } from 'vue-strap'

export default {
	name: 'authors',
	components: {
		AuthorList,
		spinner,
		typeahead
	},
	data(){
		return {
			authors: [],
			authorNames: []
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

                // create an array of author names
                this.authorNames = authors.body.map(author => author.name)

            }, function(err){
            	console.error('Error requesting authors: ')
            	console.error(err)
            }).then(() => this.$refs.spinner.hide())
		},
		goToAuthorPage(name){
			let author = this.authors.find(a => name === a.name)
			this.$router.go('/author/' + author.id)
		}
	}
}
</script>