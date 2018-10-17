import isArray from './utils';

export function min(aPossibleArray) {
  let result;
  if (isArray(aPossibleArray)) {
    result = Math.min(...aPossibleArray);
  } else {
    result = aPossibleArray;
  }
  return result;
}

export function copy() {

}
