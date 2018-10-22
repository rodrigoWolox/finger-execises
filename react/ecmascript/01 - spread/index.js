import isArray from './utils';

export function min(...args) {
  let result = args;
  if (!args.length) {
    result = undefined;
  } else if (isArray(args)) {
    if (isArray(args[0])) {
      result = Math.min(...args[0]);
    } else {
      result = Math.min(...args);
    }
  }
  return result;
}

export function copy(original) {
  return (isArray(original)) ? [...original] : { ...original };
}

export function reverseMerge(first, second) {
  const reversed = [...second, ...first];
  return reversed;
}

export function filterAttribs(attribs) {
  const { a, b, ...filter } = { ...attribs };
  return filter;
}
