import { twMerge } from 'tailwind-merge';

export function classNames(...classes: any[]) {
  // --------------------------------------------------------------------------------
  // 📌  Tailwind css merge handler
  // --------------------------------------------------------------------------------
  const merged = classes.filter(Boolean).join(' ');

  return twMerge(merged);
}

export function extractSelectValueIfDefined(
  key: string,
  data: any
): { [key: string]: any } {
  const value = data[key]?.value;

  if (value) {
    return { [key]: value };
  }

  return {};
}
