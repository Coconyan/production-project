import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'))
// намерено делаем задержку в полторы секунды
// todo убрать после разработки
export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
