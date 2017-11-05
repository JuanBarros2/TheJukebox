
export class DoubleArtistError extends Error {

  constructor() {
    super('Já existe um artista com esse nome');
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DoubleArtistError.prototype);
  }

  getMessage() {
      return this.message;
  }
}
