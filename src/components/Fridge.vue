<template>
    <div id="">
        <div class="my-fridge">
            <img src="https://cnet4.cbsistatic.com/img/UTTvA8qQKoJ995Egi3hbu-xaMNQ=/940x528/2017/07/19/c55ecc52-448a-4bd5-8227-6fd77a60f239/ht-31things.jpg">
            <p>Ever wondered what recipes you can cook with the ingredients you have in your fridge or pantry? Find recipes that use as many of the given ingredients as possible and require as few additional ingredients as possible.</p>
        </div>

        <div class="search-block">
            <p id="list-title">List all your ingredients, separated by a comma</p>
            <section class="preview">


                <mdb-input class="mt-0 mb-3" placeholder="add the comma separated ingredients" ariaDescribedBy="button-addon2" v-model="ingred">
                    <mdb-btn @click="searchRec" color="default" size="md" group slot="append" id="button-addon2">Search Recipes</mdb-btn>
                </mdb-input>



            </section>
        </div>

        <div class="myImg">

            <div class="container myLove" v-for="foodRecipe in foodRecipes" :key="foodRecipe.id">
                <div class="content">
                    <router-link :to="'/recipe/'+foodRecipe.id" exact> <a>
                            <div class="content-overlay" v-on:click="getRecipe" v-bind:id="foodRecipe.id"></div>
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

        <Loader></Loader>
    </div>
</template>

<script>
    import {
        mdbInput,
        mdbBtn
    } from 'mdbvue';
    import axios from "axios";
    import Loader from "./Loader.vue";
    import {
        eventBus
    } from '../main'


    export default {
        name: "Fridge",
        components: {
            mdbInput,
            mdbBtn,
            Loader

        },
        data() {
            return {
                ingred: "",
                requestIngredients: "",
                foodRecipes: "",

            }
        },
        methods: {
            getRecipe(event) {

                let foodId = event.target.id;
                console.log(foodId);

                this.$router.push(`/recipe/${foodId}`)

            },

            fridgeRecipes(par) {

                //running the loader
                // eventBus.$on("runLoader", myFunction => {
                //       myFunction();
                //  });
                eventBus.$emit("stopLoader", true);


                axios
                    .get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=5900942a331f4623910b3ff1631c6b1b&ingredients=${par}&number=12`)
                    .then(response => {
                        this.foodRecipes = response.data;
                        console.log(response);

                        //stopping the loader

                        eventBus.$emit("stopLoader", false);

                    })
                    .catch(er => {
                        console.log(er)
                    })

            },

            //changing a comman separeted string into an array
            searchRec() {
                let word = "";
                let arr = this.ingred.split("");
                let items = arr.reduce((acc, next, indx) => {
                    if (indx === arr.length - 1) {
                        word += next;
                        acc.push('+' + word);
                    } else if (next === ',') {
                        acc.push('+' + word);
                        word = "";
                    } else {
                        word += next
                    }
                    return acc
                }, []);
                this.requestIngredients = items.join();
                this.fridgeRecipes(this.requestIngredients)
            }

        },
        created() {
            //starting the loader
            eventBus.$on("runLoader", myFunction => {
                myFunction();
            })

            axios
                .get('https://api.spoonacular.com/recipes/random?apiKey=5900942a331f4623910b3ff1631c6b1b&number=12')
                .then(response => {
                    this.foodRecipes = response.data.recipes;
                    console.log(response.data.recipes);

                    //stopping the loader

                    eventBus.$emit("stopLoader", false);

                })
                .catch(er => {
                    console.log(er)
                })

        }


    };

</script>

<style scoped>
    .my-fridge {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
    }

    .my-fridge img {
        max-width: 100%;
        display: block;
        height: auto;
    }

    .my-fridge p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
    }

    section.preview {
        border: 1px solid #e0e0e0;
        padding: 15px;
        width: 100%;
        margin: auto;
    }

    #list-title {
        text-align: center;

    }

    .search-block {
        width: 90%;
        margin-top: 2rem;
        margin: auto;

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



    @media (min-width:480px) and (max-width:768px) {
        .myImg {
            display: grid;
            grid-template-columns: 48% 48%;
            grid-column-gap: 2%;

        }

        .search-block {
            width: 70%;
        }

        .my-fridge {
            width: 80%;
        }


    }

    @media (min-width:768.1px) and (max-width:1023.9px) {

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

        .search-block {
            width: 50%;
        }

        .my-fridge {
            width: 70%;
        }





    }

    @media (min-width:1024px) {

        .myImg {
            display: grid;
            grid-template-columns: 24% 24% 24% 24%;
            grid-column-gap: 1%;
        }


        .selector {
            margin-top: -2rem;
            height: 6rem;
        }

        #search-input {
            margin-top: 0.8rem
        }

        .myImg {
            top: 1rem;
        }

        .search-block {
            width: 50%;
            margin-top: 3rem;
        }

        .my-fridge {
            width: 60%;
        }





    }

</style>
