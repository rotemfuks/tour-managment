import express from "express";
import {
  deleteUser,
  getALLUser,
  getSingleUser,
  updateUser,
} from "../controllers/userControllers.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utilis/verifyToken.js";

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

// get single user
router.get("/:id", verifyUser, getSingleUser);

// get all users
router.get("/",verifyAdmin, getALLUser);

export default router;
