<template>
    <div>

        <imageSlide id="my-slider"></imageSlide>



        <div id="intro-box">
            <h1>Find thousands of tested, healthy, whole-food recipes.
                <!--Whether you’re in the mood for something warm, cheesy or full of carbs, you’re sure to find exactly what you’re craving. From soups to appetizers, these recipes will soothe your soul and fill your stomach. You can find recipes based on meal types, cuisines and diets.-->
            </h1>
            <p class="intro-text">Whether you’re in the mood for something warm, cheesy or full of carbs, you’re sure to find exactly what you’re craving. From soups to appetizers, these recipes will soothe your soul and fill your stomach. You can also find recipes based on meal types, cuisines and diets.</p>
        </div>


        <div class="meal-title">

            <p>Type of Meals</p>
        </div>


        <div class="type1">

            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fupdated_main_images%2F0211-vanilla-cheesecake-cherry-topping-x.jpg%3Fitok%3Dp2H6vW0H" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Dessert</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=dessert"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Main Course</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=main course"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://cdn.vox-cdn.com/thumbor/hM7GJ9Rmw1ridaYbc7kCK2RX8o8=/0x0:1080x607/1200x900/filters:focal(454x218:626x390)/cdn.vox-cdn.com/uploads/chorus_image/image/59417067/shepherdess.0.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Breakfast</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=breakfast"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>


            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://assets.kraftfoods.com/recipe_images/opendeploy/204521-ed1063f771b63748e585e1bce3d7e0676bd7f516_642x428.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Appetizer</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=appetizer"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://i2.wp.com/theculinarycook.com/wp-content/uploads/2019/05/types-of-salad-cobb.jpg?fit=900%2C600&ssl=1" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Salad</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=salad"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>

            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2015/09/22071529/shutterstock_248403373-750x500.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Snack</h2>
                    <div class="effect-btn">
                        <router-link to="/search/type=snack"><a class="btn" href="#">
                                See Recipes
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
                    <img src="https://buzzsouthafrica.com/wp-content/uploads/nshima.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>African</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=African"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/12/13/0/CC-ching-he-huang_yangzhou-fried-rice-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1360706912125.jpeg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Chinese</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Chinese"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://i.pinimg.com/originals/f6/e4/7a/f6e47aa3f4f3c097f88f2867e0a9f080.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>French</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=French"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>


            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Indian</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Indian"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>



            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://www.simplyrecipes.com/wp-content/uploads/2015/09/mulligatawny-soup-horiz-a-1500.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Korean</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Korean"><a class="btn" href="#">
                                See Recipes
                            </a></router-link>
                    </div>
                </div>
            </div>

            <div class="effect-1">
                <div class="effect-img">
                    <img src="https://assets.site-static.com/userFiles/1183/image/best-mexican-food-boulder-co.jpg" alt="Image">
                </div>
                <div class="effect-text">
                    <h2>Mexican</h2>
                    <div class="effect-btn">
                        <router-link to="/search/cuisine=Mexican"><a class="btn" href="#">
                                See Recipes
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
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap');

    * {
        font-family: 'Cabin', sans-serif;
        font-size: 1rem;
    }



    #my-slider {
        position: relative;
        top: -0.1rem;
    }

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

    .intro-text {
        text-align: center;
        position: relative;
        top: 0.5rem;
    }

    h1 {
        font-size: 2rem;
        text-align: center;
        margin: auto;
        font-weight: bold;


    }


    div h1 {
        width: 100%
    }

    .meal-title p {
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
        margin-top: 4rem;
        font-weight: bold;

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

        #intro-box {
            width: 70%;

        }

    }

    @media (min-width:768px) {
        .type1 {
            display: grid;
            grid-template-columns: 32.5% 32.5% 32.5%;
            grid-column-gap: 2.5%;

        }

        #intro-box {
            width: 60%;

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
