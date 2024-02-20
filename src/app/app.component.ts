import { Component } from '@angular/core';
import {ZolozService} from "./zoloz.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zolozWeb';
  baseUrl = "https://sg-production-cdn.zoloz.com/page/zoloz-realid-fe/index.html";
  clientCfg = "?clientcfg=";
  response = "";

  isInitialized = false;
  backend: string = "https://6e36-124-105-154-102.ngrok-free.app";
  safeUrl: SafeResourceUrl;
  constructor(
    public zolozService: ZolozService,
    public sanitizer: DomSanitizer
  ) {
    this.safeUrl = "";
  }

  ngOnInit() {
  }

  initialize() {
    this.zolozService.initialize(this.backend).subscribe(
      result => {
        this.response = result;
        console.log(result)
        this.clientCfg += result.clientCfg;

        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.clientCfg);


        console.log(this.safeUrl);
        this.isInitialized = true;
      },
      error => {
        this.response = error;
        console.log(error)
      }
    );
  }



}
