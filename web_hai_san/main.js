function huyForm() {
  document.getElementById("formDangKy").reset();
}
let cart = [];

function updateQuantity(id, change) {
  const quantityInput = document.getElementById(id);
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity += change;

  if (currentQuantity < 0) {
    currentQuantity = 0;
  }

  quantityInput.value = currentQuantity;
}

function addToCart() {
  const products = [
    {
      name: "Tôm",
      price: 200000,
      quantity: parseInt(document.getElementById("tomy").value),
    },
    {
      name: "Cua",
      price: 300000,
      quantity: parseInt(document.getElementById("cuay").value),
    },
    {
      name: "Cá",
      price: 150000,
      quantity: parseInt(document.getElementById("cay").value),
    },
    {
      name: "Ốc",
      price: 250000,
      quantity: parseInt(document.getElementById("ocy").value),
    },
    {
      name: "Hào",
      price: 200000,
      quantity: parseInt(document.getElementById("haoy").value),
    },
    {
      name: "Mực",
      price: 350000,
      quantity: parseInt(document.getElementById("mucy").value),
    },
    {
      name: "Ghẹ",
      price: 500000,
      quantity: parseInt(document.getElementById("ghey").value),
    },
    {
      name: "Lẩu",
      price: 500000,
      quantity: parseInt(document.getElementById("lauy").value),
    },
    {
      name: "Nghêu",
      price: 150000,
      quantity: parseInt(document.getElementById("ngheuy").value),
    },
  ];

  products.forEach((product) => {
    if (product.quantity > 0) {
      const existingItem = cart.find(
        (cartItem) => cartItem.name === product.name
      );
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        cart.push(product);
      }
    }
  });

  updateCart();
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

function updateCart() {
  const cartItemsDiv = document.getElementById("cartItems");
  cartItemsDiv.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    cartItemsDiv.innerHTML += `
              <p>${item.name}: ${item.quantity} phần - ${itemTotal.toLocaleString()} VNĐ 
              <button class="btn-cancel" onclick="removeFromCart(${index})">Xóa</button></p>`;
  });

  const taxAmount = totalPrice * 0.1; 
  const finalAmount = totalPrice + taxAmount;

  document.getElementById(
    "totalPrice"
  ).innerText = `Tổng giá: ${totalPrice.toLocaleString()} VNĐ`;
  document.getElementById(
    "tax"
  ).innerText = `Thuế (10%): ${taxAmount.toLocaleString()} VNĐ`;
  document.getElementById(
    "finalPrice"
  ).innerText = `Tổng cộng: ${finalAmount.toLocaleString()} VNĐ`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  alert("Sản phẩm đã được xóa khỏi giỏ hàng!");
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn trống. Vui lòng thêm sản phẩm trước khi đặt hàng.");
    return;
  }
  alert("Đơn hàng của bạn đã được đặt!");
  resetCart();
}

function resetCart() {
  cart = [];
  updateCart();
  document.getElementById("tomy").value = 0;
  document.getElementById("cuay").value = 0;
  document.getElementById("cay").value = 0;
  document.getElementById("ocy").value = 0;
  document.getElementById("haoy").value = 0;
  document.getElementById("mucy").value = 0;
  document.getElementById("ghey").value = 0;
  document.getElementById("lauy").value = 0;
  document.getElementById("ngheuy").value = 0;
}
