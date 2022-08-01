<template>
<div>
    <title>
        ProductList 
    </title>
    <h1>// Product Card //</h1>
    <div>
        <form>
            <div>
                <label for="pName">Product Name: </label>
                <input type="text" v-model="formData.pName" name="pName" id="pName">
            </div>
            <div>
                <label for="price">Product Price: </label>
                <input type="Number" v-model="formData.price" name="pName" id="price" >
            </div>
            <div>
                <label for="category">Product Category: </label>
                <input type="text" v-model="formData.category" name="pName" id="category">
            </div>
            <div>
                <label for="color">Product Color: </label>
                <input type="text" v-model="formData.color" name="pName" id="color">
            </div>
            <div>
                <button type="submit" @click="addpro">Submit</button>
            </div>
        </form>
        <table border="5">
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
            <label for="searchPro">Filter Product:</label>
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
                price :"",
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
             $('.choice_form').change(function(evt){

        var filter = $(':input:checked,select').map(function(index, el) {
            return "." + el.value;
        }).toArray().join("");

        $(".vis-products").hide().filter(filter).show();

    });
      
        },
    }
}
</script>

<style scoped>

input {
  caret-color: red;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #ecf0f3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;
}

label, input, button {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

label {
  margin-bottom: 4px;
}

label:nth-of-type(2) {
  margin-top: 12px;
}

input::placeholder {
  color: gray;
}

input {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}

button {
  color: white;
  margin-top: 20px;
  background: #1DA1F2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
}

button:hover {
  box-shadow: none;
}

a {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}

h1 {
  position: static;
  text-align: center;

}
</style>