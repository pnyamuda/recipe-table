<template>
    <!-- Footer -->
    <mdb-footer color="stylish-color-dark" dark class="font-small pt-4 mt-4">
        <mdb-container class="text-center text-md-left">
            <mdb-row class="text-center text-md-left mt-3 pb-3">
                <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                        <router-link to="/" exact id="logo-lin"><span>Trendy<span id="recip">recipe</span></span></router-link>
                    </h6>
                    <p>uses the Spoonacular API for recipes and nutrition data.</p>
                </mdb-col>
                <hr class="w-100 clearfix d-md-none" />
                <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Trendyrecipe</h6>
                    <p>
                        <router-link to="/" exact><span class="link2">Home</span></router-link>
                    </p>
                    <p>
                        <router-link to="/search/recipe" exact><span class="link2">Advanced Search</span></router-link>
                    </p>
                    <p>
                        <router-link to="/recipes-in-your-fridge" exact><span class="link2">Your Fridge</span></router-link>
                    </p>
                    <p>
                        <router-link to="/natural-language" exact><span class="link2">Calories Burned</span></router-link>
                    </p>
                </mdb-col>
                <!--  <hr class="w-100 clearfix d-md-none" />
                <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                    <p><a href="#!">Your Account</a></p>
                    <p><a href="#!">Become an Affiliate</a></p>
                    <p><a href="#!">Shipping Rates</a></p>
                    <p><a href="#!">Help</a></p>
                </mdb-col> -->
                <hr class="w-100 clearfix d-md-none" />
                <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <!--  <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>-->
                    <p><i class="fas fa-envelope mr-3"></i> ptnrlab@gmail.com</p>
                    <p><i class="fas fa-phone mr-3"></i> +27 81 589 6615</p>
                    <!--    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p> -->
                </mdb-col>
            </mdb-row>
            <hr />
            <mdb-row class="d-flex align-items-center">
                <mdb-col md="8" lg="8">
                    <p class="text-center text-md-left grey-text">&copy; 2020 Copyright: <a href="https://www.MDBootstrap.com">
                            by Pierce Nyamuda </a></p>
                </mdb-col>
                <mdb-col md="4" lg="4" class="ml-lg-0">
                    <div class="text-center text-md-right">
                        <ul class="list-unstyled list-inline">
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </mdb-footer>
    <!-- Footer -->
</template>




<script>
    import {
        mdbFooter,
        mdbContainer,
        mdbRow,
        mdbCol
    } from 'mdbvue';
    export default {
        name: 'FooterPage',
        components: {
            mdbFooter,
            mdbContainer,
            mdbRow,
            mdbCol
        }
    }

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap');

    .link2 {
        color: #ffffff;
        transition: all 0.3s ease-in-out;
    }

    .link2:hover {
        color: lightgreen;
    }


    #logo-lin {
        background-color: transparent;
        color: #ffffff;
        font-family: 'Lobster', cursive;
        font-size: 2rem;

    }

    #recip {
        color: lightgray;

    }

    p,
    h6 {
        font-family: 'Cabin', sans-serif;
    }

</style>
