module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f2e1ffe844b34a213bf3436a75364031'),
  },
});
