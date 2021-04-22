/**
 * TODO:
 * - learn how to return complex object
 * - learn how to handle the postchain responses
 */
export declare class PostchainWrapper {
    private _restClient;
    private _gtx;
    constructor();
    getRandomKeyPair(): any;
    insertCity(user: any, name: string): Promise<any>;
    getAllCities(): Promise<any>;
    getOneCity(name: string): Promise<any>;
}
