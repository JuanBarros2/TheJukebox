import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoubleArtistError } from '../../exception/double-artist-error';
import { ArtistsService } from './../artists.service';
import { Artist } from '../artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {

  form: FormGroup;
  isNameUnique: boolean = true;

  constructor(
    private artistsService: ArtistsService,
    private formGroup: FormBuilder,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formGroup.group({
      name : [null, Validators.required],
      photo : [null, Validators.required]
    });
  }

  onSubmit() {
    const artist = this.form.value;

    try {
      this.artistsService.addArtist(artist)
        .subscribe((dado) => this.route.navigate(['artistas']));
    } catch (e) {
      if (e instanceof DoubleArtistError) {
        console.log(e.getMessage());
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
