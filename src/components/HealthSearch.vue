<template>

    <div class="my-selector">



        <div>
            <label class="typo__label">Diet</label>
            <multiselect :close-on-select="false" v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        </div>




    </div>



</template>





<script>
    import Multiselect from 'vue-multiselect';

    export default {
        props: [],
        components: {
            Multiselect
        },
        data() {
            return {
                value: [],
                options: [{
                        name: 'Gluten Free',
                        code: 'alcohol'
                    },
                    {
                        name: 'Vegetarian',
                        code: 'veget'
                    },
                    {
                        name: 'Vegan',
                        code: 'vega'
                    },
                    {
                        name: 'Ketogenic',
                        code: 'sugar'
                    },
                    {
                        name: 'Lacto-Vegetarian',
                        code: 'fish'
                    },
                    {
                        name: 'Ovo-Vegetarian',
                        code: 'red'
                    },
                    {
                        name: 'Pescetarian',
                        code: 'oil'
                    },
                    {
                        name: 'Paleo',
                        code: 'peanut'
                    },
                    {
                        name: 'Primal',
                        code: 'dairy'
                    },
                    {
                        name: 'Whole30',
                        code: 'veget'
                    }

                ],
            }
        },
        methods: {
            addTag(newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag);
                this.value.push(tag);
            }
        },
        watch: {
            value() {
                this.$emit("valueChanged", this.value)
            },
        }
    }

</script>



<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style>
    .my-selector {
        width: 20rem;

    }

</style>
