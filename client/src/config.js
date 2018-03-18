export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "heberling-notes-app"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xjcd4161d1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_O5UIVH03T",
    APP_CLIENT_ID: "21ms0ohmrmlgm601l5npdcierj",
    IDENTITY_POOL_ID: "us-east-1:9e08ac28-80f4-4c69-bd8e-cb05297eba5d"
  }
};
