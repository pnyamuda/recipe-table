<template>

	<div class="my-selector">



		<div>
			<label class="typo__label">Health Labels</label>
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
				value: [
					{
						name: 'vegetarian',
						code: 'veget'
					},
				],
				options: [{
						name: 'alcohol-free',
						code: 'alcohol'
					},
					{
						name: 'vegan',
						code: 'vega'
					},
					{
						name: 'sugar-conscious',
						code: 'sugar'
					},
					{
						name: 'fish-free',
						code: 'fish'
					},
					{
						name: 'red-meat-free',
						code: 'red'
					},
					{
						name: 'No-oil-added',
						code: 'oil'
					},
					{
						name: 'peanut-free',
						code: 'peanut'
					},
					{
						name: 'dairy-free',
						code: 'dairy'
					},
					{
						name: 'vegetarian',
						code: 'veget'
					},
					{
						name: 'wheat-free',
						code: 'wheat'
					},
					{
						name: 'soy-free',
						code: 'soy'
					},
					{
						name: 'pork-free',
						code: 'pork'
					},
					{
						name: 'pecatarian',
						code: 'pec'
					},
					{
						name: 'kidney-friendly',
						code: 'kid'
					}
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
				this.value.push(tag);
			}
		},
		watch: {
			value() {
			this.$emit("valueChanged",this.value)
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
