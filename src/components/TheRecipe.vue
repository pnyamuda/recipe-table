<template>
    <div>


        <div>

            <div class="grid-container">

                <div class="food-info">
                    <div class="image"></div>

                    <div class="source-block">

                    </div>





                    <div class="second-block">

                        <div class="ingredients">

                        </div>
                        <div class="nutrient-table">
                            <div>


                            </div>
                        </div>



                    </div>


                    <div class="third-block">

                        <div class="diet-pie">

                        </div>
                        <div class="fat-pie">

                        </div>
                        <div class="carbs-pie">

                        </div>
                        <div class="related-recipes"></div>
                    </div>



                </div>



            </div>


            <div class="parent">
                <div class="div1"><img v-bind:src="src"></div>
                <div class="div2">
                    <div class="name-source">
                        <p id="recipe-name">{{name}}</p>
                        <p id="recipe-source">By {{source}}</p>

                    </div>
                    <div id="time-box">
                        <p>Yield: {{servings}} servings</p>
                        <p>Ready in: {{time}} minutes</p>
                        <p>Calories: {{calories}}</p>
                        <div id="recipe-diets">
                            <p v-for="diet in diets" :key="diet.id">{{diet}}</p>
                        </div>

                    </div>



                </div>

                <div class="div3">
                    <p v-for="ingredient in ingredients" :key="ingredient.id">{{ingredient.original}}</p>
                </div>
                
                
                  <div class="div4">
                    <p>{{instructions}}</p>
                </div>

                
                
              
                <div class="div6">
                    <BalancedChart></BalancedChart>
                </div>
                
                
                  <div class="div5">
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






    </div>
</template>

<script>
    import axios from "axios";
    import {
        mdbTbl,
        mdbTblHead,
        mdbTblBody,
        mdbScrollbar
    } from 'mdbvue';
    
    import BalancedChart from "./BalancedChart.vue";
     import {eventBus} from '../main'


    export default {
        name: "TheRecipe",
        components: {
            mdbTbl,
            mdbTblHead,
            mdbTblBody,
            mdbScrollbar,
            BalancedChart,
            
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
                balancedDiet:"",
            }
        },
        methods: {

        },
        created() {
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
                    this.diets = info.data.diets;

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
                
                let allNutrientsCombined=info.data.bad.concat(info.data.good);
                this.totalNutrients=allNutrientsCombined;
                
                let majorNutri=[];
                majorNutri.push(info.data.fat);
                majorNutri.push(info.data.carbs);
                majorNutri.push(info.data.protein);
                //removing the grams symbols to get only numbers
                
                majorNutri=majorNutri.map(val => parseInt(val));
                
                this.balancedDiet=majorNutri
                console.log(this.balancedDiet);
                
                //emittig an event;
                
                eventBus.$emit("newInfo",this.balancedDiet)
               
                
                    /*

                        this.name = info.recipe.label;
                        this.src = info.recipe.image;
                        this.ingredients = info.recipe.ingredientLines;
                        this.servings = info.recipe.yield;
                        this.time = info.recipe.totalTime;
                       
                        this.source = info.recipe.source;
                        //changing all the numbers to 2 decimal places
                        this.totalNutrients = info.recipe.digest.reduce((acc, next) => {
                            next.daily = next.daily.toFixed(2);
                            next.total = next.total.toFixed(2);
                            acc.push(next);
                            return acc
                        }, [])
                        this.dailyPer = info.recipe.totalDaily;
                        */

                })
                .catch(err => {
                    console.log(err)
                })




        }
    };

</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
    
    #recipe-name {
        font-size: 2rem;
    }
    .recipe-name {
        display: flex;
        flex-direction: column;
    }

    #theRecipe {
        width: 90%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto auto;
        margin: auto;
    }

    #bar-graph {}

    .recipe-info {}

    #time-box {
        display:grid;
        grid-template-columns: 30% 40% 30%;
        grid-template-rows: 2rem 2rem;

    }
    #recipe-diets {
        grid-area: 2/1/3/3;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
    }

    .image {}

    .diet-pie,
    .fat-pie,
    .carbs-pie {}

    .food-info,
    .second-block,
    .third-block {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: auto;
        position: relative;
        justify-content: center;
        flex-wrap: wrap;
    }

    .source-block {
        display: flex;
        flex-direction: column;
    }

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
        grid-area: 1 / 1 / 2 / 2;
    }

    .div2 {
        grid-area: 1 / 2 / 2 / 5;
    }

    .div3 {
        grid-area: 2 / 1 / 3 / 2;
        border: 1px solid red;
    }

    .div4 {
        grid-area: 2 / 2 / 3 / 5;
        border: 1px solid red;
    }

    .div5 {
        grid-area: 3 / 1 / 4 / 2;
         border: 1px solid red;
    }

    .div6 {
        grid-area: 3 / 2 / 4 / 5;
    }

    .div7 {
        grid-area: 5 / 2 / 6 / 4;
    }

    /*
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
*/

</style>
