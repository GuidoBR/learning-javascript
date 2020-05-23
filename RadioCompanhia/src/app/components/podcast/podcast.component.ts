import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';
import { Podcast } from './podcast.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {

  podcasts: Podcast[]
  displayedColumns = ['id', 'name', 'url', 'episodes']

  constructor(private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.podcastService.read().subscribe(podcasts => {
      this.podcasts = podcasts
    })
  }

}
