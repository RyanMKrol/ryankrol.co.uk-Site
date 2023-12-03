import AWS from 'aws-sdk';

import 'dotenv/config';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2',
});

const DYNAMO_CLIENT = new AWS.DynamoDB.DocumentClient();

/**
 * Scan given table, fetching all items
 * @param {string} tableName name of table
 * @returns {Array<object>} all of the items in the table
 */
async function scanTable(tableName) {
  const params = { TableName: tableName };

  return DYNAMO_CLIENT.scan(params)
    .promise()
    .then((data) => data.Items)
    .catch((err) => {
      console.error(
        'Unable to scan the table. Error JSON:',
        JSON.stringify(err, null, 2)
      );
      throw err;
    });
}

export default scanTable;
