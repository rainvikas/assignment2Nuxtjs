<template>
<div class=" grid gap-x-7  grid-cols-3 h-screen">
    <div class="border-solid border-2 border-black drop-shadow-md bg-gray-300">
        <form>
            <h1 style="color: black" class="font-bold text-3xl p-6">Shopping Product List</h1>
            <table>
                <tr>
                    <td><label>Product Name :</label></td>
                    <td><input type="text" v-model="formdata.pname" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5"></td>
                </tr>
                <tr>
                    <td><label>Product Price :</label></td>
                    <td><input type="text" v-model="formdata.price" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5"></td>
                </tr>
                <tr>
                    <td><label>Product Category:</label></td>
                    <td><input type="text" v-model="formdata.category" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5"></td>
                </tr>
                <tr>
                    <td><label>Product Color :</label></td>
                    <td><input type="text" v-model="formdata.color" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5"></td>
                </tr>
                <tr>
                    <td>
                        <button type="button" class=" border-solid font-extrabold rounded border-2 border-black p-3 bg-gray-300 bg-hover-black" v-on:click="createNewCard()">
                            Submit
                        </button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <div class="bg-gray-300 col-span-2 flex" v-for="(prod) in myarr" :key="prod">   
        <div class="m-10 h-52 w-52 border-4 border-black" >
            <img src="assets/show1.jfif" class="h-45 w-45">
            product Name: <b>{{this.formdata.pname}}</b>
            Product price: <b>{{this.formdata.price}}</b>
            Product Category <b>{{this.formdata.category}}</b>
            Product Color <b>{{this.formdata.category}}</b>
         </div>
       <!-- <div class="m-10 h-52 w-52 border-4 border-black" >
            <img src="assets/show2.jfif" class="h-45 w-45"> 
            product Name: <b>{{formdata.pname}}</b>
            Product price: <b>{{formdata.price}}</b>
            Product Category <b>{{formdata.category}}</b>
            Product Color <b>{{formdata.category}}</b>
        </div>
        <div class="m-10 h-52 w-52 border-4 border-black" >
            <img src="assets/shoe3.jfif" class="h-45 w-45">
            product Name: <b>{{formdata.pname}}</b>
            Product price: <b>{{formdata.price}}</b>
            Product Category <b>{{formdata.category}}</b>
            Product Color <b>{{formdata.category}}</b>
        </div> -->
    </div>
</div>
</template>

<script>
export default {
    name: 'formdataproduct',
    data() {
        return {
            myarr: [],
            formdata: {
                pname: "",
                price : "",
                category: "",
                color : "",
            },
        };
    },
    methods: {
        createNewCard() {
            this.myarr.push(this.formdata);
        },
        login(event){
            event.preventDefault();
            if (this.isEdit == true) {
                this.myarr[this.indexEdit] = this.formdata;
                this.isEdit = false;
                this.indexEdit = -1;
            } else {
                this.myarr.push(this.formdata);
            }
            this.formdata = {
                id: 0,
                pname : "",
                price : "",
                category : "",
                color: "",
            }
            console.log("Formdata is :", this.myarr);
        }
    }
}
</script>
