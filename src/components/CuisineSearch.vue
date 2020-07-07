<template>

    <div class="my-selector">



        <div>
            <label class="typo__label">Cuisine Labels</label>
            <multiselect :close-on-select="false" v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="false" @tag="addTag"></multiselect>
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
                value:[],
                options: [{
                        name: 'American',
                        code: 'americ'
                    },
                    {
                        name: 'African',
                        code: 'afrc'
                    },

                    {
                        name: 'British',
                        code: 'brit'
                    },
                    {
                        name: 'Caribbean',
                        code: 'cari'
                    },
                    {
                        name: 'Cajun',
                        code: 'euro'
                    },
                    {
                        name: 'Chinese',
                        code: 'china'
                    },
                    {
                        name: 'Eastern European',
                        code: 'east'
                    },
                    {
                        name: 'European',
                        code: 'europ'
                    },
                    {
                        name: 'French',
                        code: 'france'
                    },

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
                this.value5.push(tag);
            }
        },
        watch: {
            value() {
                this.$emit("cuisineChanged", this.value)
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
