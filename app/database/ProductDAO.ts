/**
 * This class controls the access and interactions with the mysql database
 *
 * @export
 * @class ProductDAO
 */
import { ProductModel } from "../models/Product";

import * as mysql from "mysql";

import * as util from "util";

export class ProductDAO {
private host:string = "";
private port:number = 3306;
private username:string = "";
private password:string = "";
private schema:string = "localdb";
private pool = this.initDbConnection();

/**
 * Creates an instance of ProductDAO.
 * @param {string} host
 * @param {number} port
 * @param {string} username
 * @param {string} password
 * @memberof ProductDAO
 */
constructor(host:string, port:number, username:string, password:string){
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;    
    this.pool = this.initDbConnection();
}
/**
 * initDbConnection:
 * Initializes a mysql database connection for the application.
 *
 * @return {*}  {*}
 * @memberof ProductDAO
 */
public initDbConnection():any{
    return mysql.createPool({host: this.host, port: this.port, user: this.username, password: this.password, database: this.schema, connectionLimit: 10});
}
/**
 * findProducts:
 * Access the mysql database and retrieve a product using its id
 *
 * @param {number} productId
 * @param {*} callback
 * @memberof ProductDAO
 */
public findProducts(productId:number, callback: any){
    this.pool.getConnection(async function (err:any, connection:any) {
        connection.release();

        if (err) throw err;

        connection.query = util.promisify(connection.query);
        let result = await connection.query('SELECT * FROM PRODUCTS WHERE ID=?', [productId]);
        if(result.length !=1) callback (null);

        let product = new ProductModel(result[0].ID, result[0].NAME, result[0].TYPE, result[0].SHELFLIFE, result[0].PRICE);

        callback(product);
    })
}
/**
 * findAllProducts:
 * Access the mysql database and retrieve a list of all products
 *
 * @param {*} callback
 * @memberof ProductDAO
 */
public findAllProducts(callback: any){
    let products:ProductModel[] = [];

    this.pool.getConnection(async function (err:any, connection:any) {
        connection.release();
        
        if (err) throw err;

        connection.query = util.promisify(connection.query);
        let result = await connection.query('SELECT * FROM PRODUCTS ORDER BY ID');
        for(let x=0; x < result.length; ++x){
            products.push(new ProductModel(result[x].ID, result[x].NAME, result[x].TYPE, result[x].SHELFLIFE, result[x].PRICE));
        }

        callback(products);

    });
}
/**
 * create:
 * Access the mysql database and insert a new product, returns the id of the product created.
 *
 * @param {ProductModel} product
 * @param {*} callback
 * @memberof ProductDAO
 */
public create(product:ProductModel, callback:any){
    this.pool.getConnection(async function (err:any, connection:any) {
        connection.release();
        
        if (err) throw err;

        connection.query = util.promisify(connection.query);
        let result = await connection.query('INSERT INTO PRODUCTS (NAME, TYPE, SHELFLIFE, PRICE) VALUES (?,?,?,?)', [product.Name, product.Type, product.ShelfLife, product.Price]);
        if (result.affectedRows !=1) callback (-1);

        let productId = result.insertId;
        callback(productId);
    });
}
/**
 * update:
 * Access the mysql database and update a product.
 *
 * @param {ProductModel} product
 * @param {*} callback
 * @memberof ProductDAO
 */
public update(product:ProductModel, callback:any){
    this.pool.getConnection(async function (err:any, connection:any) {
        connection.release();
        
        if (err) throw err;

        let changeCount = 0;

        connection.query = util.promisify(connection.query);
        let result = await connection.query('UPDATE PRODUCTS SET NAME=?, TYPE=?, SHELFLIFE=?, PRICE=? WHERE ID=?', [product.Name, product.Type, product.ShelfLife, product.Price, product.Id]);
        if(result.changedRows !=0) ++changeCount;

        callback(changeCount);
    });
}
/**
 * delete:
 * Access the mysql database and delete a product.
 *
 * @param {number} productId
 * @param {*} callback
 * @memberof ProductDAO
 */
public delete(productId:number, callback: any){
    this.pool.getConnection(async function (err:any, connection:any) {
        connection.release();
        
        if (err) throw err;

        let changeCount = 0;

        connection.query = util.promisify(connection.query);
        let result = await connection.query('DELETE FROM PRODUCTS WHERE ID=?', [productId]);
        changeCount = changeCount + result.affectedRows;

        callback(changeCount);
    });
}
}