const pcl = require('postchain-client');
import config from './config';

const node_api_url = config.connectionUrl; // using default postchain node REST API port
const blockchainRID = config.blockchainRID;

/**
 * TODO:
 * - learn how to return complex object
 * - learn how to handle the postchain responses
 */
export class PostchainWrapper {
  private _restClient: any;
  private _gtx: any;

  constructor () {
    this._restClient = pcl.restClient.createRestClient(node_api_url, blockchainRID, 5);
    this._gtx = pcl.gtxClient.createClient(this._restClient, Buffer.from(blockchainRID, 'hex'), []);
  }

  public getRandomKeyPair () {
    return pcl.util.makeKeyPair();
  }
  public insertCity (user: any, name: string): Promise<any> {
    const tx = this._gtx.newTransaction([user.pubKey]);
    tx.addOperation('insert_city', name);
    tx.sign(user.privKey, user.pubKey);
    return tx.postAndWaitConfirmation();
  }
  public getAllCities(): Promise<any>  {
    return this._gtx.query('get_all_cities', {});
  }
  public getOneCity(name: string): Promise<any> {
    return this._gtx.query('get_one_city', { name });
  }
}
