class Product {
    public name: string;
    private price: number | undefined; // unable to read and update outsider the class
    readonly category: string; // unable to update inside and outside the class;
    readonly tags: string [];
    constructor(name : string, category: string, price ?: number) {
        this.name = name;
        this.price = price;
        this.category = category
        this.tags = ["electronic" , "mobile"];
    }

    display() : void {
        this.tags[0] = 'something';
        //but tags = [] is not possible
        console.log("Product name is", this.name, "and price is ", this.price);
    }

    setPrice(p: number) :void {
        if(p <= 0) return;
        this.price = p;
    }
}

const p1 = new Product('Iphone',  "electronic", 10000);
p1.setPrice(-20);
p1.display();
console.log(p1);
