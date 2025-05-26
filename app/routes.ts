import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  // login route
  route('login', 'routes/login.tsx'),
] satisfies RouteConfig;
