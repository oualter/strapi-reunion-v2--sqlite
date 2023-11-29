export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env(
      "readonlyApiToken",
      "7f37a0f67f4ebd436bc65fae4b5067d4acaf991de515a2af2f68aaccbc30440e3084a7b55272fee1be88885a8c94306d78a7b3e0347dc33a41215b1a19dab44ebe5f9b307af0119a703bdb15a5a2c82c2bcbbdf76f287f02e8457de024a8757579bbc98ef58a6f1d5366f20023c19301fcb73d4b982ee658efeaf0d79a0817bf"
    ),
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
