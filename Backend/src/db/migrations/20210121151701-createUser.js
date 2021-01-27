module.exports = {
  async up(db, client) {
    return await db.collection("users").updateMany({}, { $set: { quantity: 10 } });

  },

  async down(db, client) {
    return await db.collection("users").drop();

  }
};
