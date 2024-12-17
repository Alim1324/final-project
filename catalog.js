// catalog.js
let cart = []; // Массив для хранения товаров в корзине

// Функция добавления товара в корзину
function addToCart(productName, productPrice) {
    // Создаем объект товара
    const product = {
        name: productName,
        price: productPrice
    };
    
    // Добавляем товар в корзину
    cart.push(product);

    // Выводим сообщение о добавлении товара
    alert(`${productName} добавлен в корзину`);
    
    // Выводим корзину в консоль для проверки
    console.log(cart);
}
