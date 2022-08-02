<template>
<div>
    <div>
        <div id="myBtn">
            <button class="btn" @click="showmobiles">Mobiles</button>
            <div id="myBtn">
                <button class="btn" @click="showshoe">Shoes</button>
                <div id="myBtn">
                    <button class="btn" @click="showearphones">Earphones</button>
                    <div id="myBtn">
                        <button class="btn" @click="showwatches">Watches</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="container" v-for="items in this.cars" :key="items">
                <div class="filterDiv cars">{{items}}</div> -->
    <!-- <div class="filterDiv cars">Mustang GT</div>
                <div class="filterDiv cars">Audi R8</div>
                <div class="filterDiv cars">Rolly Royce Cullian</div> -->
    <!-- </div> -->
</div>
<div v-if="this.showMobile==true">
    <div class="" v-for="items in this.mobiles" :key="items">
        <div class=" ">{{items}}</div>
    </div>
</div>
<div v-if="this.showShoe==true">
    <div class="" v-for="items in this.shoes" :key="items">
        <div class=" ">{{items}}</div>
    </div>
</div>
<div v-if="this.earPhone==true">
    <div class="" v-for="items in this.earphones" :key="items">
        <div class=" ">{{items}}</div>
    </div>
</div>
<div v-if="this.showWatch==true">
    <div class="" v-for="items in this.watches" :key="items">
        <div class=" ">{{items}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "filter-demo",
    data() {
        return {
            myarr: [],
            mobiles: ["Apple Iphone", "Samsung", "OnePlus", "Hauvei"],
            shoes : ["nike","puma","red-chief","bata"],
            earphones :["boat","Apple Air-pod","Oneplus Buds","Wired earphones"],
            watches : ["titan","G-shock","Rolex","Fossil"],
            showMobile: false,
            showShoe: false,
            earPhone :  false,
            showWatch : false,
            formdata() {
                return {}
            }
        };
    },
    methods: {
        showmobiles() {
            this.showMobile = true;
        },
        showshoe() {
            this.showShoe = true;
        },
        showearphones() {
            this.earPhone = true;
        },
        showwatches() {
            this.showWatch = true;
        }
    },

}
</script>
