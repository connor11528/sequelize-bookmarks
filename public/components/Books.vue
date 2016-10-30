<template>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>List of Books</h1>	

		<ul>
			<li v-for='book in books'>
				<h3>{{book.title}}</h3>
				<p>by {{book.author_id | authorIdToName authors}}</p>

				<p>{{book.description}}</p>
			</li>
		</ul>
	</div>

	<pre>{{books | json}}</pre>
</template>

<script>


export default {
	name: 'book',
	components: {

	},
	data(){
		return {
			books: {},
			authors: []
		}
	},
	ready(){
		this.getBooks()
		this.getAuthors()
	},
	methods: {
		getAuthors(){
			this.$http.get('/api/authors')
				.then(authors => this.$set('authors', authors.body))
		},
		getBooks(){
			this.$http.get('/api/books')
				.then(res => this.books = res.body)
		}
	}
}
</script>