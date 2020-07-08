<template>
    <div>
        <div id="advancedSearch">

            <HealthSearch class="selector" v-on:valueChanged="addHealthLabels($event)"></HealthSearch>
            <DishSearch class="selector" v-on:dishChanged="addDishLabels($event)"></DishSearch>
            <CuisineSearch class="selector" v-on:cuisineChanged="addCuisineLabels($event)"></CuisineSearch>
            <div id="search-input">
                <mdb-form-inline class="mr-auto mb-4">
                    <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="searchFood" />
                    <mdb-btn type="button" @click="searchForRecipe" outline="success" rounded size="sm" class="mr-auto">Search</mdb-btn>
                </mdb-form-inline>


            </div>


        </div>



        <div class="myImg">

            <div class="container myLove" v-for="foodRecipe in foodRecipes" :key="foodRecipe.id">
                <div class="content">
                    <router-link :to="'/recipe/'+foodRecipe.id" exact> <a>
                            <div class="content-overlay" v-on:click="myRecipe" v-bind:id="foodRecipe.id"></div>
                            <img class="content-image" v-bind:src="foodRecipe.image">
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">{{foodRecipe.title}}</h3>
                            </div>
                        </a></router-link>
                </div>
                <router-link :to="'/recipe/'+foodRecipe.id" exact>
                    <h3 class="title">{{foodRecipe.title}}</h3>
                </router-link>
            </div>


        </div>





        <!--
        <div class="myImg">

            <div class="myLove" v-for="foodRecipe in foodRecipes" :key="foodRecipe.id" v-on:click="myRecipe">

                <div v-bind:id="foodRecipe.id" class="contenedor" v-bind:style="'background:url('+foodRecipe.image+')'">
                    <h1 class="image-text"></h1>
                    <p></p>
                </div>

                <div v-bind:id="foodRecipe.id" class="nombre"></div>

            </div>



        </div>
-->



    </div>
</template>

<script>
    import axios from "axios";
    import HealthSearch from "./HealthSearch.vue";

    import DishSearch from "./DishSearch.vue";
    import CuisineSearch from "./CuisineSearch.vue";

    import {
        mdbInput,
        mdbBtn,
        mdbFormInline
    } from 'mdbvue';


    export default {
        name: "AdvancedSearch",
        components: {
            HealthSearch,
            DishSearch,
            CuisineSearch,
            mdbInput,
            mdbBtn,
            mdbFormInline,

        },
        data() {
            return {
                searchFood: "",
                categorySearchImage: false,
                advancedSearchImage: true,
                foodRecipes: [],
                healthLabels: [],
                dishLabels: [],
                cuisineLabels: [],

            }
        },
        methods: {
            addHealthLabels(labels) {
                this.healthLabels = labels;
            },
            addDishLabels(dishes) {
                this.dishLabels = dishes;
            },
            addCuisineLabels(cuisines) {
                this.cuisineLabels = cuisines;
            },
            fetchRecipeRequest(par) {
                axios
                    .get(`https://api.spoonacular.com/recipes/complexSearch?query=${this.searchFood}&apiKey=5900942a331f4623910b3ff1631c6b1b${par}&number=24`)
                    .then(response => {
                        this.foodRecipes = response.data.results;
                        console.log(response.data.results);

                    })
                    .catch(er => {
                        console.log(er)
                    })

            },
            searchForRecipe() {

                let healthParameter = this.healthLabels.map(val => '&diet=' + val.name).join('');

                //let dietParameter = '&diet=' + this.dietLabels.name;

                let dishParameter = this.dishLabels.map(val => '&type=' + val.name).join('');


                //let mealParameter = '&mealType=' + this.mealLabels.name;


                let cuisineParameter = this.cuisineLabels.map(val => '&cuisine=' + val.name).join('');

                let wholeParameters = healthParameter + dishParameter + cuisineParameter;

                console.log();

                this.$router.push(`/search/query=${this.searchFood}${wholeParameters}`)



                this.fetchRecipeRequest(wholeParameters);
            },
            myRecipe(event) {

                let foodId = event.target.id;
                console.log(foodId);

                this.$router.push(`/recipe/${foodId}`)

            }


        },

        created() {
            axios
                .get(`https://api.spoonacular.com/recipes/complexSearch?${this.$route.params.category}&apiKey=5900942a331f4623910b3ff1631c6b1b&number=10`)
                .then(response => {
                    console.log(response.data.results);
                    this.foodRecipes = response.data.results;


                })
                .catch(err => {
                    console.log(err)
                })

        },
    }

</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");


    @import url(https://fonts.googleapis.com/css?family=Raleway);

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }



    .container {
        padding: 1em 0;
        float: left;
        width: 100%;
    }


    .container .title {
        color: #1a1a1a;
        text-align: center;
        margin-bottom: 10px;
    }

    .content {
        position: relative;
        width: 100%;
        max-width: 30rem;
        margin: auto;
        overflow: hidden;
    }

    .content .content-overlay {
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        height: 99%;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        -webkit-transition: all 0.4s ease-in-out 0s;
        -moz-transition: all 0.4s ease-in-out 0s;
        transition: all 0.4s ease-in-out 0s;
    }

    .content:hover .content-overlay {
        opacity: 1;
    }

    .content-image {
        width: 100%;
    }

    .content-details {
        position: absolute;
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
        width: 100%;
        top: 50%;
        left: 50%;
        opacity: 0;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    .content:hover .content-details {
        top: 50%;
        left: 50%;
        opacity: 1;
    }

    .content-details h3 {
        color: #fff;
        font-weight: 500;
        letter-spacing: 0.15em;
        margin-bottom: 0.5em;
        text-transform: uppercase;
    }

    .content-details p {
        color: #fff;
        font-size: 0.8em;
    }

    .fadeIn-bottom {
        top: 80%;
    }

    .content-title {
        font-size: 1rem;
    }

    .title {
        font-size: 1.5rem;
    }








    .myImg {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 90%;
        margin: auto;
        position: relative;
        top: 4rem;
    }

    .myLove {
        padding-top: 1rem;
        cursor: pointer;
        padding-left: 0.5rem;
        padding-right: 0.5rem;

    }

    .myLove:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, .4);
    }

    .image-text {
        font-size: 1.5rem;
        margin-top: 1rem;
    }







    #advancedSearch {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 2rem;
        width: 95%;
        margin: auto;
        align-items: center;
    }

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

    @media (min-width:480px) and (max-width:768px) {
        .myImg {
            display: grid;
            grid-template-columns: 48% 48%;
            grid-column-gap: 2%;
            border: 1px solid red;
        }


    }

    @media (min-width:768.1px) and (max-width:1023.9px) {
        #advancedSearch {
            display: grid;
            grid-template-columns: 48% 48%;
            grid-template-rows: 8rem 8rem;
            grid-column-gap: 2%;
            height: 20rem;
            width: 88%;
            margin: auto;


        }

        .selector {
            margin-top: -2rem;
            height: 6rem;
        }

        #search-input {
            margin-top: 0.8rem
        }

        .myImg {
            display: grid;
            grid-template-columns: 32.5% 32.5% 32.5%;
            grid-column-gap: 2.5%;
        }



    }

    @media (min-width:1024px) {

        .myImg {
            display: grid;
            grid-template-columns: 24% 24% 24% 24%;
            grid-column-gap: 1%;
        }

        #advancedSearch {
            display: grid;
            grid-template-columns: 30% 30%;
            grid-template-rows: 8rem 8rem;
            grid-column-gap: 10%;
            height: 20rem;
            width: 88%;
            margin: auto;
        }

        .selector {
            margin-top: -2rem;
            height: 6rem;
        }

        #search-input {
            margin-top: 0.8rem
        }



    }

    /*
    
     .contenedor {
        width: 18.75rem;
        height: 18.75rem;
        margin: 2em auto;
        display: block;
        position: relative;
        background-position: center !important;
        background-size: 100% 100% !important;
        padding: 1em;
        overflow: hidden;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        color: lightgreen;
    }

    .contenedor:before {
        position: absolute;
        content: "";
        top: 1em;
        left: 2em;
        width: 0;
        height: 2px;
        background-color: lightgreen;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .contenedor:after {
        position: absolute;
        content: "";
        bottom: 1em;
        right: 2em;
        width: 0;
        height: 2px;
        background-color: lightgreen;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .contenedor h1 {
        position: absolute;
        left: 1em;
        top: 0.5em;
        -webkit-transform: translatex(-130%);
        transform: translatex(-130%);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .contenedor p {
        position: absolute;
        left: 2em;
        top: 4em;
        -webkit-transform: translatex(350%);
        transform: translatex(350%);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .contenedor:hover {
        background-size: 120% 120%;
        cursor: pointer;
    }

    .contenedor:hover h1,
    .contenedor:hover p {
        -webkit-transform: translatex(0%);
        transform: translatex(0%);
    }

    .contenedor:hover:before,
    .contenedor:hover:after {
        width: 80%;
    }

    .nombre {
        text-align: center;
        font-family: sans-serif;
        font-size: 1rem;
        margin-top: -1rem;
        width: 20rem;
    }

    
    
    
    
    */

</style>
