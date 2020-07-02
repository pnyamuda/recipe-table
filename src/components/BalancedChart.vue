<template>
    <div>

        <mdb-container>
            <mdb-doughnut-chart :data="myData" :options="doughnutChartOptions" :width="600" :height="300"></mdb-doughnut-chart>
        </mdb-container>

    </div>
</template>

<script>
    import {
        eventBus
    } from '../main'
    import {
        mdbDoughnutChart,
        mdbContainer
    } from "mdbvue";


    export default {
        name: "ChartPage",
        components: {
            mdbDoughnutChart,
            mdbContainer
        },
        data() {
            return {
                myData: {
                    labels: ["Fats", "Carbohydrates", "Proteins"],
                    datasets: [{
                        data: [],
                        backgroundColor: [
                            "#F7464A",
                            "#46BFBD",
                            "#4D5360"
                        ],
                        hoverBackgroundColor: [
                            "#FF5A5E",
                            "#5AD3D1",
                            "#616774"
                        ]
                    }]
                },
                doughnutChartOptions: {
                    responsive:true,
                    maintainAspectRatio: false,
                    onclick:"none",
                }
            };
        },
        methods: {

        },
        created() {
            eventBus.$on("newInfo", arr => {
                this.myData.datasets[0].data = arr
            })

        }
    };

</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

</style>
