<template>
    <div>

        <imageSlide></imageSlide>

        <div class="myImg">

            <div class="myLove">

                <div class="contenedor" style='background: url("https://picsum.photos/id/866/600/600");'>
                    <h1>Prueba</h1>
                    <p>Texto de prueba</p>
                </div>
                <div class="nombre">Simple Hover Effect</div>

            </div>


          
        </div>



        <div id="container">




            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>No Sagar</h2>
                    <p> interdum felis in, auctor ligula.</p>
                    <div class="effect-btn">
                        <a id="low-sugar" class="btn" href="#" @click="displayFoodType(low-sugar)">
                            Read More
                        </a>
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
                        <a id="vegan" class="btn" href="#" @click="displayFoodType(vegan)">
                            Read More
                        </a>
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
                        <a id="vegetarian" class="btn" href="#" @click="displayFoodType(Vegetarian)">
                            Read More
                        </a>
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
                        <a class="btn" @click="displayFoodType(balanced)">Read More</a>
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
    //import HomeImages from "./HomeImages.vue";
    import ImageSlide from "./ImageSlide.vue";

    export default {
        name: "HomePage",
        components: {
            // HomeImages,
            ImageSlide,
        },
        data() {
            return {
                HealthyMeals: "",
                Cuisines: "",
                MealTypes: "",
                DishTypes: "",
                DietMeals: "",
                clickType: "",
                foodRecipes: [],
                balanced: "balanced",
                vegetarian: "vegetarian",
                vegan: "vegan",
                'low-sugar': "low-sugar"



            }
        },
        methods: {
            displayFoodType(type) {
                this.$router.push(`search/${type}`)
            }

        },
        mounted() {

        }
    };

</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");




    .contenedor {
        width: 400px;
        height: 200px;
        margin: 2em auto;
        display: block;
        position: relative;
        background: url("https://picsum.photos/id/866/600/600");
        background-position: center !important;
        background-size: 100% 100% !important;
        padding: 1em;
        overflow: hidden;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .contenedor:before {
        position: absolute;
        content: "";
        top: 1em;
        left: 2em;
        width: 0;
        height: 2px;
        background-color: #000;
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
        background-color: #000;
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
        width: 100%;
        font-family: sans-serif;
        font-size: 2rem;
        margin-top: -1rem;
    }

























    .myImg {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid red;
        justify-content: space-evenly;
    }

    .myLove {
        padding:0.1rem 1rem 0.5rem 1rem;
        cursor: pointer;
        
    }
    .myLove:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.4); 
    }


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


    @media (max-width:768px) {

        #container {
            width: 90%;
            display: grid;
            grid-template-columns: 100%;
            margin: auto;
            border: 1px solid;
            position: relative;
            top: 3rem;
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

    }

</style>
