const tx = gtx.newTransaction([user.pubKey]);

tx.addOperation('insert_city', "Kiev");

tx.sign(user.privKey, user.pubKey);

return await tx.postAndWaitConfirmation();