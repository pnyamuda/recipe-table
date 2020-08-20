<template>
    <div>
        <div id="natural-box">

            <mdb-tabs :active="0" default :links="[
      { text: 'Exercise', slot: 'custom-slot' },
      { text: 'Blog' },
      { text: 'Contact' }]" :transition-duration="0.5" transition-style="linear">
                <div :slot="'custom-slot'">
                    <mdb-container>
                        <mdb-jumbotron class="text-center hoverable">
                            <mdb-row>
                                <mdb-col md="4" offsetMd="1" class="m-3">
                                    <mdb-view src="https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/exercise.jpg">
                                        <a>
                                            <mdb-mask waves overlay="white-slight" /></a>
                                    </mdb-view>
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
                                    
                                     <mdb-input type="textarea" @input="handleInput" id="exampleInput" label="Example: ran 3 miles, 30min weight lifting"/>
                                    
                                    <mdb-input label="your age, weight(kg), gender in that order" v-model="value" />
                                    
                                    <mdb-btn color="success">Calculate Exercise</mdb-btn>
                                </mdb-col>
                            </mdb-row>
                        </mdb-jumbotron>
                    </mdb-container>
                </div>
                <div :slot="'Blog'">
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
                                        <strong>Title of the news</strong>
                                    </h3>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat mdb-iconcere
                                        possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
                                    <p>by
                                        <a>
                                            <strong>Carine Fox</strong>
                                        </a>, 19/08/2018</p>
                                    <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
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


    </div>

</template>




<script>
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
            mdbIcon,
            mdbTabs,
            mdbJumbotron,
            mdbView,
            mdbMask,
            mdbBtn,
            mdbTextarea,
            mdbInput,
        }
    };

</script>


<style>
    #natural-box {
        position: relative;
        top: 2rem;
    }


</style>
