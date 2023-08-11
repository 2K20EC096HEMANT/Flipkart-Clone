// import paytmchecksum from '../paytm/PaytmChecksum.js';
// import { paytmParams, paytmMerchantKey } from '../index.js';



// export const addPaymentGateway = async (request, response) => {
//     const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
//     try {
//         const params = {
//             ...paytmParams,
//             'CHECKSUMHASH': paytmCheckSum
//         };
//         response.json(params);
//     } catch (error) {
//         console.log(error);
//     }
// }

