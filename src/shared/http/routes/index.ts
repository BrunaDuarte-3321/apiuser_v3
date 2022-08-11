import sessionsRouter from '@modules/users/routes/sessions.routes';
import userRoute from '@modules/users/routes/users.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/users', userRoute);
routes.use('/sessions', sessionsRouter);
