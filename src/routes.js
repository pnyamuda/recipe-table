import HomePage from "./components/HomePage.vue";
import AdvancedSearch from "./components/AdvancedSearch.vue";
import TheRecipe from "./components/TheRecipe.vue";
import Fridge from "./components/Fridge.vue";
import NaturaLanguage from "./components/NaturaLanguage.vue";





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
		path: '/recipe/:information',
		component: TheRecipe,
		
	},
    {
		path: '/recipes-in-your-fridge',
		component:Fridge,
		
	},
     {
		path: '/natural-language',
		component:NaturaLanguage,
		
	}
]
