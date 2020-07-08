<template>
    <div>

        <imageSlide></imageSlide>



        <div id="intro-box">
            <h1>Find thousands of tested, healthy, whole-food recipes</h1>
        </div>


        <div class="meal-title">

            <p>Type of Meals</p>
        </div>


        <div class="type1">

            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Dessert</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=dessert"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Main Course</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=main course"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Breakfast</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=breakfast"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>


            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Appetizer</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=appetizer"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Salad</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=salad"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>

            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Snack</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=snack"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>


        </div>


        <div class="meal-title">
            <p>Around the World</p>
        </div>


        <div class="type1">

            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>African</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=African"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Chinese</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Chinese"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>French</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=French"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>


            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Indian</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Indian"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Korean</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Korean"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
            </div>

            <div class="effect-1">
                <div class="effect-img">
                    <img src="../assets/vegan.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Mexican</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Mexican"><a class="btn" href="#">
                                Read More
                            </a></router-link>
                    </div>
                </div>
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
            /*
            displayFoodType(type) {
                this.$router.push(`search/${type}`)
            } */

        },
        mounted() {

        }
    };

</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

    .type1 {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    #intro-box {
        width: 95%;
        position: relative;
        top: 2rem;
        margin: auto;
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: auto;


    }

    div h1 {
        width: 100%
    }

    .meal-title {
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 4rem;

    }


    .myImg {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: 1px solid red;
        justify-content: space-evenly;
    }

    .myLove {
        padding: 0.1rem 1rem 0.5rem 1rem;
        cursor: pointer;

    }

    .myLove:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, .4);
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


  
    
    @media (min-width:480px) and (max-width:768px) {
        .type1 {
            display: grid;
            grid-template-columns: 49% 49%;
            grid-column-gap: 2%;
            
        }
    }
    @media (min-width:768px) {
        .type1 {
            display: grid;
            grid-template-columns: 32.5% 32.5% 32.5%;
            grid-column-gap: 2.5%;
            
        }
        
    }
    
    
    /*
    
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
    
    
    */

</style>
