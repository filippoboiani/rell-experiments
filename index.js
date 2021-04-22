const pcl = require('postchain-client');
const config = require('./config');

const node_api_url = config.connectionUrl; // using default postchain node REST API port
const blockchainRID = config.blockchainRID;

const rest = pcl.restClient.createRestClient(node_api_url, blockchainRID, 5);
const gtx = pcl.gtxClient.createClient(
    rest,
    Buffer.from(blockchainRID, 'hex'),
    []
);

// create a random key pair
const user = pcl.util.makeKeyPair();

function add_cities() {
    const tx = gtx.newTransaction([user.pubKey]);
    tx.addOperation('insert_city', "Kiev");
    // tx.addOperation('insert_city', "Stockholm");
    tx.sign(user.privKey, user.pubKey);
    return tx.postAndWaitConfirmation();
}

function is_city_registered(city_name) {
    return gtx.query("is_city_registered", { city_name: city_name });
}

function get_all_cities() {
    return gtx.query("get_all_cities", {});
}

async function runTest() {
    await add_cities();
    // const res = await get_all_cities();
    const kiev_registered = await is_city_registered("Kiev");
    console.log("kiev_registered=", kiev_registered);
}

runTest().catch( err => console.log(err.stack));
