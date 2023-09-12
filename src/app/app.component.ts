import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SummaryItem {
  category: string;
  icon: string;
  score: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  url: string = 'assets/data.json';
  summaryItems$: Observable<SummaryItem[]> = new Observable();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.summaryItems$ = this.http.get<SummaryItem[]>(this.url);
  }
}
