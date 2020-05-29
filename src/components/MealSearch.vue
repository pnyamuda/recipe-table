<template>

	<div class="my-selector">



		<label class="typo__label">Meal</label>
		<multiselect v-model="value" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="false" :allow-empty="false">
			<p slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></p>
		</multiselect>




	</div>



</template>





<script>
	import Multiselect from 'vue-multiselect';

	export default {
		props: [],
		components: {
			Multiselect
		},
		data() {
			return {
				value:{
						name: 'Dinner',
						language: 'din'
					},
				options: [{
						name: 'Breakfast',
						language: 'break'
					},
					{
						name: 'Lunch',
						language: 'lu'
					},
					{
						name: 'Dinner',
						language: 'din'
					},
					{
						name: 'Snack',
						language: 'nack'
					},
					{
						name: 'Teatime',
						language: 'tea'
					},
				],
			}
		},
		watch: {
			value() {
				this.$emit("mealChanged", this.value)
			},
		}
	}

</script>



<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style>
	.my-selector {
		width: 20rem;

	}

</style>
