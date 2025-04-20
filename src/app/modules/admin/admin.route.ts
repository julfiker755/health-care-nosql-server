import express from 'express';
import { adminController } from './admin.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { adminValidation } from './admin.validation';
const router = express.Router();


router.get(
  '/',
  adminController.adminGetBD
);
router.post(
  '/store',
  ValidateRequest(adminValidation.adminSchema),
  adminController.adminStoreBD
);
// router.post(
//   '/change-password',
//   auth(USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),
//   ValidateRequest(authValidation.changePasswordSchema),
//   authController.ChangePassword
// );

export const adminRoutes = router;
