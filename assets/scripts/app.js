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

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('adding product to cart...');
    console.log(this.product);
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
    const renderHook = document.querySelector('#app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    this.products.forEach(prod => {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render()
      prodList.appendChild(prodEl);

    });


    renderHook.append(prodList);


    // prodList.addEventListener('click', function(e) {
    //    if(e.target.classList.contains('product-button')) {
    //      basket.push(e.target.closest('.product-item'))
    //      console.table(basket);
    //    } ;
    // })
  }

}



const productList = new ProductList();

productList.render();



