module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID_OWN"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION_OWN"),
      params: {
        Bucket: env("AWS_BUCKET"),
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      playgroundAlways: true,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  // ...
});
