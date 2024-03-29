/**
 * @interface IService
 * Define methods to be implemented in services crud class
 * @author Casper 
 * @version 1.0.0
 * - add method
 */

import { Observable } from "rxjs"


export interface IService<T> {
    /**
     * 
     * @param item T any type specialized in your implementation 
     * @returns void
     */
    add(item: T): void


    /**
     * Returns the whole list of T type
     */
    findAll(): Observable<Array<T>>
}
