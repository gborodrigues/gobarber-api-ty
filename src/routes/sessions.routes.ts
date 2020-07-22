import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user } = await authenticateUserService.execute({ email, password });

    delete user.password;

    return response.json({ user });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

export default sessionsRoutes;
