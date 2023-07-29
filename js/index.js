var productNameInput=document.getElementById('productNameInput');
var productPriceInput=document.getElementById('productPriceInput');
var productCategoryInput=document.getElementById('productCategoryInput');
var productDescriptionInput=document.getElementById('productDescriptionInput');
var addButton=document.getElementById('addButton');
var productsContainer=[];
var currentIndex=0;
if( JSON.parse(localStorage.getItem('productsList')) !=null)
{
    productsContainer=JSON.parse(localStorage.getItem('productsList'));
    displayProduct();
}
addButton.onclick=function(){
    if(addButton.innerHTML=="Update Product")
    {
        updateProduct();
    }
    else{
        addProduct();
    }
   clearForm();
   displayProduct();
};
function addProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescriptionInput.value
    };
    productsContainer.push(product);
    localStorage.setItem('productsList',JSON.stringify(productsContainer));
};
function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescriptionInput.value="";
};
function displayProduct(){
    var cartoona=``;
    for(var i=0;i<productsContainer.length;i++)
    {
        cartoona+=`<tr>
                     <td>${i}</td>
                     <td>${productsContainer[i].name}</td>
                     <td>${productsContainer[i].price}</td>
                     <td>${productsContainer[i].category}</td>
                     <td>${productsContainer[i].description}</td>
                     <td><button onclick="deleteProduct(${i});" class="btn btn-sm btn-outline-danger">Delete</button></td>
                     <td><button onclick="getDataOfProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
                   </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartoona;
};
function deleteProduct(deletedIndex){
    productsContainer.splice(deletedIndex,1);
    localStorage.setItem('productsList',JSON.stringify(productsContainer));
    displayProduct();
}
function getDataOfProduct(updateIndex){
    currentIndex=updateIndex;
    var currentProduct=productsContainer[updateIndex];
    productNameInput.value=currentProduct.name;
    productPriceInput.value=currentProduct.price;
    productCategoryInput.value=currentProduct.category;
    productDescriptionInput.value=currentProduct.description;
    addButton.innerHTML="Update Product";
};
function updateProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescriptionInput.value
    };
     productsContainer[currentIndex]=product;
     localStorage.setItem('productsList',JSON.stringify(productsContainer));
     addButton.innerHTML="Add Product";
};
searchInput.onkeyup=function(){
    var cartoona=``;
    for(var i=0;i<productsContainer.length;i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){
            cartoona+=`<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].description}</td>
            <td><button onclick="deleteProduct(${i});" class="btn btn-sm btn-outline-danger">Delete</button></td>
            <td><button onclick="getDataOfProduct(${i})" class="btn btn-sm btn-outline-warning">Update</button></td>
          </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML=cartoona;
};
// productNameInput.onkeyup=function(){
//     var rejex=/^[A-Z][a-z]{3,8}$/;
//     if(rejex.test(productNameInput.value)){
//         productNameInput.classList.add('is-valid');
//         productNameInput.classList.remove('is-invalid');
//     }
//     else{
//         productNameInput.classList.add('is-invalid');
//         productNameInput.classList.remove('is-valid');
//         addButton.classList.add("disabled");
//     }
// };
// productPriceInput.onkeyup=function(){
//     var rejex=/^[1-9]{1,10}$/;
//     if(rejex.test(productPriceInput.value)){
//         productPriceInput.classList.add('is-valid');
//         productPriceInput.classList.remove('is-invalid');
//     }
//     else{
//         productPriceInput.classList.add('is-invalid');
//         productPriceInput.classList.remove('is-valid');
//         addButton.classList.add("disabled");
//     }
// };