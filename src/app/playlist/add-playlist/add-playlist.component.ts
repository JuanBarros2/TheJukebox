import { DoublePlaylistError } from './../../exception/double-playlist-error';
import { Router } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  form: FormGroup;
  isNameUnique: boolean = true;

  constructor(
    private playlistService: PlaylistService,
    private formGroup: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.form = this.formGroup.group({
      name : [null, Validators.required]
    });
  }

  onSubmit() {
    const playlist = this.form.value;

    try {
      this.playlistService.addPlaylist(playlist);
      this.route.navigate(['playlists']);
    } catch (e) {
      if (e instanceof DoublePlaylistError) {
        this.form.get('name').setValue('');
        this.isNameUnique = false;
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
