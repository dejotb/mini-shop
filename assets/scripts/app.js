// productList.render();

class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  render() {
    const renderHook = document.querySelector('#app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    prodList.insertAdjacentHTML(
      'beforeEnd',
      `<li class='product-item'>
            <div>
            <img src=${this.imageUrl} alt="${this.title}">
            </div>
            <div class="product-item__content">
            <h2>${this.title}</h2>
            <h3>$${this.price}</h3>
            <p>${this.description}</p>
            <button>Add to Cart</button>
            </div>

        </li>`
    );

    renderHook.append(prodList);
  }
}

// pillow.render();

const productList = {
  products: [
    new Product(
      'A Pillow',
      'https://media.istockphoto.com/vectors/pillow-vector-id1286304688?k=20&m=1286304688&s=612x612&w=0&h=wOwwOBPyERGVbAn8412_0WErJjXUe_3Iq-NaQjlCliw=',
      19.99,
      'A soft pillow'
    ),

    new Product(
      'A Carpet',
      'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fkrux.tech%2Fwp-content%2Fuploads%2F2021%2F12%2Fkrx0107-krux-space-carpet-xxl-01.jpg&sp=1645653186T752c73b03de9866afd5d7a1d535ec55548c1e0b3acf0dad29083002cb5889bd6',
      89.99,
      'A nice carpet'
    ),
  ],
};

productList.products.forEach((product) => product.render());
