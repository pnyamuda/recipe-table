<template>
    <div>


        <div>


            <div class="parent">
                <div class="div1"><img id="recipe-img" v-bind:src="src"></div>
                <div class="div2">
                    <div class="name-source">
                        <p id="recipe-name">{{name}}</p>
                        <p id="recipe-source">By {{source}}</p>

                    </div>
                    <div id="time-box">
                        <p>{{servings}} servings | {{time}} minutes </p>
                    </div>

                </div>

                <div class="div3">
                    <p class="my-titles">Ingredients</p>
                    <ul>
                        <li v-for="ingredient in ingredients" :key="ingredient.id">{{ingredient.original}}</li>
                    </ul>
                </div>


                <div class="div4">
                    <p class="my-titles">Instructions</p>
                    <p>{{instructions}}</p>
                </div>




                <div class="div6">
                    <p class="my-titles">Diet</p>
                    <BalancedChart></BalancedChart>
                </div>


                <div class="div5">
                    <p class="my-titles">Nutrition</p>
                    <mdb-scrollbar height="200px">
                        <mdb-tbl bordered>
                            <mdb-tbl-head color="light">
                                <tr>
                                    <th scope="col">Nutrient</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Daily Percentage</th>
                                </tr>
                            </mdb-tbl-head>
                            <mdb-tbl-body>
                                <tr v-for="nutrient in totalNutrients" :key="nutrient.id">
                                    <td>{{nutrient.title}}</td>
                                    <td>{{nutrient.amount}}</td>
                                    <td>{{nutrient.percentOfDailyNeeds}}</td>
                                </tr>


                            </mdb-tbl-body>
                        </mdb-tbl>
                    </mdb-scrollbar>
                </div>


            </div>


        </div>


        <Loader></Loader>



    </div>
</template>

<script>
    import axios from "axios";
    import Loader from "./Loader.vue";
    import {
        mdbTbl,
        mdbTblHead,
        mdbTblBody,
        mdbScrollbar
    } from 'mdbvue';

    import BalancedChart from "./BalancedChart.vue";
    import {
        eventBus
    } from '../main'


    export default {
        name: "TheRecipe",
        components: {
            mdbTbl,
            mdbTblHead,
            mdbTblBody,
            mdbScrollbar,
            BalancedChart,
            Loader

        },
        data() {
            return {
                name: "pierce",
                src: "",
                ingredients: "",
                servings: "",
                time: "",
                calories: "",
                source: "",
                totalNutrients: "",
                dailyPer: "",
                nutrient: "",
                key: "",
                instructions: "",
                diets: "",
                balancedDiet: "",
            }
        },
        methods: {

        },
        created() {
            //first running the loader

            eventBus.$on("runLoader", myFunction => {
                myFunction();
            })


            //then collectiong the recipe title, instructions etc

            axios
                .get(`https://api.spoonacular.com/recipes/${this.$route.params.information}/information?apiKey=5900942a331f4623910b3ff1631c6b1b`)
                .then(info => {
                    console.log(info.data.image)



                    this.name = info.data.title;
                    this.src = info.data.image;
                    this.ingredients = info.data.extendedIngredients;
                    this.servings = info.data.servings;
                    this.time = info.data.readyInMinutes;
                    this.instructions = info.data.instructions;
                    this.diets = info.data.diets

                    this.source = info.data.sourceName;




                })
                .catch(err => {
                    console.log(err)
                })

            //recipe info
            axios
                .get(`https://api.spoonacular.com/recipes/${this.$route.params.information}/nutritionWidget.json?apiKey=5900942a331f4623910b3ff1631c6b1b`)
                .then(info => {

                    console.log(info.data);

                    //collecting nutrition information

                    let allNutrientsCombined = info.data.bad.concat(info.data.good);
                    this.totalNutrients = allNutrientsCombined;

                    let majorNutri = [];
                    majorNutri.push(info.data.fat);
                    majorNutri.push(info.data.carbs);
                    majorNutri.push(info.data.protein);
                    //removing the grams symbols to get only numbers

                    majorNutri = majorNutri.map(val => parseInt(val));

                    this.balancedDiet = majorNutri
                    console.log(this.balancedDiet);

                    //emittig events;


                    eventBus.$emit("newInfo", this.balancedDiet);

                    eventBus.$emit("stopLoader", false);




                })
                .catch(err => {
                    console.log(err)
                })


            /* //related recipes
            axios
                .get(`https://api.spoonacular.com/recipes/${this.$route.params.information}/similar?number=6&apiKey=5900942a331f4623910b3ff1631c6b1b`)
                .then(info => {

                    console.log(info.data);

                })
                .catch(err => {
                    console.log(err)
                })
*/



        }
    };

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap');

    * {
        font-family: 'Cabin', sans-serif;
        font-size: 1rem;
    }

    .parent {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 2rem;
    }

    #recipe-img {
        width: 25rem;
        height: auto;
        display: block;
        margin: auto;
       
    }

    .div2 {
        width: 100%;
    }

    #recipe-name {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }

    #recipe-source {}

    .name-source {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        

    }


    #time-box {
        text-align: center;

    }

    #recipe-diets {}

    .div3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: auto;
    }

    .my-titles {
        font-weight: bold;
        font-size: 1.5rem;
    }

    .div4 {
        text-align: center;
        width: 90%;
        margin: auto;
    }

    .div6 {
        width: 90%;
        text-align: center;
        margin: auto;
    }

    .div5 {
        width: 90%;
        margin: auto;
        text-align: center;
        position: relative;
        top: 2rem;
    }

    .image {}

    .diet-pie,
    .fat-pie,
    .carbs-pie {}

    .food-info,
    .second-block,
    .third-block {}

    @media (min-width:768px) {
        .parent {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-template-rows: auto auto auto;
            grid-column-gap: 1rem;
            grid-row-gap: 4rem;
            width: 90%;
            margin: auto;
        }

        #recipe-img {
            width: 20rem
        }

        .div1 {
            grid-area: 1 / 1 / 2 / 2;
            margin-left: 0.5rem;
            
           


        }

        .div2 {
            grid-area: 1 / 2/ 2 / 5;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: -1rem;
            padding-left: 1rem;
           
        }

        #recipe-name {
            text-align:start;
        }
        #recipe-source {
           
            
        }
        #time-box p {
        }

        .name-source {
            align-items: flex-start;
        }

        .div3 {
            grid-area: 2 / 1 / 3 / 2;

            margin-top: 0rem;
        }

        .div4 {
            grid-area: 2 / 2 / 3 / 5;

            margin-top: 0rem;
        }

        .div5 {
            grid-area: 3 / 1 / 4 / 3;

            margin-top: 0rem;
        }

        .div6 {
            grid-area: 3 / 3 / 4 / 5;
            margin-top: 2rem;

        }

        .div7 {
            grid-area: 5 / 2 / 6 / 4;
        }



    }

    /*
    
    
     .parent {
        width: 90%;
        position: relative;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0px;
        border: 2px solid green;
        padding: 1rem;
    }

    .div1 {
        grid-area: 1 / 1 / 2 / 3;
    }

    .div2 {
        grid-area: 1 / 3 / 2 / 5;
       
    }

    .div3 {
        grid-area: 2 / 1 / 3 / 2;
        
    }

    .div4 {
        grid-area: 2 / 2 / 3 / 5;
        
    }

    .div5 {
        grid-area: 3 / 1 / 4 / 2;
         
    }

    .div6 {
        grid-area: 3 / 2 / 4 / 5;
    }

    .div7 {
        grid-area: 5 / 2 / 6 / 4;
    }
    
    
    
    
    
    
    
    
    
    
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1px 1px;
        grid-template-areas: "image image food-info food-info""ingredients ingredients nutrient-table nutrient-table""diet-pie\ chart diet-pie\ chart fat-pie\ chart fat-pie\ chart""carbs-pie\ chart carbs-pie\ chart carbs-pie\ chart carbs-pie\ chart""related-recipes related-recipes related-recipes related-recipes";
    }

    .food-info {
        grid-area: food-info;
    }

    .image {
        grid-area: image;
    }

    .ingredients {
        grid-area: ingredients;
    }

    .nutrient-table {
        grid-area: nutrient-table;
    }

    .diet-pie\ chart {
        grid-area: diet-pie\ chart;
    }

    .fat-pie\ chart {
        grid-area: fat-pie\ chart;
    }

    .carbs-pie\ chart {
        grid-area: carbs-pie\ chart;
    }

    .related-recipes {
        grid-area: related-recipes;
    }
        
    }
    */

</style>
