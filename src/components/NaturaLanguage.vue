<template>
    <div id="parentContainer">
        <div id="natural-box">

            <mdb-tabs :active="0" default :links="[
      { text: 'Exercise', slot: 'custom-slot' },
      { text: 'Food' },
      { text: 'Contact' }]" :transition-duration="0.5" transition-style="linear">
                <div :slot="'custom-slot'">
                    <mdb-container>
                        <mdb-jumbotron class="text-center hoverable">
                            <mdb-row>
                                <mdb-col md="4" offsetMd="1" class="m-3">
                                    <mdb-view class='mobile-pic' src="https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/exercise.jpg">
                                        <a>
                                            <mdb-mask waves overlay="white-slight" /></a>
                                    </mdb-view>
                                    <mdb-card class="desk-card">
                                        <mdb-view hover>
                                            <a href="#!">
                                                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" />
                                                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                            </a>
                                        </mdb-view>
                                        <mdb-card-body>
                                            <mdb-card-title>Card with waves effect</mdb-card-title>
                                            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                            <mdb-btn color="primary">Button</mdb-btn>
                                        </mdb-card-body>
                                    </mdb-card>
                                </mdb-col>
                                <mdb-col md="7" class="text-md-left ml-3 mt-3">
                                    <a href="#!" class="green-text">
                                        <h6 class="h6 pb-1">
                                            <mdb-icon icon="desktop" class="pr-1" />Calories</h6>
                                    </a>
                                    <h4 class="h4 mb-4"> Estimate calories burned for various exercises using natural language</h4>
                                    <p class="font-weight-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, totam
                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                    <p class="font-weight-normal">Enter your workout</p>

                                    <mdb-input type="textarea" id="exampleInput" label="Example: ran 3 miles, 30 min weight lifting" v-model="workoutText" />

                                    <mdb-input label="your age, weight(kg), gender in that order" />

                                    <mdb-btn color="success">Calculate Exercise</mdb-btn>
                                    <div id="mobile-card">
                                        <mdb-card>
                                            <mdb-view hover>
                                                <a href="#!">
                                                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                                </a>
                                            </mdb-view>
                                            <mdb-card-body>
                                                <mdb-card-title>Card with waves effect</mdb-card-title>
                                                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                                <mdb-btn color="primary">Button</mdb-btn>
                                            </mdb-card-body>
                                        </mdb-card>
                                    </div>
                                </mdb-col>
                            </mdb-row>
                        </mdb-jumbotron>
                    </mdb-container>
                </div>
                <div :slot="'Food'">
                    <mdb-container>
                        <mdb-jumbotron class="text-center hoverable">
                            <mdb-row>
                                <mdb-col lg="5">
                                    <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                                        <a>
                                            <mdb-mask overlay="white-slight" waves />
                                        </a>
                                    </mdb-view>
                                </mdb-col>
                                <mdb-col lg="7">
                                    <a class="green-text">
                                        <h6 class="font-weight-bold mb-3">
                                            <mdb-icon icon="utensils" class="pr-2" />Food</h6>
                                    </a>
                                    <h3 class="font-weight-bold mb-3 p-0">
                                        <strong>Get detailed nutrient breakdown of any natural language text</strong>
                                    </h3>
                                    <p>Enter a query like " 1 cup mashed potatoes and 2 tbsp gravy " to see how it works. We support tens of thousands of foods, including international dishes.</p>
                                    <p>Enter your food</p>
                                    <mdb-input type="textarea" id="exampleInput" label="Example: 2 apples, 1kg rice, 1tsp sugar" />
                                    <mdb-btn color="success" size="md" class="waves-light ">Calculate Foods</mdb-btn>
                                </mdb-col>
                            </mdb-row>
                        </mdb-jumbotron>
                        <mdb-jumbotron class="text-center hoverable">
                            <mdb-row>
                                <mdb-col lg="7">
                                    <a class="pink-text">
                                        <h6 class="font-weight-bold mb-3">
                                            <mdb-icon icon="image" class="pr-2" />Lifestyle
                                        </h6>
                                    </a>
                                    <h3 class="font-weight-bold mb-3 p-0">
                                        <strong>Title of the news</strong>
                                    </h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                    <p>by
                                        <a>
                                            <strong>Carine Fox</strong>
                                        </a>, 14/08/2018</p>
                                    <mdb-btn color="pink" size="md" class="mb-lg-0 mb-4 waves-light">Read more</mdb-btn>
                                </mdb-col>
                                <mdb-col lg="5">
                                    <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                                        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image" />
                                        <a>
                                            <mdb-mask overlay="white-slight" waves />
                                        </a>
                                    </mdb-view>
                                </mdb-col>
                            </mdb-row>
                        </mdb-jumbotron>
                    </mdb-container>
                </div>
                <div :slot="'Contact'">
                    <mdb-container>
                        <mdb-jumbotron class="text-center hoverable">
                            <form>
                                <p class="h4 text-center mb-4">Write to us</p>
                                <div class="grey-text">
                                    <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right" />
                                    <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                                    <mdb-input label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                    <mdb-textarea :rows="2" label="Your message" icon="pencil" />
                                </div>
                                <div class="text-center">
                                    <mdb-btn outline="secondary">Send
                                        <mdb-icon far icon="paper-plane" class="ml-1" />
                                    </mdb-btn>
                                </div>
                            </form>
                        </mdb-jumbotron>
                    </mdb-container>
                </div>
            </mdb-tabs>
        </div>
        
        <input @click='postExercise' type="button" value="my button" style="margin-top:2rem;">

        <p>{{workoutText}}</p>


    </div>

</template>




<script>
    import {fetchCalories} from '../naturalRequest';
    //import axios from "axios";
    import {
        mdbCard,
        mdbCardImage,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
    } from 'mdbvue';
    import {
        mdbContainer,
        mdbCol,
        mdbRow,
        mdbIcon,
        mdbTabs,
        mdbJumbotron,
        mdbView,
        mdbMask,
        mdbBtn,
        mdbTextarea,
        mdbInput
    } from 'mdbvue';

    export default {
        name: 'TabPage',
        components: {
            mdbContainer,
            mdbCol,
            mdbRow,
            mdbView,
            mdbIcon,
            mdbTabs,
            mdbJumbotron,
            mdbMask,
            mdbBtn,
            mdbTextarea,
            mdbInput,
            mdbCard,
            mdbCardImage,
            mdbCardBody,
            mdbCardTitle,
            mdbCardText
        },
        data() {
            return {
                exerciseQuery: "",
                workoutText: "",

            }
        },
        methods: {
            postExercise() {
                fetchCalories()
            }
            /*
            fetchCalories() {
                console.log('clicked')
                this.postExercise()

            },
            postExercise() {
                axios.post("https://trackapi.nutritionix.com/v2/natural/exercise",{
                        headers:{
                            "x-app-key":"76abf843077e9817f6a2139ae1b91e16",
                            "x-app-id":"c4d6ac49",
                            "x-remote-user-id":0,
                            "Content-Type":"application/json"
                        },
                        body:{
                            "query":"ran 3 miles",
                            "gender":"female",
                            "weight_kg":72.5,
                            "height_cm":167.64,
                            "age":30
                        }
                    })
                    .then(response => {
                        console.log(response)
                    })
                    .catch(err => {
                        console.log('your error pierce:'+err)
                    })

            }*/
        }
    };
    //@input="" 

</script>


<style>
    #parentContainer {
        width: 100%;
        border: 1px solid red
    }

    #natural-box {
        position: relative;
        top: 2rem;
        width: 90%;
        margin: auto;
    }

    #mobile-card {
        display: none;
    }

    .mobile-pic {
        display: none;
    }

</style>
