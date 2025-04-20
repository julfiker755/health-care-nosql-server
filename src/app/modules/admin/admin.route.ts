import express from 'express';
import { adminController } from './admin.controller';
const router = express.Router();


router.post(
  '/store',
  adminController.adminStoreBD
);
// router.post(
//   '/change-password',
//   auth(USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),
//   ValidateRequest(authValidation.changePasswordSchema),
//   authController.ChangePassword
// );

export const adminRoutes = router;
