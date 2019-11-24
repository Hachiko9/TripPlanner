import {Component, OnInit} from '@angular/core';
import {Trip} from '../models/Trip';
import {Router} from '@angular/router';


@Component({
  selector: 'app-trip-gallery',
  templateUrl: './trip-gallery.component.html',
  styleUrls: ['./trip-gallery.component.scss'],
})
export class TripGalleryComponent implements OnInit {

    public trip: Trip;

    constructor(
        private router: Router,
    ) {}

    ngOnInit() {
        const mockedTrip = {
            _id: '5dd29bb88e73ff61694fdc35',
            participants: ['Joy'],
            city: 'Cava',
            dates: {
                from: '23-10-2010',
                to: '24-10-2010'
            },
            pictures: [],
            expenses: [],
            accommodation: 'Hotel Victoria'
        };
        if (this.router.getCurrentNavigation().extras.state !== undefined) {
            this.trip = this.router.getCurrentNavigation().extras.state.trip;
        } else {
            this.trip = mockedTrip;
        }

        this.trip.pictures = [
            'https://cdn.pixabay.com/photo/2016/01/13/01/36/bagan-1137015__340.jpg',
            'https://cdn.pixabay.com/photo/2016/01/13/01/36/bagan-1137015__340.jpg',
            'https://cdn.pixabay.com/photo/2016/01/13/01/36/bagan-1137015__340.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1507053534%2F00-lead-plane-flying-clouds-LASTMINUTEHACKS1017.jpg%3Fitok%3DYHo_gGPL&q=85'
        ];
    }

    public getPicture() {}

    public previewPicture(picture: string) {
    }
}