async function abortOnUnmount<T>(
  controller: AbortController,
  asyncFn: () => Promise<T>,
  mock?: {
    condition: boolean;
    returnValue: T;
  }
): Promise<T> {
  const p = new Promise<T>((resolve, reject) => {
    if (mock?.condition) {
      resolve(mock.returnValue);
    }
    asyncFn()
      .then(resolve)
      .catch((e) => {
        const error = e instanceof Error ? e : new Error("unknown error");
        reject(error);
      });
    controller.signal.addEventListener("abort", function listener() {
      reject(new Error("aborted"));
    });
  });
  return p;
}

export { abortOnUnmount };
