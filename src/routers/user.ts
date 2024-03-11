import { Router } from "express";
import UserController from "../controllers/user"
const router = Router();


router.post('/user-service/create', UserController);

export default router;