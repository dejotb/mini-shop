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
      'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRguboFDJKD0taDEfmb91oLJ2ZRxw2Pw1sRrn9wyGFqjn2KNcsQ%26s&sp=1645966309Td513f027e6937ac89002090fcf9dec2b214c5b3c03d35cb27c9e4937f23a0da2',
      89.99,
      'A nice carpet'
    ),
  ];

  render() {
    const renderHook = document.querySelector('#app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    this.products.forEach(prod => {
      prodList.insertAdjacentHTML(
        'beforeEnd',
        `<li class='product-item'>
              <div>
                <img src=${prod.imageUrl} alt="${prod.title}">
              </div>
              <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
              </div>
          </li>
          `
      );
    })

    renderHook.append(prodList);
  }
}

const productList = new ProductList();

productList.render();
