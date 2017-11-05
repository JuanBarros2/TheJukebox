export class DoubleMusicError extends Error {

  constructor() {
    super('Já existe um artista com esse nome');
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DoubleMusicError.prototype);
  }

  getMessage() {
    return this.message;
  }
}
