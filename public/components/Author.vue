<template>
	<a v-link="{ path: '/authors' }" class='btn btn-default pull-left'>< Back</a>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>{{author.name}}</h1>

		<p>{{author.bio}}</p>

		<h2 v-if='author.Books'>Books ({{author.Books.length}})</h2>
		<ul>
			<li v-for='book in author.Books'>
				<h3>{{book.title}}</h3>
				<i>{{book.isbn}}</i>
			</li>
		</ul>		
	</div>
</template>

<script>
import routes from 'vue-router'

export default {
	name: 'author',
	components: {
		routes
	},
	data(){
		return {
			author: {}
		}
	},
	ready(){
		this.getAuthor()
	},
	methods: {
		getAuthor(){
			this.$http.get('/api/authors/' + this.$route.params.id)
				.then(res => this.author = res.body)
		}
	}
}
</script>