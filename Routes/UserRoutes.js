import {createUser,getUsers,getUserById,updateUser,deleteUser} from "../Controller/UserController.js"

export default function userRoutes(app) {
  app.post("/api/user", createUser);
  app.get("/api/users", getUsers);
  app.get("/api/users/:id", getUserById);
  app.put("/api/user/:id", updateUser);
  app.delete("/api/user/:id", deleteUser);
}
