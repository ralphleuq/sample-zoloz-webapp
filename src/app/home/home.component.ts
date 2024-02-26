import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { Router } from '@angular/router';
import {ZolozService} from "../zoloz.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'zolozWeb';
  baseUrl = "https://sg-production-cdn.zoloz.com/page/zoloz-realid-fe/index.html";
  clientCfg = "?clientcfg=";
  response = "";

  isInitialized = false;
  backend: string = "http://localhost:8080";

  constructor(
    public zolozService: ZolozService,
    public sanitizer: DomSanitizer,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  initialize() {
    this.zolozService.initialize(this.backend).subscribe(
      result => {
        this.response = result;
        console.log(result)

        this.clientCfg += result.clientCfg;

        this.router.navigate(
          ["/zoloz", this.baseUrl + this.clientCfg],
          {state: {}}
        );
      },
      error => {
        this.response = error;
        console.log(error)
      }
    );
  }

}
