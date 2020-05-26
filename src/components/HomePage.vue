<template>
	<div>

		<div id="container">

			<div class="effect-1">
				<div class="effect-img">
					<img src="../assets/vegan.jpg" alt="Image">
				</div>
				<div class="effect-text">
					<h2>No Sagar</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, interdum felis in, auctor ligula.</p>
					<div class="effect-btn">
						<a id="low-sugar" class="btn" href="#" @click="displayFoodType">Read More</a>
					</div>
				</div>
			</div>




			<div class="effect-1">
				<div class="effect-img">
					<img src="../assets/vegan.jpg" alt="Image">
				</div>
				<div class="effect-text">
					<h2>Vegan</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, interdum felis in, auctor ligula.</p>
					<div class="effect-btn">
						<a id="vegan" class="btn" href="#" @click="displayFoodType">Read More</a>
					</div>
				</div>
			</div>


			<div class="effect-1">
				<div class="effect-img">
					<img src="../assets/vegan.jpg" alt="Image">
				</div>
				<div class="effect-text">
					<h2>Vegetarian</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, interdum felis in, auctor ligula.</p>
					<div class="effect-btn">
						<a id="vegetarian" class="btn" href="#" @click="displayFoodType">Read More</a>
					</div>
				</div>
			</div>

			<div class="effect-1">
				<div class="effect-img">
					<img src="../assets/vegan.jpg" alt="Image">
				</div>
				<div class="effect-text">
					<h2>Balanced</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, interdum felis in, auctor ligula.</p>
					<div class="effect-btn">
						<a id="balanced" class="btn" href="#" @click="displayFoodType">Read More</a>
					</div>
				</div>
			</div>






		</div>









		<div id="">
			<p>Cuisine Types</p>
			<div>
				<img>
				<p>Peanut Free</p>
			</div>


		</div>

		<div id="">
			<p>Meal Types</p>
			<div>
			</div>


		</div>

		<div id="">
			<p>Dish Types</p>
			<div>
			</div>

		</div>

		<div id="">
			<p>Diet Meals</p>
			<div>
			</div>

		</div>




	</div>
</template>

<script>
	
	
	
	
	export default {
		name: "HomePage",
		props:['displayFoodType','foodRecipes'],
		components: {


		},
		data() {
			return {
				HealthyMeals: "",
				Cuisines: "",
				MealTypes: "",
				DishTypes: "",
				DietMeals: "",
				clickType: "",



			}
		},
		
		mounted() {

		}
	};

</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");


	#container {
		width: 90%;
		display: grid;
		grid-template-columns: 45% 45%;
		grid-column-gap: 5%;
		margin: auto;
		border: 1px solid;
		position: relative;
		top: 3rem;
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
		width: 100%;
		height: 100%;
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
