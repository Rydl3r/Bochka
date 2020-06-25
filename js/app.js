const instagram_block = document.querySelector(".instagram")
const menu_block = document.querySelector(".menu")
const order_block = document.querySelector(".order")



const menu_image = document.querySelector(".menu_content_icon")
const order_image = document.querySelector(".order_content_icon")

const menu_content_block = document.querySelector(".menu_content")
const order_content_block = document.querySelector(".order_content")

instagram_block.addEventListener("click", redirectInstagram)
menu_block.addEventListener("click", showMenu)
order_block.addEventListener("click", showOrder)

function redirectInstagram () {
    window.location= "http://www.instagramm.com";
}

let showCount = 1;
let orderCount = 1;

function showMenu () {
    if(menu_content_block.style.opacity === "0" || showCount ===1) {
        order_block.style.opacity = "0"
        instagram_block.style.opacity = "0"
        menu_content_block.style.opacity = "1"
        showCount++

        setTimeout(()=> { 
        menu_image.src = "./img/close_icon.png"
        menu_image.style.width = "25px"
        menu_image.style.paddingRight = "10px"
        menu_content_block.style.display = "block"
        order_block.style.display = "none"
        instagram_block.style.display = "none"
        }, 500)
    } else {
        order_block.style.opacity = "1"
        instagram_block.style.opacity = "1"
        menu_content_block.style.opacity = "0"

        
        setTimeout(()=> {
        menu_image.src = "./img/menu_icon.png"
        menu_image.style.width = "35px"
        menu_image.style.paddingRight = "0px"

        menu_content_block.style.display = "none"
        order_block.style.display = "flex"
        instagram_block.style.display = "flex"
        }, 500)
    }
}

function showOrder () {
    if(order_content_block.style.opacity === "0" || orderCount ===1) {
        instagram_block.style.opacity = "0"
        order_content_block.style.opacity = "1"
        orderCount++

        setTimeout(()=> { 
        order_image.src = "./img/close_icon.png"
        order_image.style.width = "25px"
        order_image.style.paddingRight = "-15px"
        
        order_content_block.style.display = "block"
        instagram_block.style.display = "none"
        }, 500)
    } else {
        instagram_block.style.opacity = "1"
        order_content_block.style.opacity = "0"
        
        setTimeout(()=> {
        order_image.src = "./img/order_icon.png"
        order_image.style.width = "20px"
        order_image.style.paddingRight = "0px"
           
        order_content_block.style.display = "none"
        instagram_block.style.display = "flex"
        }, 500)
    }
}