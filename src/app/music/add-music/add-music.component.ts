import { DoubleMusicError } from '../../exception/double-music-error';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album } from '../../album/album';
import { FacadeService } from './../../facade.service';
import { ArtistsService } from './../../artist/artists.service';
import { AlbumService } from './../../album/album.service';
import { Music } from '../music';
import { Component, OnInit } from '@angular/core';

import { MusicService } from './../music.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})

export class AddMusicComponent implements OnInit {

  form: FormGroup;

  constructor(
    private musicService: MusicService,
    private formGroup: FormBuilder,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formGroup.group({
      name : [null, Validators.required],
      artist: [null, Validators.required],
      album: [null, Validators.required],
      year: [null, Validators.required],
      duration: [null, Validators.required]
    });
  }

  onSubmit() {
    const music = this.form.value;

    try {
      this.musicService.addMusic(music);
      this.route.navigate(['musicas']);
    } catch (e) {
      if (e instanceof DoubleMusicError) {
        this.form.get('name').setValue('');
        alert('Música já existente no álbum');
        // TODO melhorar essa mensagem
      }
    }
  }

  verifyValidTouched(field: string) {
    return (
      !this.form.get(field).valid &&
      (this.form.get(field).touched || this.form.get(field).dirty)
    );
  }

  applyCssError(field: string) {
    return {
      'has-error': this.verifyValidTouched(field),
      'has-success': this.form.get(field).valid,
      'has-feedback': this.verifyValidTouched(field)
    };
  }

  isFormValid() {
    return this.form.valid;
  }
}
