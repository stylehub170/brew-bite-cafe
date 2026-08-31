function orderNow(product, price) {
    localStorage.setItem("productName", product);
    localStorage.setItem("productPrice", price);

    window.location.href = "order.html";
}
