const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://media.istockphoto.com/vectors/pillow-vector-id1286304688?k=20&m=1286304688&s=612x612&w=0&h=wOwwOBPyERGVbAn8412_0WErJjXUe_3Iq-NaQjlCliw=',
      price: 19.99,
      description: 'A soft pillow',
    },

    {
      title: 'A Carpet',
      imageUrl:
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQGT3XHbg9-TaKBlQFJNmLR7kWp7y7s2dQ6T_4J4NSIEy2vkNs7%26s&sp=1645639167Tfaa1ee443a997d594cabcc317921ed1fd428e3d6ab5a713dd765fce9f8fe244e',
      price: 89.99,
      description: 'A nice carpet',
    },
  ],
  render() {
    const renderHook = document.querySelector('#app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    this.products.forEach((product) => {
      prodList.insertAdjacentHTML(
        'beforeEnd',
        `<li class='product-item'>
            <div>
            <img src=${product.imageUrl} alt="${product.title}">
            </div>
            <div class="product-item__content">
            <h2>${product.title}</h2>
            <h3>$${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to Cart</button>
            </div>

        </li>`
      );
    });

    renderHook.append(prodList);
  },
};

productList.render();
