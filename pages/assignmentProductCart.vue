<template>
<div class="content bg-indigo-300">
    <h1 class="text-center font-extrabold text-5xl mt-8 bg-slate-200">Product Cart</h1>

    <nav class="text-center font-bold text-xl mt-8 ">
        <a>

            <select name="Category" id="shoes" class="bg-gray-500">
                <option value="shoes">Select Shoes</option>
                <option value="shoes">Formal Shoes</option>
                <option value="shoes">Casual Shoes</option>
                <option value="shoes">Sports</option>
                <option value="shoes">Leather</option>
                
            </select><br>
        </a>
    </nav>
    <div>
        <table class=" flex justify-center mt-6 " >
            <tr class="border-2 rounded-md border-x-black">
                <td class="text-center p-2">
                    <div>
                        
                        <h3 class="font-bold text-xl">Nike</h3>
                        <p><b>This is Demo Show of Nike Brand</b></p>
                        <h5><b>Rs 11,000/- only</b></h5>

                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                       
                    </div>
                </td>
                <td class="p-2">
                    <div class="content text-center ">
                        
                        <h3 class="font-bold text-xl">Addidas</h3>
                        <p><b>This is 2nd Demo Show of Addidas Brand</b></p>
                        <h5><b>Rs 12,200/- only</b></h5>
                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                       
                    </div>
                </td>
            </tr>
            <tr class="border-2 rounded-md border-x-black">
                <td class="p-2">
                    <div class="content text-center">
                        
                        <h3 class="font-bold text-xl">Puma</h3>
                        <p><b>This is 3rd Demo Show of Puma Brand</b></p>
                        <h5><b>Rs 9,500/- only</b></h5>
                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                       
                    </div>
                </td>
                <td class="p-2">
                    <div class="content text-center">
                        
                        <h3 class="font-bold text-xl">Asics</h3>
                        <p><b>This is 4th Demo Show of Asics Brand</b></p>
                        <h5><b>Rs 14,200/- only</b></h5>
                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                      
                    </div>
                </td>
            </tr>
        </table>
    </div>

</div>
<!-- Form 1 -->
<div>
    <title>
        Productlist 
    </title>
    <h1 class="text-center font-semibold text-5xl mt-4 bg-gray-300"> Add Products</h1>
    <hr class="mt-5 border-1 border-x-black">
    <div class="sm  border-4 bg-blue-100 mr-60 ml-60 p-4 border-solid border-x-black rounded-md mt-6 ">
        <form action="" name="myForm" onsubmit="return validateForm()" method="post">
        <table>
            <tr>
                <td>
                    <label class="font-semibold text-xl text-center ml-10" for="pname">Product Name</label>
                </td>
                <td>
                    <input class="ml-16 border-2 px-32 pl-1 rounded-xl" type="text" v-model="formdata.pname" name="pname" id="pname" @change="validationName" required>

                </td>
            </tr>
            <tr>
                <td>
                    <label class="font-semibold text-xl ml-10 " for="price">Product Price</label>

                </td>
                <td>
                    <input class="ml-16 border-2 px-32 pl-1 rounded-xl" type="number" v-model="formdata.price" name="price" id="price" @change="validationPrice" required>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <label class="font-semibold text-xl ml-10" for="category">Product Category</label>

                </td>
                <td>
                    <input class="ml-16 border-2 px-32 pl-1 rounded-xl" type="text" v-model="formdata.category" name="category" id="category" @change="validationCategory" required>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <label class="font-semibold text-xl ml-10" for="color">Product color</label>

                </td>
                <td>
                    <input class="ml-16 border-2 px-32 pl-1 rounded-xl"  type="text"  name="color" id="color" @change="validationColor" required>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <button class="ml-16  mt-2 border-2 font-bold mr-16 rounded-md bg-black text-blue-300 hover:bg-black hover: text-white p-2 text-center" type="submit" @click="addpro">Add Product</button>

                </td>
                <td>
                    <button class="ml-16 border-2 font-bold mr-16 rounded-md bg-black text-blue-300 hover:bg-black  text-white p-2 text-center" type="reset">Reset</button>
                    
                </td>
            </tr>
        </table>
            <div class="justify-between p-1 sm">
            </div>
            <div class="p-1">
            </div>
            <div class="p-1">
            </div>
            <div class="p-1">
            </div>
            <div class="p-1  mt-6">
            </div>
        </form>
        <table border="2" class="border-2  bg-blue-100 mr-60 ml-32 p-6 border-solid border-x-black rounded-md mt-8 ">
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
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-green-500 hover:bg-black  text-white p-2 text-center" @click="deletepro(i)">Delete</button></td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8"><button class=" border-2 font-bold rounded-md bg-green-500 hover:bg-black  text-white p-2 text-center" @click="editpro(i)">Edit</button></td>
            </tr>
        </table>

        <div>
            <label class="font-bold text-xl mr-16" for="searchpro">Search Product</label>
            <input @keyup="userFindByAddress(userAddress)" v-model="this.userAddress" class="ml-2 mt-8 border-2 px-32" type="text" name="searchpro" id="searchpro">
           
        </div>
        <hr class="border-1 border-black">
        <!-- 2nd table  -->
        <table border="2" class="border-2  bg-blue-100 mr-60 ml-32 p-6 border-solid border-x-black rounded-md mt-8 ">
            <tr>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product ID</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Name </td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Price</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Category</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Product Color</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Delete</td>
                <td class="border-2  bg-gray-100 p-2 border-solid border-black rounded-md mt-8 font-bold">Edit</td>
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
<!-- 1 From end -->
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
            //validation name
            if (!isNaN(this.formdata.pname) || this.formdata.pname == null || this.formdata.pname == "") {
                alert("Please Enter Name");
                // console.log("Please Enter Name");
                this.resetForm();
            } else {
                console.log(this.formdata.pname);
                // alert("Name is valid");
            }
            // //valid price
            if (isNaN(this.formdata.price) || this.formdata.price == "") {
                // if( !isNaN(this.formdata.price) || !this.formdata.price==null || !this.formdata.price==""  ){
                // || this.formdata.price==""
                alert("Please Enter price");
                // console.log("Please Enter price");
                this.resetForm();
            } else {
                console.log(this.formdata.price);
                // alert("price is valid");
            }
            //valid cate
            if (!isNaN(this.formdata.category) || this.formdata.category == null || this.formdata.category == "") {
                alert("Please Enter category");
                // console.log("Please Enter category");
                this.resetForm();
            } else {
                console.log(this.formdata.category);
                // alert("categoy is valid");
            }
            //valid color
            if (!isNaN(this.formdata.color) || this.formdata.color == null || this.formdata.color == "") {
                alert("Please Enter color");
                // console.log("Please Enter color");
                this.resetForm();
            } else {
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

            console.log(userName);
            this.userFound = this.myarr.filter((e) => {
                if (e.pname == userName) {
                    // this.userFound.push(e);
                    console.log(e);
                    return e;
                    // alert("user Found" + e.firstName+ ""+e.lastName);
                }
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

        // createNewCard() {
        //     this.myarr.push(this.formdata);
        // },
        // login(event) {
        //     event.preventDefault();
        //     //validation
        //     if (!isNaN(this.formdata.pname) || this.formdata.pname == null || this.formdata.pname == "") {
        //         alert("Please Enter Name");
        //         // console.log("Please Enter Name");
        //         this.resetForm();
        //     } else {
        //         console.log(this.formdata.pname);
        //         // alert("Name is valid");
        //     }
        //     //valid price
        //     if (isNaN(this.formdata.price) || this.formdata.price == "") {
        //         // if( !isNaN(this.formdata.price) || !this.formdata.price==null || !this.formdata.price==""  ){
        //         // || this.formdata.price==""
        //         alert("Please Enter price");
        //         // console.log("Please Enter price");
        //         this.resetForm();
        //     } else {
        //         console.log(this.formdata.price);
        //         // alert("price is valid");
        //     }
        //     //valid category
        //     if (!isNaN(this.formdata.category) || this.formdata.category == null || this.formdata.category == "") {
        //         alert("Please Enter category");
        //         // console.log("Please Enter category");
        //         this.resetForm();
        //     } else {
        //         console.log(this.formdata.category);
        //         // alert("categoy is valid");
        //     }
        //     //valid color
        //     if (!isNaN(this.formdata.color) || this.formdata.color == null || this.formdata.color == "") {
        //         alert("Please Enter color");
        //         // console.log("Please Enter color");
        //         this.resetForm();
        //     } else {
        //         console.log(this.formdata.color);
        //         // alert("Name is color");
        //     }
        //     if (this.isEdit == true) {
        //         this.myarr[this.indexEdit] = this.formdata;
        //         this.isEdit = false;
        //         this.indexEdit = -1;
        //     } else {
        //         this.myarr.push(this.formdata);
        //     }
        //     this.formdata = {
        //         id: 0,
        //         pname: "",
        //         price: "",
        //         category: "",
        //         color: "",
        //         image: "",
        //     }
        //     console.log("Formdata is :", this.myarr);
        // },
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