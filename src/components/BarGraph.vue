<template>
    <div>

        <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"></fusioncharts>


    </div>
</template>





<script>
    import {
        eventBus
    } from "../main";


    export default {
        name: "ChartPage",
        components: {

        },
        data() {
            return {
                newData: "",
                type: 'pie3d',
                width: '100%',
                height: '400',
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": "Fats",
                        "subCaption": "Types of fats and their quantities",
                        "showValues": "1",
                        "showPercentInTooltip": "0",
                        "numberPrefix": "g",
                        "enableMultiSlicing": "1",
                        "theme": "fusion"
                    },
                    "data": [{
                        "label": "Saturated",
                        "value": "300000"
                    }, {
                        "label": "Trans",
                        "value": "230000"
                    }, {
                        "label": "Monounsaturated",
                        "value": "180000"
                    }, {
                        "label": "Polyunsaturated",
                        "value": "270000"
                    }]
                }


            };
        },
        methods: {

        },
        computed: {


        },
        created() {
            eventBus.$on("showRecipe", (val) => {
                this.dataSource.data = val.recipe.digest[0].sub.reduce((acc,next) => {
                    let myObject={};
                    myObject.label=next.label;
                    myObject.value=next.total;
                    acc.push(myObject);
                    return acc
                },[])
                

                // let newValues = Object.values(this.newData).map(val => val.quantity.toFixed(1));
                //let newLabels = Object.values(this.newData).map(val => val.label);
                console.log(this.newData);
                
                


            })

        }
    };

</script>
