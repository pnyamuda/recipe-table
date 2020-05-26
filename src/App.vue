<template>
	<div id="app">
		<Top id="nav"></Top>
		<ImageSlide id="slider"></ImageSlide>
		<home-page v-bind:displayFoodType="displayFoodType" v-bind:searchRecipes="searchRecipes"></home-page>
		<search-page v-bind:foodRecipes="foodRecipes"></search-page>

	</div>
</template>

<script>
	import Top from "./components/Top.vue";
	import ImageSlide from "./components/ImageSlide.vue";
	import HomePage from "./components/HomePage.vue";
	import axios from "axios";
	import AdvancedSearch from "./components/AdvancedSearch.vue";




	export default {
		name: "App",
		components: {
			Top,
			ImageSlide,
			"home-page": HomePage,
			"search-page":AdvancedSearch,

		},
		data() {
			return {
				foodRecipes:[],
			}
		},
		methods: {
			displayFoodType(event) {
				axios
					.get(`https://api.edamam.com/search?q=&app_id=efb7b8d6&app_key=0765b41943f91184d10511211580fb3c&health=${event.target.id}`)
					.then(response => {
						console.log(response.data.hits);
					this.foodRecipes=response.data.hits;
					console.log(this.foodRecipes)
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
	};

</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

	#app {}

	#nav {
		position: relative;
		top: 1rem;
	}

	#slider {
		position: relative;
		top: 1.5rem;
	}

</style>
