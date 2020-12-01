const config = {
  s3: {
    REGION: 'ap-south-1',
    BUCKET: 'notes-storage-syn',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://78rqd14fj2.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_BZXNYJ0WZ',
    APP_CLIENT_ID: '1dv1oqbdh5656mvc2labv5bkg',
    IDENTITY_POOL_ID: 'us-east-2:ceb7c195-ccbe-4b8c-831a-cec064d52ad1',
  },
};

export default config;
