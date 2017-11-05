export class DoubleAlbumError extends Error {

  constructor() {
    super('Já existe um artista com esse nome');
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DoubleAlbumError.prototype);
  }

  getMessage() {
      return this.message;
  }
}
