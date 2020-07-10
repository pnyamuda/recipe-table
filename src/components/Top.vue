<template>
    <div id="my-block">

        <div id="nav-container">
            <mdb-navbar color="default-color-dark" dark>
                <mdb-navbar-brand href="https://mdbootstrap.com/">
                    <router-link to="/" exact id="logo-link"><span>Trendy<span id="reci">recipe</span></span></router-link>
                </mdb-navbar-brand>
                <mdb-navbar-toggler>
                    <mdb-navbar-nav>
                        <mdb-nav-item href="#" active>
                            <router-link to="/" exact><span class="my-links">Home</span></router-link>
                        </mdb-nav-item>
                        <mdb-nav-item href="#">
                            <router-link to="/search/recipe" exact><span class="my-links">Advanced Search</span></router-link>
                        </mdb-nav-item>
                        <!--         <mdb-dropdown tag="li" class="nav-item">
                            <mdb-dropdown-toggle tag="a" navLink color="default-color-dark" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
                            <mdb-dropdown-menu>
                                <mdb-dropdown-item>Action</mdb-dropdown-item>
                                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                            </mdb-dropdown-menu>
                        </mdb-dropdown> -->
                    </mdb-navbar-nav>
                    <mdb-form-inline color="default-color-dark">
                        <mdb-input v-model="quickSearch" class="mr-sm-2" type="text" placeholder="over 300 000 recipes" aria-label="Search" />
                        <mdb-btn @click="makeQuickSearch" outline="white" size="sm" class="my-0" type="submit">Search</mdb-btn>
                    </mdb-form-inline>
                </mdb-navbar-toggler>
            </mdb-navbar>


        </div>


    </div>
</template>






<script>
    import {
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
        //  mdbDropdown,
        //    mdbDropdownMenu,
        //       mdbDropdownToggle,
        mdbInput,
        //    mdbDropdownItem,
        mdbFormInline,
        mdbBtn,
    } from 'mdbvue';


    export default {
        name: 'NavbarPage',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            //  mdbDropdown,
            //mdbDropdownMenu,
            //    mdbDropdownToggle,
            //  mdbDropdownItem,
            mdbInput,
            mdbFormInline,
            mdbBtn,
        },
        data() {
            return {
                quickSearch: "",
            }
        },
        methods: {
            makeQuickSearch() {
                this.$router.push(`/search/query=${this.quickSearch}`)

            },
        }
    }

</script>

<style>
     @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Merienda+One&display=swap');
    
     @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@500&display=swap');

    
    .my-links {
        transition: 0.4s;
        color: #ffffff;
        font-size: 1rem;
        text-decoration: none;
        padding: 0 10px;
        margin: 0 10px;
    }

    .my-links:hover {
        background-color: #ffffff;
        color: #EEA200;
        padding: 24px 10px;
    }

    .router-link-active {

    }

    .router-link-active:hover {}

    .my-links, my-0 {
        color: #ffffff;
        font-family: 'Cabin', sans-serif;
    }

    #logo-link {
        background-color: transparent;
        color: #ffffff;
       font-family: 'Lobster', cursive;
        /* font-family: 'Merienda One', cursive;*/
        font-size: 2rem;
    }
    #reci {
        color:lightgray;
    }

    #nav-container {}

</style>
