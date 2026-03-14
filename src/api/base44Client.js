export const base44 = {
  auth: {
    me: () => Promise.reject(new Error('No auth backend')),
  },
  appLogs: {
    logUserInApp: () => Promise.resolve(),
  },
};
