<template>
<div>
    <title>
        Productlist Project
    </title>
    <h1 class="text-center font-semibold text-5xl mt-4 "> Product Cart </h1>
    <hr class="mt-5 border-1 border-black">
    <div class="border-4 bg-gray-100 mr-60 ml-60 p-4 border-solid border-black rounded-md mt-6 ">
        <form action="" name="myForm" onsubmit="return validateForm()" method="post" >
            <div class="p-1">
                <label class="font-semibold text-xl mr-16" for="pname">Product Name</label>
                <input class="ml-16 border-2 px-32" type="text" v-model="formdata.pname" name="pname" id="pname" @change="validationName" required>
            </div>
            <div class="p-1">
                <label class="font-semibold text-xl mr-16" for="price">Product Price</label>
                <input class="ml-16  border-2 px-32 " type="number" v-model="formdata.price" name="price" id="price" @change="validationPrice" required>
            </div>
            <div class="p-1">
                <label class="font-semibold text-xl mr-16" for="category">Product Category</label>
                <input class="ml-8 border-2 px-32" type="text" v-model="formdata.category" name="category" id="category" @change="validationCategory" required>
            </div>
            <div class="p-1">
                <label class="font-semibold text-xl mr-16" for="color">Product color</label>
                <input class="ml-16 border-2 px-32" type="text" v-model="formdata.color" name="color" id="color" @change="validationColor" required>
            </div>
            <div class="p-1  mt-6">
                <button class="ml-16 border-2 font-bold mr-16 rounded-md bg-black text-blue-500 hover:bg-black hover: text-white p-2 text-center" type="submit" @click="addpro">Add Product</button>
                <button class="ml-16 border-2 font-bold mr-16 rounded-md bg-black text-blue-500 hover:bg-black  text-white p-2 text-center" type="reset">Reset</button>
            </div>
        </form>
        <table border="2" class="border-2  bg-gray-100 mr-60 ml-32 p-6 border-solid border-black rounded-md mt-8 ">
            <tr>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product ID</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Name </td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Price</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Category</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Color</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Delete</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Edit Data</td>
            </tr>
            <tr v-for="(item,i) in myarr" :key="item">
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.id = i + 1}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.pname}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.price}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.category}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{item.color}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-black-500 text-blue-500 hover:bg-black  text-white p-2 text-center" @click="deletepro(i)">Delete Product</button></td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-black-300 text-blue-500 hover:bg-black  text-white p-2 text-center" @click="editpro(i)">Edit</button></td>
            </tr>
        </table>
        <div>
            <label class="font-bold text-xl mr-16" for="searchpro">Search Product</label>
            <input @keyup="userFindByAddress(userAddress)" v-model="this.userAddress" class="ml-16 border-2 px-32" type="text" name="searchpro" id="searchpro">
        </div>
        <!-- 2nd table  -->
        <table border="2" class="border-2  bg-gray-100 mr-60 ml-32 p-6 border-solid border-black rounded-md mt-8 ">
            <tr>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product ID</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Name </td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Price</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Category</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Color</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Delete</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Edit Data</td>
            </tr>
            <tr v-for="(prod,i) in userFound" :key="prod">
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{prod.id = i + 1}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{prod.pname}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{prod.price}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{prod.category}}</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8">{{prod.color}}</td>
            </tr>
        </table>

    </div>
</div>
</template>

<script>
export default {
    name: "product-data",
    data() {
        return {
            isEdit: false,
            indexEdit: -1,
            userAddress: "",
            myarr: [],
            formdata: {
                id: 0,
                pname: "",
                price: "",
                category: "",
                color: "",
            }
        }
    },
    methods: {
        addpro(event) {
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
            //pricevalidation
           if(  this.formdata.price==null || this.formdata.price==""){
                    alert("Please Enter Price");
                    // console.log("Please Enter Name");
                    this.resetForm();
            }else{
                console.log(this.formdata.price);
                    //alert("Name is valid");
            }
            if( this.formdata.category==null || this.formdata.category==""){
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
            //other if else condition
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
            }
            console.log("Formdata is :", this.myarr);
        },
        deletepro(index) {
            this.myarr.splice(index, 1);
        },
        editpro(index) {
            this.formdata.pname = this.myarr[index].pname;
            this.formdata.price = this.myarr[index].price;
            this.formdata.category = this.myarr[index].category;
            this.formdata.color = this.myarr[index].color;
            this.isEdit = true;
            this.indexEdit = index;
        },
        userpro(userName) {
            // user1 = this.userName
            // if(this.allUserData.filter(e => e.firstName == userName})){
            //     alert("user Found" + e.firstName+ ""+e.lastName);
            // }
            console.log(userName);
            this.userFound = this.myarr.filter((e) => {
                if (e.pname == userName) {
                    // this.userFound.push(e);
                    console.log(e);
                    return e;
                    // alert("user Found" + e.firstName+ ""+e.lastName);
                }
                // else{
                // alert("user not found");
                // }
                // console.log(this.userFind);
            });
            // console.log(find1);
            console.log(this.userFound);
        },
        userFindByAddress(userAddress) {
            // console.log(userAddress);
            this.userFound = this.myarr.filter((e) => {
                // if (e.pname == userAddress)
                    this.pname1 = userAddress.toLocaleLowerCase();
                this.pname2 = e.pname.toLocaleLowerCase();
                this.price1 = userAddress.toString();
                this.price2 = e.price.toString();
                this.category1 = userAddress.toLocaleLowerCase();
                this.category2 = e.category.toLocaleLowerCase();
                this.color1 = userAddress.toLocaleLowerCase();
                this.color2 = e.color.toLocaleLowerCase();
                if (this.pname2.startsWith(this.pname1) || this.price2.startsWith(this.price1) || this.category2.startsWith(this.category1) || this.color2.startsWith(this.color1)) {
                    console.log(e);
                    return e;
                }
            });
            console.log(this.userFound);
        },
       
    }
}
</script>