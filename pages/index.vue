<template>
<div>
    <title>
        ProductList 
    </title>
    <h1>Product Card </h1>
    <div>
        <form action="">
            <div>
                <label for="pName">Product Name</label>
                <input type="text" v-model="formData.pName" name="pName" id="pName">
            </div>
            <div>
                <label for="price">Product Price</label>
                <input type="text" v-model="formData.price" name="pName" id="price">
            </div>
            <div>
                <label for="category">Product Category</label>
                <input type="text" v-model="formData.category" name="pName" id="category">
            </div>
            <div>
                <label for="color">Product Color</label>
                <input type="text" v-model="formData.color" name="pName" id="color">
            </div>
            <div>
                <button type="submit" @click="addpro">Add Product</button>
                <button type="reset">Reset</button>
            </div>
        </form>
        <table border="4">
            <tr>
                <td>Product ID</td>
                <td>Product Name </td>
                <td>Product Price</td>
                <td>Product Category</td>
                <td>Product Color</td>
                <td>Delete Data</td>
                <td>Update Data</td>
            </tr>
            <tr v-for="(item,i) in arr" :key="item">
                <td>{{item.id = i + 1}}</td>
                <td>{{item.pName}}</td>
                <td>{{item.price}}</td>
                <td>{{item.category}}</td>
                <td>{{item.color}}</td>
                <td><button @click="deletepro(i)">Delete </button></td>
                <td><button @click="editpro(i)">Edit</button></td>
            </tr>
        </table>
        <div>
            <label for="searchPro">Search Product </label>
            <input type="text" name="searchPro" id="searchPro">
            <button type="search" @click="searchPro">Search</button>
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
            arr: [],
            formData: {
                id: 0,
                pName: "",
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
              this.arr[this.indexEdit] = this.formData;
              this.isEdit = false;
              this.indexEdit = -1;
            }
            else
            {
              this.arr.push(this.formData);
            }
            this.formData = {
                id: 0,
                pName: "",
                price : "",
                category : "",
                color : "",
            }
            console.log("formData is :", this.arr);
         },
         deletepro(index) {
            this.arr.splice(index, 1);
        },
         editpro(index){
          this.formData.pName = this.arr[index].pname;
          this.formData.price = this.arr[index].price;
          this.formData.category = this.arr[index].category;
          this.formData.color = this.arr[index].color;
          this.isEdit = true;
          this.indexEdit = index ;
        },
        userpro(userName){
            // user1 = this.userName
            // if(this.allUserData.filter(e => e.firstName == userName})){
            //     alert("user Found" + e.firstName+ ""+e.lastName);
            // }
            console.log(userName);
            this.userFound = this.arr.filter((e) => {
                if(e.pName == userName){
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