<template>
    <div id="theRecipe">

        <div class="recipe-info">
            <img v-bind:src="src">
            <p>{{name}}</p>
        </div>

        <div class="recipe-info">
            <p v-for="ingredient in ingredients" :key="ingredient.id">{{ingredient}}</p>
        </div>

        <div class="recipe-info">
            
        </div>
        <div class="recipe-info">
            <p></p>
        </div>

    </div>
</template>

<script>
    import {eventBus} from "../main";


    export default {
        name: "TheRecipe",
        components: {},
        data() {
            return {
                name:"pierce",
                src:"",
                ingredients:"",
            }
        },
        methods: {

        },
        created() {
            eventBus.$on("showRecipe", (info) => {
                this.name=info.recipe.label;
                this.src=info.recipe.image;
                this.ingredients=info.recipe.ingredientLines;
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

    .recipe-info {}

</style>
