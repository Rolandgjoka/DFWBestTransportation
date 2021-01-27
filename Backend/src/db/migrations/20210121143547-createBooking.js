module.exports = {
  async up(db, client) {
    return await db.collection("bookings").updateMany({}, { $set: { quantity: 10 } });

  },

  async down(db, client) {
    return await db.collection("bookings").drop();
  }
};
