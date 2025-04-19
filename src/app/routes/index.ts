import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.route';

const router = Router();

const moduleRoues = [
  {
    path: '/user',
    route: userRoutes,
  },{
    path:"/auth",
    route:authRoutes
  }
];

moduleRoues.forEach((route) => router.use(route.path, route.route));

export default router;
