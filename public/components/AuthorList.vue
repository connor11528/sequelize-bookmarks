

<template>
<ul>
	<li v-for='author in list'>
		<h3>{{author.name}}</h3>
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