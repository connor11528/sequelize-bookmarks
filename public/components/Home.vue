
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Sequelize bookmarks 2</h1>
		<p>{{headline}}</p>
		<p :class='item.completed ? "task" : "nocolor"' @click='changeColor'>{{ item.task }}</p>
		<p>{{item}}</p>

		<pre>{{ item | json }}</pre>

	</div>
</template>

<style>
.task {
	color: green;
}
</style>

<script>
export default {
	data(){
		return {
			headline: 'victoria',
			item: { completed: true, task: "do something" }

		}
	},
	methods: {
		changeColor(){
			console.log('fired!')
		}
	}
}
</script>