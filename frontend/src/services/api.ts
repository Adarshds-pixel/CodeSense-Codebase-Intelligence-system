export const api = {
  async simulate<T>(payload: T, delay = 600): Promise<T> {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(payload), delay);
    });
  },
};
