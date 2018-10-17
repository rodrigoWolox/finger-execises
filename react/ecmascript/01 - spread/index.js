import isArray from './utils';

export function min(...args) {
  let result;
  console.log(args);
  if (!args.length) {
    result = undefined;
  } else if (isArray(args)) {
    if (isArray(args[0])) {
      result = Math.min(...args[0]);
    } else {
      result = Math.min(...args);
    }
  } else {
    result = args;
  }
  return result;
}

export function copy() {

}
