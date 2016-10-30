

<template>
<ul>
	<li v-for='author in list'>
		<h3>
			<a class='author-name' v-link="{ path: '/author/' + author.id }">{{author.name}}</a>
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
	.author-name { cursor: pointer; color: black; text-decoration: none; }
</style>