import { SSTConfig } from "sst";

export default {
  config(_input) {
    return {
      name: "dynamodb-gaming-profile",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack();
  }
} satisfies SSTConfig;
