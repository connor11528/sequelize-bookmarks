

<template>
<ul>
	<li v-for='author in list'>
		<h3>
			<a v-link="{ path: '/author/' + author.id }">{{author.name}}</a>
		</h3>
		<i>{{author.bio}}</i>
		<p>{{author.Books.length}} books</p>
	</li>
</ul>
</template>


<script>
export default {
	name: 'AuthorList',
	props: ['list']
}
</script>

<style> 
	a { cursor: pointer; text-decoration: none; }
</style>