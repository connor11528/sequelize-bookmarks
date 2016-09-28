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
			<h4>Static array of States that start with letter "A"</h4>
			<i>Built using vue-strap</i>
			<typeahead :data="USstate" placeholder="USA states">
			</typeahead>
		</div>
	</div>
</template>


<script>
import { typeahead } from 'vue-strap'

export default {
	components: {
		typeahead
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