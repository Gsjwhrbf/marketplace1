let productsGrid = document.querySelector(".product-grid")
let productArray = []
let xhr = new XMLHttpRequest()
let url = "https://my-json-server.typicode.com/Gsjwhrbf/marketplace1/db"

xhr.open("GET", url)
xhr.responseType = "json"
xhr.onload = ()=>{
    productArray = xhr.response.proucts
    productsGrid.innerHTML = ""
    productArray.forEach(p => {
        productArray.push(p)
        let pElem = document.createElement("div")
        pElem.classList.add("product")
        pElem.innerHTML = `
        <img src="${p.img}" alt="">
        <h2 class="product-name">${p.name}</h2>
        <p class="product-desc">${p.description}</p>
        <a href="profile/profile.html&?id=${p.author_id}">Seller product</a>
        <div class="price-bar">
            <p class="product-price">${p.price}</p>
            <button onclick="AddProductToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>
        </div>
        `
        productsGrid.append(pElem)
    });
}
xhr.send()