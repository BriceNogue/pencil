import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artwork } from 'src/app/models/artwork-model';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() artwork: Artwork;
  artworks: Artwork[];

  constructor(
    private artworkService: ArtworkService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.artwork = new Artwork();
    
    const artwork = this.artworkService.getArtworks()
    .subscribe(artworks => this.artworks = artworks);
    console.log('Artwork ', artwork)
  }

  goToDetail(id: number) {
    this.router.navigate(['/artwork_detail/'+id])
  }

  goToAdd() {
    this.router.navigate(['/add_artwork'])
  }

}
