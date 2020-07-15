<template>
    <div class="vld-parent">
        <loading :color="color" :loader="loader" :active.sync="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage"></loading>

   <!--     <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button> -->
    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

    import {
        eventBus
    } from '../main'


    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true,
                color:"green",
                loader:"bars"
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
            /*    setTimeout(() => {
                    this.isLoading = false
                }, 5000) */
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        },
        created() {
            eventBus.$emit("runLoader",this.doAjax);
            
            eventBus.$on("stopLoader",par=> {
                this.isLoading=par;
            })
            
         

        }
    }

</script>
