exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex("users").insert([
          {
            userID: 1,
            fname: "User",
            lname: "One",
            email: "email",
            password: "$2b$10$H0E2dVwyfzo.soa4lb4Hf.Rdk0gMxGVQ0vJFZh7eYbLSF7bCl4nbi",
          }
        ])
      ]);
    });
};
