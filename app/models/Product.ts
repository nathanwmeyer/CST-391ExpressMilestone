/**
 * This class is the product model for the application, which contains the data for individual products.
 *
 * @export
 * @class ProductModel
 */

export class ProductModel
{
    private id: number = -1;
    private name: string = "";
    private type: string = "";
    private shelflife: number = -1;
    private price: number = -1;
/**
 * Creates an instance of ProductModel.
 * @param {number} id
 * @param {string} name
 * @param {string} type
 * @param {number} shelflife
 * @param {number} price
 * @memberof ProductModel
 */
constructor(id:number, name:string, type:string, shelflife:number, price:number){
        this.id = id;
        this.name = name;
        this.type = type;
        this.shelflife = shelflife;
        this.price = price;
    }
    /**
     * get Id():
     * get the 'id' value.
     *
     * @type {number}
     * @memberof ProductModel
     */
    get Id():number {
        return this.id;
    }
    /**
     * set Id(id):
     * set the 'id' value.
     *
     * @memberof ProductModel
     */
    set Id(id:number) {
        this.id = id;
    }

    /**
     * get Name():
     * get the 'name' value.
     *
     * @type {string}
     * @memberof ProductModel
     */
    get Name():string {
        return this.name;
    }
    /**
     * set Name(name):
     * set the 'name' value.
     *
     * @memberof ProductModel
     */
    set Name(name:string) {
        this.name = name;
    }

    /**
     * get Type():
     * get the 'type' value.
     *
     * @type {string}
     * @memberof ProductModel
     */
    get Type():string {
        return this.type;
    }

    /**
     * set Type(type):
     * set the 'type' value.
     *
     * @memberof ProductModel
     */
    set Type(type:string) {
        this.type = type;
    }

    /**
     * get ShelfLife():
     * get the 'shelflife' value.
     *
     * @type {number}
     * @memberof ProductModel
     */
    get ShelfLife():number {
        return this.shelflife;
    }
    /**
     * set ShelfLife(shelflife):
     * set the 'shelflife' value.
     *
     * @memberof ProductModel
     */
    set ShelfLife(shelflife:number) {
        this.shelflife = shelflife;
    }

    /**
     * get Price():
     * get the 'price' value.
     *
     * @type {number}
     * @memberof ProductModel
     */
    get Price():number {
        return this.price;
    }
    /**
     * set Price(price):
     * set the 'price' value.
     *
     * @memberof ProductModel
     */
    set Price(price:number) {
        this.price = price;
    }
}