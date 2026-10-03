/** Whole years since `start`, counting a year only once its anniversary has passed. */
export const yearsSince = (start: Date, now: Date = new Date()): number => {
  const years = now.getFullYear() - start.getFullYear();
  const anniversary = new Date(
    now.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );
  return now < anniversary ? years - 1 : years;
};
