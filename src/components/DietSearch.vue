<template>

	<div class="my-selector">



		<div>
			<label class="typo__label">Diet</label>
			<multiselect :close-on-select="false" v-model="value2" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
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
				value2: [],
				options: [{
						name: 'balanced',
						code: 'bal'
					},
					{
						name: 'high-fiber',
						code: 'fiber'
					},
					{
						name: 'high-protein',
						code: 'protein'
					},
					{
						name: 'flow-carb',
						code: 'carbs'
					},
					{
						name: 'low-fat',
						code: 'fat'
					},
					{
						name: '	low-sodium',
						code: 'sodium'
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
				this.value2.push(tag);
			}
		},
		watch: {
			value() {
			this.$emit("dietChanged",this.value2)
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
