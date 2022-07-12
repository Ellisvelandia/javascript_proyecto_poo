const _private = new WeakMap();

class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this._price = price;

    const properties = {
      _title: title,
      _author: author,
      _price: price,
    };

    _private.set(this, { properties });
  }
  get title() {
    return _private.get(this).properties["_title"];
  }

  set title(newTitle) {
    return (_private.get(this).properties["_title"] = newTitle);
  }
  get author() {
    return _private.get(this).properties["_author"];
  }

  set author(newauthor) {
    return (_private.get(this).properties["_author"] = newauthor);
  }
  get price() {
    return _private.get(this).properties["_price"];
  }

  set price(newprice) {
    return (_private.get(this).properties["_price"] = newprice);
  }
  getAllData() {
    console.log(
      `titulo ${this.title}, Autor: ${this.author}, precio: ${this.price}`
    );
  }
}

class Comic extends Book {
  constructor(name, author, price, illustrators) {
    super(name, author, price);
    this.illustrators = illustrators;
  }
  addillustrator(newillustrator = []) {
    this.illustrators.push(newillustrator);
  }
  getAllData() {
    super.getAllData();
    console.log(`illustrators${this.illustrators}`);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(amount, price) {
    this.products.push(...Array(amount).fill(price));
  }
  showProduct() {
    console.log(this.products);
  }
  calcTolal() {
    return this.products
      .map((price) => price)
      .reduce((ac, price) => ac + price, 0);
  }
  printTicket() {
    console.log(`total a pagar ${this.calcTolal()}`);
  }
}
// instancia de book

const book1 = new Book("1984", "G.O", 350);

const comic1 = new Comic("the killing joke", "A.M", 150, ["B.B"]);

comic1.addillustrator(["J.H"]);
console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);

cart.addProduct(3, book1.price);

cart.showProduct();

cart.printTicket();

book1.getAllData();
comic1.getAllData();