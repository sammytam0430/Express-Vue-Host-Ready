import Api from "@/services/Api";

export default {
  getUser(id) {
    return Api().get("/users/" + id);
  },
  createUser(data) {
    return Api().post("/users", data);
  },
  updateUser(id, data) {
    return Api().patch("/users/" + id, data);
  },
  deleteUser(id) {
    return Api().delete("/users/" + id);
  }
};
