<template>
<div>
    
    <div class="border-solid border-2 border-black drop-shadow-md bg-gray-300">
        <form >
            <h1 style="color: black" class="font-bold text-3xl p-2">Shopping Product List</h1>
            <table >
                <tr class="text-center">
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
                        <button type="button" class=" border-solid font-extrabold rounded border-2 border-black p-3 bg-gray-300 bg-hover-black" @click="login">
                            Submit
                        </button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <!--<div class="bg-gray-300 col-span-2 flex" v-for="(prod) in myarr" :key="prod">   
        <div class="m-10 h-52 w-52 border-4 border-black" >
            <img src="assets/show1.jfif" class="h-45 w-45">
            product Name: <b>{{this.formdata.pname}}</b>
            Product price: <b>{{this.formdata.price}}</b>
            Product Category <b>{{this.formdata.category}}</b>
            Product Color <b>{{this.formdata.category}}</b>
         </div>
        <div class="m-10 h-52 w-52 border-4 border-black" >
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
    <table class="border-2  bg-gray-100 mr-60 ml-60 p-6 border-solid border-black rounded-md mt-4 ">
        <tr>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">ID</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Image</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Name</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Price</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Category</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Color</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Delete</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Edit Data</td>
        </tr>
        <tr v-for="(item,i) in myarr" :key="item">
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.id = i + 1}}</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><img src="assets/show1.jfif" alt="image"></td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.pname}}</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.price}}</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.category}}</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.color}}</td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-red-300 text-blue-500 hover:bg-black  text-white p-2 text-center"  @click="deleteIndex(i)">Delete</button></td>
            <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-green-500 text-blue-500 hover:bg-black  text-white p-2 text-center"  @click="editIndex(i)">Edit</button></td>
        </tr>
    </table>
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
                price: "",
                category: "",
                color: "",
                image : "",
            },
        };
    },
    methods: {
        createNewCard() {
            this.myarr.push(this.formdata);
        },
        login(event) {
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
                pname: "",
                price: "",
                category: "",
                color: "",
                image : "",
            }
            console.log("Formdata is :", this.myarr);
        },
        deleteIndex(index) {
            this.myarr.splice(index, 1);
        },
        editIndex(index) {
            this.formdata.pname = this.myarr[index].pname;
            this.formdata.price = this.myarr[index].price;
            this.formdata.category = this.myarr[index].category;
            this.formdata.color = this.myarr[index].color;
            this.formdata.image = this.myarr[index].image;
            this.isEdit = true;
            this.indexEdit = index;
        },
    }
}
</script>
