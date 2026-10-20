const products = [
  {id:1,name:"Cloud Knit Sweater",category:"Apparel",price:64,rating:4.9,icon:"🧶",tag:"Bestseller"},
  {id:2,name:"Terra Ceramic Mug",category:"Home",price:24,rating:4.7,icon:"☕",tag:"New"},
  {id:3,name:"Everyday Canvas Tote",category:"Accessories",price:38,rating:4.8,icon:"👜",tag:"Popular"},
  {id:4,name:"Aurora Desk Lamp",category:"Home",price:89,rating:4.6,icon:"💡",tag:""},
  {id:5,name:"Minimal Leather Wallet",category:"Accessories",price:52,rating:4.5,icon:"👝",tag:""},
  {id:6,name:"Coastal Running Shoes",category:"Footwear",price:110,rating:4.9,icon:"👟",tag:"Bestseller"},
  {id:7,name:"Softline Journal",category:"Stationery",price:18,rating:4.4,icon:"📓",tag:"New"},
  {id:8,name:"Linen Lounge Set",category:"Apparel",price:76,rating:4.7,icon:"👕",tag:""},
  {id:9,name:"Focus Headphones",category:"Tech",price:129,rating:4.8,icon:"🎧",tag:"Popular"},
  {id:10,name:"Daily Water Bottle",category:"Accessories",price:29,rating:4.3,icon:"🧴",tag:""}
];
const state = { user: null, cart: JSON.parse(localStorage.getItem("shopsphere-cart") || "[]"), orders: JSON.parse(localStorage.getItem("shopsphere-orders") || "[]") };
const $ = id => document.getElementById(id);
const money = value => `$${value.toFixed(2)}`;
const save = () => { localStorage.setItem("shopsphere-cart", JSON.stringify(state.cart)); localStorage.setItem("shopsphere-orders", JSON.stringify(state.orders)); };
const showToast = message => { const toast = $("toast"); toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200); };

function showView(view) {
  ["catalog-view","orders-view","cart-view","checkout-view","confirmation-view"].forEach(id => $(id).classList.toggle("hidden", id !== `${view}-view`));
  if (view === "cart") renderCart();
  if (view === "orders") renderOrders();
  if (view === "checkout") renderCheckout();
  window.scrollTo({top:0, behavior:"smooth"});
}
function renderProducts() {
  const search = $("search-input").value.toLowerCase();
  const category = $("category-filter").value;
  const sort = $("sort-select").value;
  let list = products.filter(p => p.name.toLowerCase().includes(search) && (category === "all" || p.category === category));
  if (sort === "low") list.sort((a,b) => a.price-b.price);
  if (sort === "high") list.sort((a,b) => b.price-a.price);
  if (sort === "rating") list.sort((a,b) => b.rating-a.rating);
  $("results-count").textContent = `${list.length} products`;
  $("empty-state").classList.toggle("hidden", list.length > 0);
  $("product-grid").innerHTML = list.map(p => `<article class="product-card" data-testid="product-${p.id}"><div class="product-image">${p.tag ? `<span class="tag">${p.tag}</span>` : ""}${p.icon}</div><div class="product-info"><span class="category">${p.category}</span><h3>${p.name}</h3><div class="rating">★★★★★ <span class="muted">${p.rating}</span></div><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-button" data-add="${p.id}">+ Add to cart</button></div></div></article>`).join("");
}
function cartItems() { return state.cart.map(item => ({...item, product:products.find(p => p.id === item.id)})); }
function cartTotal() { return cartItems().reduce((sum,item) => sum + item.product.price * item.quantity, 0); }
function updateCartCount() { $("cart-count").textContent = state.cart.reduce((sum,item) => sum + item.quantity, 0); }
function renderCart() {
  const items = cartItems();
  $("cart-items").innerHTML = items.length ? items.map(item => `<div class="cart-row"><div class="cart-thumb">${item.product.icon}</div><div class="cart-detail"><h3>${item.product.name}</h3><p>${item.product.category} · ${money(item.product.price)}</p></div><div class="qty-control"><button data-qty="${item.id}" data-change="-1">−</button><span>${item.quantity}</span><button data-qty="${item.id}" data-change="1">+</button></div><strong>${money(item.product.price * item.quantity)}</strong><button class="remove" data-remove="${item.id}">Remove</button></div>`).join("") : `<div class="empty-state"><div>🛒</div><h3>Your cart is empty</h3><p>Add something you love from the catalogue.</p><button class="primary-button" data-action="home">Browse products</button></div>`;
  const subtotal = cartTotal(), shipping = subtotal ? 5 : 0;
  $("cart-summary").innerHTML = `<h3>Order summary</h3><div class="summary-line"><span>Subtotal</span><b>${money(subtotal)}</b></div><div class="summary-line"><span>Shipping</span><b>${shipping ? money(shipping) : "Free"}</b></div><div class="summary-total"><span>Total</span><span>${money(subtotal+shipping)}</span></div>${items.length ? '<button class="primary-button full-width" data-action="checkout">Continue to checkout →</button>' : ""}`;
}
function renderCheckout() {
  const subtotal=cartTotal(), shipping=subtotal?5:0;
  $("checkout-summary").innerHTML = `<h3>In your order</h3>${cartItems().map(i=>`<div class="summary-line"><span>${i.product.name} × ${i.quantity}</span><b>${money(i.product.price*i.quantity)}</b></div>`).join("")}<div class="summary-total"><span>Total</span><span>${money(subtotal+shipping)}</span></div>`;
}
function renderOrders() {
  $("orders-list").innerHTML = state.orders.length ? state.orders.map(o => `<div class="order-card"><div class="order-head"><div><strong>Order ${o.id}</strong><p class="muted">${o.date} · ${o.items.length} item(s)</p></div><span class="status">Confirmed</span></div><p>${o.items.map(i=>`${i.product.name} × ${i.quantity}`).join(", ")}</p><strong>${money(o.total)}</strong></div>`).join("") : `<div class="empty-state"><div>📦</div><h3>No orders yet</h3><p>Your completed orders will appear here.</p></div>`;
}
function addToCart(id) { const found=state.cart.find(i=>i.id===id); found ? found.quantity++ : state.cart.push({id,quantity:1}); save(); updateCartCount(); showToast("Added to your cart"); }
function validateLogin(event) {
  event.preventDefault(); const user=$("username"), pass=$("password"); $("username-error").textContent = user.value ? "" : "Username is required."; $("password-error").textContent = pass.value ? "" : "Password is required.";
  if (!user.value || !pass.value) return;
  if (user.value !== "qa_user" || pass.value !== "qa123") { $("password-error").textContent = "Invalid username or password."; return; }
  state.user=user.value; $("login-view").classList.add("hidden"); $("store-view").classList.remove("hidden"); $("welcome-user").textContent=`Hi, ${user.value}`; renderProducts(); showToast("Welcome to ShopSphere");
}
function validateCheckout(event) {
  event.preventDefault(); let valid=true;
  document.querySelectorAll("#checkout-form input[required]").forEach(input => { const error=input.nextElementSibling; let message=""; if(!input.value.trim()) message="This field is required."; else if(input.id==="email"&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) message="Enter a valid email."; else if(input.id==="card-number"&&input.value.replace(/\s/g,"").length<12) message="Enter a valid card number."; else if(input.id==="cvv"&&input.value.length<3) message="Enter a valid CVV."; error.textContent=message; if(message) valid=false; });
  if(!valid)return;
  const order={id:`SS-${Date.now().toString().slice(-6)}`,date:new Date().toLocaleDateString(),items:cartItems(),total:cartTotal()+5}; state.orders.unshift(order); state.cart=[]; save(); updateCartCount(); $("confirmation-message").textContent=`Your order ${order.id} has been placed successfully. A confirmation has been prepared for your records.`; $("confirmation-items").innerHTML=order.items.map(i=>`<div class="summary-line"><span>${i.product.name} × ${i.quantity}</span><b>${money(i.product.price*i.quantity)}</b></div>`).join("")+`<div class="summary-total"><span>Total paid</span><span>${money(order.total)}</span></div>`; showView("confirmation"); showToast("Order placed successfully");
}
document.addEventListener("click", event => {
  const add=event.target.closest("[data-add]"), remove=event.target.closest("[data-remove]"), qty=event.target.closest("[data-qty]"), action=event.target.closest("[data-action]");
  if(add)addToCart(Number(add.dataset.add));
  if(remove){state.cart=state.cart.filter(i=>i.id!==Number(remove.dataset.remove));save();updateCartCount();renderCart();}
  if(qty){const item=state.cart.find(i=>i.id===Number(qty.dataset.qty));item.quantity+=Number(qty.dataset.change);if(item.quantity<1)state.cart=state.cart.filter(i=>i!==item);save();updateCartCount();renderCart();}
  if(action){event.preventDefault();const a=action.dataset.action;if(a==="logout"){state.user=null;$("store-view").classList.add("hidden");$("login-view").classList.remove("hidden");$("login-form").reset();return}if(a==="home"){showView("catalog");renderProducts()}else showView(a);}
});
$("login-form").addEventListener("submit", validateLogin); $("checkout-form").addEventListener("submit", validateCheckout); $("search-input").addEventListener("input",renderProducts); $("category-filter").addEventListener("change",renderProducts); $("sort-select").addEventListener("change",renderProducts);
[...new Set(products.map(p=>p.category))].sort().forEach(category => $("category-filter").insertAdjacentHTML("beforeend",`<option value="${category}">${category}</option>`)); updateCartCount(); renderProducts();
