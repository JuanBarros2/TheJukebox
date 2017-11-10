export class DoublePlaylistError extends Error {

  constructor() {
    super('Já existe um playlist com esse nome');
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DoublePlaylistError.prototype);
  }

  getMessage() {
    return this.message;
  }
}
