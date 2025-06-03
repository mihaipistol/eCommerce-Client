import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('login', 'routes/login.tsx'),
  route('register', 'routes/register.tsx'),
  route('form', 'routes/form.tsx'),
  route('comments', 'routes/comments.tsx'),
] satisfies RouteConfig;
