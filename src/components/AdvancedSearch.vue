<template>
	<div id="">
		<div>


			<DropDown v-on:valueChanged="addHealthLabels($event)"></DropDown>
			<DietSearch v-on:dietChanged="addDietLabels($event)"></DietSearch>

			<div>
				<mdb-form-inline class="mr-auto mb-4">
					<mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
					<mdb-btn outline="success" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
				</mdb-form-inline>


			</div>


		</div>

		<p></p>
		<div class="recipe-grid">

			<div v-for="foodRecipe in foodRecipes" class="effect-1" :key="foodRecipe.id">
				<div class="effect-img">
					<img v-bind:src="foodRecipe.recipe.image">
				</div>
				<div class="effect-text">
					<h2>{{foodRecipe.recipe.label}}</h2>
					<p>By {{foodRecipe.recipe.source}}</p>
					<div class="effect-btn">
						<a class="btn" href="#">Read More</a>
					</div>
				</div>
			</div>





		</div>



	</div>
</template>

<script>
	import axios from "axios";
	import DropDown from "./DropDown.vue";
	import DietSearch from "./DietSearch.vue";
	import {
		mdbInput,
		mdbBtn,
		mdbFormInline
	} from 'mdbvue';


	export default {
		name: "AdvancedSearch",
		components: {
			DropDown,
			DietSearch,
			mdbInput,
			mdbBtn,
			mdbFormInline

		},
		data() {
			return {
				foodRecipes: [],
				healthLabels: "",
				dietLabels:"",

			}
		},
		methods: {
			addHealthLabels(labels) {
				this.healthLabels = labels;
			},
			addDietLabels(diets) {
				this.dietLabels = diets;
			}
		},
		created() {
			axios
				.get(`https://api.edamam.com/search?q=&app_id=efb7b8d6&app_key=0765b41943f91184d10511211580fb3c&health=${this.$route.params.category}`)
				.then(response => {
					console.log(response.data.hits);
					this.foodRecipes = response.data.hits;
					console.log(this.foodRecipes);


				})
				.catch(err => {
					console.log(err)
				})

		},
	};

</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

	.recipe-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 20% 20% 20% 20%;
		grid-template-rows: auto;
		grid-column-gap: 5%;
		margin: auto;
		border: 1px solid red;

	}

	.effect-1 {
		position: relative;
		margin-bottom: 30px;
		overflow: hidden;
	}

	.effect-1 .effect-img {
		font-size: 0;
	}

	.effect-1 .effect-img img {
		max-width: 100%;
		display: block;
		height: auto;
	}

	.effect-1 .effect-text {
		position: absolute;
		width: 300px;
		height: 300px;
		padding: 30px;
		top: calc(100% - 60px);
		left: 0;
		text-align: center;
		background: rgba(0, 0, 0, 0.5);
		transition: 0.5s;
	}

	.effect-1:hover .effect-text {
		top: 0;
	}

	.effect-1 .effect-text h2 {
		height: 45px;
		color: #ffffff;
		font-size: 25px;
		margin: -15px 0 0 0;
		transition: 0.5s;
	}

	.effect-1:hover .effect-text h2 {
		margin: 0;
	}

	.effect-1 .effect-text p {
		color: #ffffff;
		font-size: 16px;
		margin: 0 0 20px 0;
	}

	.effect-1 .effect-btn .btn {
		display: inline-block;
		height: 35px;
		padding: 7px 15px;
		color: #333333;
		background: #ffffff;
		text-decoration: none;
	}

</style>
