<template>
	<div id='wrapper'>
		<nav class='navbar navbar-default'>
			<div class='container'>
				<ul class='nav navbar-nav'>
					<li><a v-link="{ path: '/' }">Home</a></li>
	        		<li><a v-link="{ path: '/authors' }">Authors</a></li>
	        		<li><a v-link="{ path: '/books' }">Books</a></li>
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
	name: 'main',
	components: {
		
	},
	data() {
		return {
		}
	},
	methods: {

	}
}
 </script>