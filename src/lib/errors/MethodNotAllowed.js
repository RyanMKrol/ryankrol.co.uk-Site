export default class MethodNotAllowed extends Error {
  constructor(...args) {
    super(...args);

    Error.captureStackTrace(this, MethodNotAllowed);

    this.name = 'MethodNotAllowed';
    this.status = 405;
  }
}
