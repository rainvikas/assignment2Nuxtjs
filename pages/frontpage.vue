<template>
<div class="content bg-slate-300">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <h1 class="text-center font-extrabold text-5xl mt-8 bg-blue-200">Shopping Product List</h1>

    <nav class="text-center font-bold text-xl mt-8 ">
        <a>
            <select name="Category" id="watches" class="bg-gray-300">
                <option value="watch">Select Watches</option>
                <option value="watch">Titan</option>
                <option value="watch">Puma</option>
                <option value="watch">Ladies Wear</option>
                <option value="watch">G-Shock</option>
                <option value="watch">Rolex</option>
            </select>
            <select name="Category" id="mobile" class="bg-gray-300">
                <option value="mobile">Select Mobiles</option>
                <option value="mobile">Apple Iphone</option>
                <option value="mobile">Oneplus</option>
                <option value="mobile">Oppo</option>
                <option value="mobile">Vivo</option>
                <option value="mobile">Redmi</option>
                <option value="mobile">Samsung</option>
            </select>
            <select name="Category" id="earphone" class="bg-gray-300">
                <option value="earphone">Select Earphone</option>
                <option value="earphone">Apple Airpods</option>
                <option value="earphone">Oneplus Buds</option>
                <option value="earphone">Oppo Earphone</option>
                <option value="earphone">Vivo Earphones</option>
                <option value="earphone">Redmi Earphone</option>
                <option value="earphone">Samsung Earphones</option>
            </select>
            <select name="Category" id="shoes" class="bg-gray-300">
                <option value="shoes">Select Shoes</option>
                <option value="shoes">Formal Shoes</option>
                <option value="shoes">Casual Shoes</option>
                <option value="shoes">Nike Air</option>
                <option value="shoes">Puma Sports</option>
                <option value="shoes">Red Chief Leather</option>
                <option value="shoes">Loafers</option>
            </select><br>
            <div class="inline-flex p-4 mt-4">
                <div class="mr-8 border-2 px-2 border-black rounded-md"><a href="productform">Add Products</a></div>
                <div class="ml-8 border-2 px-2 border-black rounded-md"><a href="mainform2">Shoe Category</a></div>
            </div>
        </a>
    </nav>
    <div>
        <table class="mt-6">
            <tr class="border-2 rounded-md border-black">
                <td class="text-center p-2">
                    <div>
                        <img src="assets/show1.jfif" alt="showimage" class="px-64  items-center ">
                        <h3 class="font-bold text-xl">Shoes</h3>
                        <p><b>This is Demo Show of Nike Brand</b></p>
                        <h5><b>Rs 10,000/- only</b></h5>

                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                        <button class="buy-1 border-2 px-2  border-black rounded-md">Buy Now</button>
                    </div>
                </td>
                <td class="p-2">
                    <div class="content text-center ">
                        <img src="assets/show2.jfif" alt="showimage" class="px-64 items-center ">
                        <h3 class="font-bold text-xl">Shoes</h3>
                        <p><b>This is 2nd Demo Show of Nike Brand</b></p>
                        <h5><b>Rs 11,200/- only</b></h5>
                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                        <button class="buy-2 border-2 px-2  border-black rounded-md">Buy Now</button>
                    </div>
                </td>
            </tr>
            <tr class="border-2 rounded-md border-black">
                <td class="p-2">
                    <div class="content text-center">
                        <img src="assets/shoe3.jfif" alt="showimage" class="px-64  items-center">
                        <h3 class="font-bold text-xl">Shoes</h3>
                        <p><b>This is 3rd Demo Show of Nike Brand</b></p>
                        <h5><b>Rs 11,500/- only</b></h5>
                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                        <button class="buy-3 border-2 px-2  border-black rounded-md">Buy Now</button>
                    </div>
                </td>
                <td class="p-2">
                    <div class="content text-center">
                        <img src="assets/shoe4.jfif" alt="showimage" class="px-64  items-center">
                        <h3 class="font-bold text-xl">Shoes</h3>
                        <p><b>This is 4th Demo Show of Nike Brand</b></p>
                        <h5><b>Rs 13,200/- only</b></h5>
                        <i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><i class="fa fa-star checked"></i><br>
                        <button class="buy-4 border-2 px-2  border-black rounded-md">Buy Now</button>
                    </div>
                </td>
            </tr>
        </table>
    </div>

</div>
</template>

<!-- 

<style>
body {
    margin: 0;
    font-family: sans-serif;
    background: #f2f2f2;
}

h3 {
    text-align: center;
    font-size: 30px;
    margin: 0;
    padding-top: 10px;
}

a {
    text-decoration: none;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
}

.content {
    width: 20%;
    margin: 15px;
    box-sizing: border-box;
    float: left;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    padding: top 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: .4s;
    background: f2f2f2;
}

.content:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -8px);
}

img {
    width: 200px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
    display: block;
}

p {
    text-align: center;
    color: #b2bec3;
    padding-top: 0 8px;
}

h6 {
    font-size: 26px;
    text-align: center;
    color: 222f3e;
    margin: 0;

}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
}

li {
    padding-top: 26px;
}

.fa {
    font-size: 26px;
    transition: .4s;
    margin: 3px;
}

.checked {
    color: ff9f43;
}
</style>-->
