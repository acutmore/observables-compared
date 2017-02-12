
/// contains :: regEx => string => boolean
const contains = regEx => str => regEx.test(str);

/// not :: ( T => boolean ) => ( T => boolean ) => boolean
const not = fn => t => !fn(t);

/// parse :: regEx => string => string[]
const parse = regEx => str => regEx.exec(str).slice(1);

/// getStackTrace :: () => string[]
const getStackTrace = () => {
  const currentLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = 100;
  const obj = Object.create(null);
  Error.captureStackTrace(obj, getStackTrace);
  Error.stackTraceLimit = currentLimit;
  return obj.stack
    .split('\n')
    .filter(contains(/at\ /))
    .filter(not(contains(/module\.js/)))
    .map(parse(/(\s+)(at)(\s+)(\S+)/))
    .map(a => a[3]);
};

module.exports = getStackTrace;
