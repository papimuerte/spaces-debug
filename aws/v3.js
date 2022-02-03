const { S3 } = require('@aws-sdk/client-s3');

const aws = new S3({
  endpoint: "https://sfo3.digitaloceanspaces.com",
  region: "us-east-1",
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

module.exports = async () => {
  const params = {
    Bucket: process.env.DO_SPACES_BUCKET,
  };
  return await aws.send(aws.listObjects(params));
};
