<template>

	<div>

		<agile :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay :initial-slide="3" :navButtons="false"><img class="slide" src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" /><img class="slide" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" /><img class="slide" src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" /><img class="slide" src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" /><img class="slide" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" /><img class="slide" src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" /><img class="slide" src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
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

</style>
