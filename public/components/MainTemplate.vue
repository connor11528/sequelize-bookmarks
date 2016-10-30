<template>
	<div id='wrapper'>
		<nav class='navbar navbar-default'>
			<div class='container'>
				<ul class='nav navbar-nav'>
					<li><a v-link="'home'">Home</a></li>
	        		<li><a v-link="'authors'">Authors</a></li>
	        		<li><a v-link="'books'">Books</a></li>
				</ul>
			</div>
		</nav>
		<div class='container'>
			<!-- Routes rendered here -->
			<router-view></router-view>
		</div>
		<div class='footer'>
			
			
		</div>
	</div>
</template>


<script>

export default {
	components: {
		
	},
	data() {
		return {
			USstate: ['Alabama', 'Alaska', 'Arizona']
		}
	},
	methods: {

	}
}
 </script>