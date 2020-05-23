import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Podcast } from "./podcast.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PodcastService {
  baseUrl = "http://localhost:3001/episodes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  read(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(this.baseUrl).pipe(
      map((obj) => obj),
    );
  }

  readById(id: number): Observable<Podcast> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Podcast>(url).pipe(
      map((obj) => obj),
    );
  }
}