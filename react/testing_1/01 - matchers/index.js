import { isArray, mapPairArray } from './utils';

function pow(...arg) {
  if (!isArray(arg) || arg.length < 2) {
    return undefined;
  }
  if (arg.length === 2 && !isArray(arg[0]) && !isArray(arg[1])) {
    return arg[0] ** arg[1];
  }
  return arg.map(mapPairArray);
}

export default pow;
