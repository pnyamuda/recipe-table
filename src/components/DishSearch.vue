<template>

	<div class="my-selector">



		<div>
			<label class="typo__label">Meal Type</label>
			<multiselect :close-on-select="false" v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
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
				value: [],
				options: [{
						name: 'side dish',
						code: 'bisc'
					},
					{
						name: 'bread',
						code: 'bre'
					},
					{
						name: 'dessert',
						code: 'cere'
					},
					{
						name: 'appetizer',
						code: 'condime'
					},
					{
						name: 'salad',
						code: 'drink'
					},
					{
						name: 'bread',
						code: 'desse'
					},
					{
						name: 'breakfast',
						code: 'pan'
					},
					{
						name: 'soup',
						code: 'pre'
					},
					{
						name: 'beverage',
						code: 'preserv'
					},
					{
						name: 'sauce',
						code: 'sald'
					},
					{
						name: 'marinade',
						code: 'wiches'
					},
					{
						name: 'fingerfood',
						code: 'dishs'
					},
					{
						name: 'snack',
						code: 'soupss'
					},
					{
						name: 'drink',
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
				this.$emit("dishChanged", this.value)
			},
		}
	}

</script>



<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style>
	.my-selector {
		width: 20rem;

	}
    
    .typo__label {
        font-weight: bold;
        margin-bottom: -0.5rem;
        margin-top: 1rem;
    }

</style>
