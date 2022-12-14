import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersControllers from '../controller/UserController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const userRoute = Router();

const userController = new UsersControllers();

userRoute.get('/', isAuthenticated, userController.index);

userRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

export default userRoute;
