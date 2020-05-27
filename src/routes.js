import HomePage from "./components/HomePage.vue";
import AdvancedSearch from "./components/AdvancedSearch.vue";





export default [

	{
		path: '',
		component: HomePage,
		
	},
	{
		path: '/search/:category',
		component: AdvancedSearch,
		
	}
]
