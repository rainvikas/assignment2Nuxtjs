<template>
<div>
    
    <div class="border-solid border-2 border-black drop-shadow-md ">
        <form action="" method="post">
            <h1 style="color: black" class="font-bold text-3xl p-1 bg-blue-300 text-center">Shopping Product List</h1>
            <table class="ml-96">
                <tr class="text-center">
                    <td><label>Product Name :</label></td>
                    <td><input type="text" v-model="formdata.pname" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5" @change="validationName" required></td>
                </tr>
                <tr>
                    <td><label>Product Price :</label></td>
                    <td><input type="number" v-model="formdata.price" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5" @change="validationPrice" required></td>
                </tr>
                <tr>
                    <td><label>Product Category:</label></td>
                    <td><input type="text" v-model="formdata.category" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5" @change="validationCategory" required></td>
                </tr>
                <tr>
                    <td><label>Product Color :</label></td>
                    <td><input type="text" v-model="formdata.color" class="bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 m-5" @change="validationColor" required></td>
                </tr>
                <tr>
                    <td>
                        <button type="button" class="mb-5 border-solid font-extrabold rounded border-2 border-black p-3 bg-gray-300 bg-hover-black" @click="login">
                            Add To Cart
                        </button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
    
        <div>
            <h1 class="font-semibold text-center text-3xl p-2 bg-blue-300"><b>My Cart</b></h1>
        </div>
    <div >
        <table class="border-2  bg-gray-100 mr-60 ml-60 p-6 border-solid border-black rounded-md mt-4">
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
            //validation
            if( !isNaN(this.formdata.pname) || this.formdata.pname==null || this.formdata.pname==""){
                    alert("Please Enter Name");
                    // console.log("Please Enter Name");
                    this.resetForm();
            }else{
                console.log(this.formdata.pname);
                    // alert("Name is valid");
            }
            //vali price
            if( !isNaN(this.formdata.price) || this.formdata.price==null || this.formdata.price==""){
                    alert("Please Enter price");
                    // console.log("Please Enter price");
                    this.resetForm();
            }else{
                console.log(this.formdata.price);
                    // alert("price is valid");
            }
            //vali cate
            if( !isNaN(this.formdata.category) || this.formdata.category==null || this.formdata.category==""){
                    alert("Please Enter category");
                    // console.log("Please Enter category");
                    this.resetForm();
            }else{
                console.log(this.formdata.category);
                    // alert("categoy is valid");
            }
            //vali color
            if( !isNaN(this.formdata.color) || this.formdata.color==null || this.formdata.color==""){
                    alert("Please Enter color");
                    // console.log("Please Enter color");
                    this.resetForm();
            }else{
                console.log(this.formdata.color);
                    // alert("Name is color");
            }
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
        validationName(){
             //  // Validation for Name
            // if(this.userData.name==''){
            if( !isNaN(this.formdata.pname) || this.formdata.pname==null || this.formdata.pname==""){
                    alert("Please Enter Name");
                    // console.log("Please Enter Name");
                    this.resetForm();
            }else{
                console.log(this.formdata.pname);
                    // alert("Name is valid");
            }
        },
        validationPrice(){
             //  // Validation for Name
            // if(this.userData.name==''){
            if( !isNaN(this.formdata.price) || this.formdata.price==null || this.formdata.price==""){
                    alert("Please Enter Price");
                    // console.log("Please Enter Price");
                    this.resetForm();
            }else{
                console.log(this.formdata.price);
                    // alert("Price is valid");
            }
        },
        validationCategory(){
            if( !isNaN(this.formdata.category) || this.formdata.category==null || this.formdata.category==""){
                    alert("Please Enter Name");
                    // console.log("Please Enter Category");
                    this.resetForm();
            }else{
                console.log(this.formdata.category);
                    // alert("Category is valid");
            }
        },
        validationColor(){
            if( !isNaN(this.formdata.color) || this.formdata.color==null || this.formdata.color==""){
                    alert("Please Enter Color");
                    // console.log("Please Enter Color");
                    this.resetForm();
            }else{
                console.log(this.formdata.color);
                    // alert("Color is valid");
            }
        }
    }
}
</script>