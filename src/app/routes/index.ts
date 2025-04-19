import { Router } from 'express';
import { authRoutes } from '../modules/user/auth.route';

const router = Router();

const moduleRoues = [
 {
    path:"/user",
    route:authRoutes
  }
];

moduleRoues.forEach((route) => router.use(route.path, route.route));

export default router;
