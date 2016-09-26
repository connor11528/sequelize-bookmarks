
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Authors request</h1>

		<h4>Static arrays</h4>
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
	data(){
		return {
			USstate: ['Alabama', 'Alaska', 'Arizona'],
		}
	},
	methods: {

	}
}
</script>