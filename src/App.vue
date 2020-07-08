<template>
	<div id="app">
		<Top id="nav"></Top>
		<router-view></router-view>
        <Footer id="foot"></Footer>
	</div>
</template>

<script>
	import Top from "./components/Top.vue";
    import Footer from "./components/Footer.vue";



	export default {
		name: "App",
		components: {
			Top,
            Footer
		},
		data() {
			return {
			}
		},
		methods: {
			
		},
	};

</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

	#app {}

	#nav {
		position: relative;
        margin-bottom:0.1rem;
	}

	#slider {
		position: relative;
		top: 1.5rem;
        
	}
    #foot {
        position: relative;
        top: 8rem;
    }

</style>
