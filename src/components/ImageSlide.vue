<template>

	<div>

		<agile :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay :initial-slide="3" :navButtons="false"><img class="slide" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/105168995/original/af8c781921c5b18160c2e786a9a982caf39955cb/shoot-quality-food-photography.jpg" /><img class="slide" src="https://www.itl.cat/pngfile/big/10-103370_salad-food-wallpaper-food-images-high-resolution.jpg" /><img class="slide" src="https://images7.alphacoders.com/346/thumb-1920-346107.jpg" /><img class="slide" src="https://2.bp.blogspot.com/-nS_We57yD94/XMHKEuJeMNI/AAAAAAAAAN0/dZfrB6TaNgwomPfVbhFM48cx7nADypLsQCLcBGAs/s1600/IMG_20190421_145336.jpg" /><img class="slide" src="https://www.monpetitfour.com/wp-content/uploads/2017/07/cake-1971552_1920.jpg" /><img class="slide" src="https://anotherfoodcritic.files.wordpress.com/2015/09/bobs-shanghai-66-mapo-tofu.jpg" /><img class="slide" src="https://www.fodors.com/wp-content/uploads/2017/09/Weird-European-Foods-hero.jpg" />
		</agile>



	</div>



</template>


<script>
	import {VueAgile} from 'vue-agile';

	export default {
		components: {
			agile: VueAgile
		}
	}

</script>

<style>
	.agile__dots {
		bottom: 10px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		right: 30px;
		position: absolute;
	}

	.agile__dot {
		margin: 5px 0;
	}

	.agile__dot button {
		background-color: transparent;
		border: 1px solid #fff;
		cursor: pointer;
		display: block;
		height: 10px;
		font-size: 0;
		line-height: 0;
		margin: 0;
		padding: 0;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		width: 10px;
	}

	.agile__dot--current button,
	.agile__dot:hover button {
		background-color: #fff;
	}

	.slide {
		display: block;
		/*height: 500px;*/
        height: 300px;
		-o-object-fit: cover;
		object-fit: cover;
		width: 100%;
	}
    
    @media (min-width:768px) and (max-width:1024px) {
        .slide {
              height: 400px;
        }
        
        
    }
    @media (min-width:1024.1px) {
        .slide {
              height: 500px;
        }
        
    }

</style>
