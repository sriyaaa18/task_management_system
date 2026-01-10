import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate, taskValidation } from "../middleware/validate.middleware.js";
import * as taskController from "../controllers/task.controller.js";

const router = express.Router();

router.use(authenticate);

router.post("/", validate(taskValidation), taskController.createTask);
router.get("/", taskController.getTasks);
router.put("/:id", validate(taskValidation), taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
