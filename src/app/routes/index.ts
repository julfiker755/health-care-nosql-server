import { Router } from 'express';
// import { authRoutes } from '../modules/user/auth.route';
import { adminRoutes } from '../modules/admin/admin.route';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoues = [
  {
    path: '/user',
    route:userRoutes,
  },
  {
    path:'/admin',
    route:adminRoutes
  }
];

moduleRoues.forEach((route) => router.use(route.path, route.route));

export default router;
