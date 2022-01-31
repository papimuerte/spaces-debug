const { S3 } = require('aws-sdk');

const aws = new S3({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  region: process.env.DO_SPACES_REGION,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
  params: {
    Bucket: process.env.DO_SPACES_BUCKET,
  },
});

module.exports = () => {
  const params = {
    Bucket: process.env.DO_SPACES_BUCKET,
  };
  return new Promise((resolve, reject) => {
    aws.listObjects(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
