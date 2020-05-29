import HomePage from "./components/HomePage.vue";
import AdvancedSearch from "./components/AdvancedSearch.vue";
import TheRecipe from "./components/TheRecipe.vue";





export default [

	{
		path: '',
		component: HomePage,
		
	},
	{
		path: '/search/:category',
		component: AdvancedSearch,
		
	},
	{
		path: '/search',
		component: AdvancedSearch,
		
	},
	{
		path: '/recipe',
		component: TheRecipe,
		
	}
]
