<template>

	<div class="my-selector">



		<div>
			<label class="typo__label">Dish</label>
			<multiselect :close-on-select="false" v-model="value4" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
		</div>




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
				value4: [{
						name: 'Main course',
						code: 'main'
					},],
				options: [{
						name: 'Biscuits and cookies',
						code: 'bisc'
					},
					{
						name: 'Bread',
						code: 'bre'
					},
					{
						name: 'Cereals',
						code: 'cere'
					},
					{
						name: 'Condiments and sauces',
						code: 'condime'
					},
					{
						name: 'Drinks',
						code: 'drink'
					},
					{
						name: 'Desserts',
						code: 'desse'
					},
					{
						name: 'Main course',
						code: 'main'
					},
					{
						name: 'Pancake',
						code: 'pan'
					},
					{
						name: 'Preps',
						code: 'pre'
					},
					{
						name: 'Preserve',
						code: 'preserv'
					},
					{
						name: 'Salad',
						code: 'sald'
					},
					{
						name: 'Sandwiches',
						code: 'wiches'
					},
					{
						name: 'Side dish',
						code: 'dishs'
					},
					{
						name: 'Soup',
						code: 'soupss'
					},
					{
						name: 'Starter',
						code: 'startr'
					},
					{
						name: 'Sweets',
						code: 'swts'
					},

				],
			}
		},
		methods: {
			addTag(newTag) {
				const tag = {
					name: newTag,
					code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
				}
				this.options.push(tag);
				this.value4.push(tag);
			}
		},
		watch: {
			value() {
				this.$emit("dishChanged", this.value4)
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
