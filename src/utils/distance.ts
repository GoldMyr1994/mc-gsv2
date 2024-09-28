function isNoticeableDistance<T = unknown>(
  update: T,
  current: T,
  options: { headingThreshold: number; locationThreshold: number } = {
    headingThreshold: 2,
    locationThreshold: 2,
  },
) {
  return 0;
}

export { isNoticeableDistance };
