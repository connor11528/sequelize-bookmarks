
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Authors</h1>

		<pre>{{authors | json}}</pre>
		<h4>Static array of States that start with letter "A"</h4>
		<typeahead :data="USstate" placeholder="USA states">
		</typeahead>
	</div>
</template>

<script>
import { typeahead } from 'vue-strap'

export default {
	components: {
		typeahead
	},
	ready(){
		this.getAuthors()

	},
	data(){
		return {
			authors: [],
			USstate: ['Alabama', 'Alaska', 'Arizona'],
		}
	},
	methods: {
		getAuthors: function(){
			console.log('get authors called')
			this.$http.get('/api/authors').then(function(authors){
				console.log(authors)
                this.$set('authors', authors.body)
            }, function(err){
            	console.error('oh shit')
            })
		}
	}
}
</script>