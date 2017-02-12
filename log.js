
/// log :: o => void
const log = o => console.log(JSON.stringify(o, undefined, 4));

module.exports = log;
