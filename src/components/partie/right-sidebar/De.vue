<template>
    <div id="content-de">
        <button id="de" class="btn btn-danger btn-lg" :class="{'spin-on': estLance}" :disabled=estLance v-on:click="lancerDe()">{{valeur_des}}</button>
    </div>
</template>

<script>
export default {
    name : "De",
    data(){
        return {
            valeur_des : 1,
            estLance : false
        }
    },
    methods : {
        lancerDe(){
            //this.estLance = true;
            this.valeur_des = Math.floor(Math.random() * Math.floor(20)) +1
        }
    }
}
</script>

<style>

</style>
