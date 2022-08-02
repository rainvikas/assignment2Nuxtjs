<template>
<div>
    <title>
        Productlist Project
    </title>
    <h1 class="text-center font-bold text-5xl mt-4">Form To Add Products</h1>
    <hr class="mt-5 border-1 border-black">
    <div class="border-4 bg-gray-100 mr-60 ml-60 p-6 border-solid border-black rounded-md mt-6 ">
        <form action="">
            <div class="p-1 ">
                <label class="font-bold text-xl mr-16" for="pname">Product Name</label>
                <input  class="ml-16 border-2 px-32" type="text" v-model="formdata.pname" name="pname" id="pname">
            </div>
            <div class="p-1 ">
                <label class="font-bold text-xl mr-16" for="price">Product Price</label>
                <input class="ml-16 border-2 px-32"  type="text" v-model="formdata.price" name="price" id="price">
            </div>
            <div class="p-1 ">
                <label class="font-bold text-xl mr-16" for="category">Product Category</label>
                <input class="ml-16 border-2 px-32"   type="text" v-model="formdata.category" name="category" id="category">
            </div>
            <div class="p-1 ">
                <label class="font-bold text-xl mr-16" for="color">Product color</label>
                <input class="ml-16 border-2 px-32"  type="text" v-model="formdata.color" name="color" id="color">
            </div>
            <div class="p-1  mt-6">
                <button  class="ml-16 border-2 font-bold mr-16 rounded-md bg-black text-blue-500 hover:bg-black hover: text-white p-2 text-center" type="submit" @click="addpro">Add Product</button>
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
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-red-300 text-blue-500 hover:bg-black  text-white p-2 text-center" @click="deletepro(i)">Delete Product</button></td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-red-300 text-blue-500 hover:bg-black  text-white p-2 text-center" @click="editpro(i)">Edit</button></td>
            </tr>
        </table>
        <div>
            <label class="font-bold text-xl mr-16" for="searchpro">Serach Product</label>
            <input  class="ml-16 border-2 px-32" type="text" name="searchpro" id="searchpro">
            <button class=" border-2 font-bold rounded-md bg-red-300 text-blue-500 hover:bg-black  text-white p-2 text-center" type="search" @click="searchpro">Search</button>
        </div>
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
            myarr: [],
            formdata: {
                id: 0,
                pname: "",
                price : "",
                category : "",
                color : "",
            }
        }
    },
    methods : {
         addpro(event){
            event.preventDefault();
            if(this.isEdit == true)
            {
              this.myarr[this.indexEdit] = this.formdata;
              this.isEdit = false;
              this.indexEdit = -1;
            }
            else
            {
              this.myarr.push(this.formdata);
            }
            this.formdata = {
                id: 0,
                pname: "",
                price : "",
                category : "",
                color : "",
            }
            console.log("Formdata is :", this.myarr);
         },
         deletepro(index) {
            this.myarr.splice(index, 1);
        },
         editpro(index){
          this.formdata.pname = this.myarr[index].pname;
          this.formdata.price = this.myarr[index].price;
          this.formdata.category = this.myarr[index].category;
          this.formdata.color = this.myarr[index].color;
          this.isEdit = true;
          this.indexEdit = index ;
        },
        userpro(userName){
            // user1 = this.userName
            // if(this.allUserData.filter(e => e.firstName == userName})){
            //     alert("user Found" + e.firstName+ ""+e.lastName);
            // }
            console.log(userName);
            this.userFound = this.myarr.filter((e) => {
                if(e.pname == userName){
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
    }
}
</script>
