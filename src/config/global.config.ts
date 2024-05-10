export const PORT = 'PORT';

export default () => ({
  [PORT]: process.env[PORT] || 3000,
});
