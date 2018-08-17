export const lazyload = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'matching',
    name: "Сопоставление",
    loadChildren: './modules/matching/matching.module#MatchingModule'
  }
];
