<template>

	<div class="my-selector">



		<div>
			<label class="typo__label">Health Labels</label>
			<multiselect :close-on-select="false" v-model="value5" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
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
				value5: [{
						name: 'American',
						code: 'americ'
					}],
				options: [{
						name: 'American',
						code: 'americ'
					},
					{
						name: 'Asian',
						code: 'asia'
					},
					{
						name: 'British',
						code: 'brit'
					},
					{
						name: 'Caribbean',
						code: 'cari'
					},
					{
						name: 'Central Europe',
						code: 'euro'
					},
					{
						name: 'Chinese',
						code: 'china'
					},
					{
						name: 'Eastern Europe',
						code: 'east'
					},
					{
						name: 'French',
						code: 'france'
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
				this.value5.push(tag);
			}
		},
		watch: {
			value() {
			this.$emit("cuisineChanged",this.value5)
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
