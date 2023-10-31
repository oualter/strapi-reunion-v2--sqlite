export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env(
        "TRANSFER_TOKEN_SALT",
        "0e16dd04e6f14caada4beb1e821c2c171922a28a38768fa9fdb5519847802e3b5745252f5fd52417e608b9b4f2c2898efafa99f92bd6aeca235a979fa2fb0f4ab0b745dfc6461634e2d82d37abdcd523d7005ea1d553a7885ad818e41ffbd0615311932fdd249dacbf9a103be76f66118ea7bc620fd610d7c277f706b3ea91f6"
      ),
    },
  },
});
