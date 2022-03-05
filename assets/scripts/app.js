/* eslint-disable */

'use-strict';

class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}


class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }



  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}





class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://media.istockphoto.com/vectors/pillow-vector-id1286304688?k=20&m=1286304688&s=612x612&w=0&h=wOwwOBPyERGVbAn8412_0WErJjXUe_3Iq-NaQjlCliw=',
      19.99,
      'A soft pillow'
    ),

    new Product(
      'A Carpet',
      'https://media.istockphoto.com/vectors/pillow-vector-id1286304688?k=20&m=1286304688&s=612x612&w=0&h=wOwwOBPyERGVbAn8412_0WErJjXUe_3Iq-NaQjlCliw=',
      89.99,
      'A nice carpet'
    ),
  ];

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    this.products.forEach((prod) => {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.appendChild(prodEl);
    });
    return prodList;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2> Total:  $${this.totalAmmount.toFixed(2)}</h2>`;
  }

  get totalAmmount() {
    const sum = this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
  return sum;
  };

  constructor(renderHookId) {
    super(renderHookId);
  }



  addProduct(product) {
    this.items.push(product);
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
    <h2> Total:  $${0}</h2>
    <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector('h2');
  }
}



class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div>
      <img src=${this.product.imageUrl} alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `;

    const addCartButton = prodEl.querySelector('button');

    addCartButton.addEventListener('click', this.addToCart.bind(this));

    return prodEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart('app');
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init()
