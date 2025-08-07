/**
 * Type guard to check if a value is a plain object
 */
const isObject = (item: unknown): item is object => {
  return item !== null && typeof item === "object" && !Array.isArray(item);
};

/**
 * Deep merge multiple objects into a target object
 * @param target - The target object to merge into
 * @param sources - Source objects to merge from
 * @returns The merged object
 */
const mergeDeep = <T extends object>(target: T, ...sources: Partial<T>[]): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key as keyof T]) {
          Object.assign(target, { [key]: {} });
        }
        mergeDeep(target[key as keyof T] as object, source[key] as object);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

export { mergeDeep, isObject };
