function gridProduct(products) {
    //var products = [];// lap du lieu day products
    // lay du lieu tu api
    // lay duoc gia tri tu thuoc tinh data cho vao product

    var grid_html = "";
    for(var i=0;i<products.length;i++){
        grid_html+= "<div class=\"col-md-4\">\n" +
            "                     <div class=\"item text-center\">\n" +
            "                         <img class=\"product-image\" src=\""+products[i].image+"\" height=\"700\" width=\"700\"/>\n" +
            "                         <h2 class=\"product-name\">"+products[i].name+"</h2>\n" +
            "                         <p class=\"price\">$"+products[i].price+"</p>\n" +
            "                         <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                     </div>\n" +
            "                 </div>";
    }
    return grid_html;
}

function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =  function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // text lay duoc tu api
            rs = JSON.parse(rs);// bien rs thanh doi tuong js
            var products = rs.data;
            var products_html = document.getElementById("products");
            products_html.innerHTML = gridProduct(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    xhttp.send();
}
loadData();

