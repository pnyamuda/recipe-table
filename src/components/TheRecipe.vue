<template>
    <div>

        <div id="theRecipe">

            <div class="recipe-info">
                <img v-bind:src="src">
            </div>

            <div>
                <div>
                    <p>{{name}}</p>
                    <p>By {{source}}</p>

                </div>
                <div id="time-box">
                    <p>Yield: {{servings}} servings</p>
                    <p>Total Time: {{time}} minutes</p>
                    <p>Calories: {{calories}}</p>

                </div>

            </div>

            <div class="recipe-info">
                <p v-for="ingredient in ingredients" :key="ingredient.id">{{ingredient}}</p>
            </div>


            <div class="recipe-info">

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
                                <td>{{nutrient.label}}</td>
                                <td>{{nutrient.total}} {{nutrient.unit}}</td>
                                <td>{{nutrient.daily}}</td>
                            </tr>


                        </mdb-tbl-body>
                    </mdb-tbl>
                </mdb-scrollbar>
            </div>




        </div>
        <div id="bar-graph">
            <BarGraph></BarGraph>
        </div>


        <div>
            <BalancedChart></BalancedChart>

        </div>

        <div>
            <CarbsChart></CarbsChart>

        </div>



    </div>
</template>

<script>
    import {
        mdbTbl,
        mdbTblHead,
        mdbTblBody,
        mdbScrollbar
    } from 'mdbvue';

    import {
        eventBus
    } from "../main";
    import BarGraph from "./BarGraph.vue";
    import CarbsChart from "./CarbsChart.vue";
    import BalancedChart from "./BalancedChart.vue";


    export default {
        name: "TheRecipe",
        components: {
            mdbTbl,
            mdbTblHead,
            mdbTblBody,
            mdbScrollbar,
            BarGraph,
            BalancedChart,
            CarbsChart
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
            }
        },
        methods: {

        },
        created() {
            eventBus.$on("showRecipe", (info) => {
                this.name = info.recipe.label;
                this.src = info.recipe.image;
                this.ingredients = info.recipe.ingredientLines;
                this.servings = info.recipe.yield;
                this.time = info.recipe.totalTime;
                this.calories = info.recipe.calories;
                this.source = info.recipe.source;
                //changing all the numbers to 2 decimal places
                this.totalNutrients = info.recipe.digest.reduce((acc, next) => {
                    next.daily = next.daily.toFixed(2);
                    next.total = next.total.toFixed(2);
                    acc.push(next);
                    return acc
                }, [])
                this.dailyPer = info.recipe.totalDaily;

            })
        }
    };

</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

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
        display: flex;
        flex-direction: column;
        border: 1px solid;
    }

</style>
