import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ZolozService} from "../zoloz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-zoloz',
  templateUrl: './zoloz.component.html',
  styleUrls: ['./zoloz.component.scss']
})
export class ZolozComponent {

  safeUrl: SafeResourceUrl;
  isInitialized = false;

  constructor(
    public sanitizer: DomSanitizer,
    public route: ActivatedRoute,
  ) {
    this.safeUrl = '';
    this.route.params.subscribe(
      (params) => {
        console.log(params["clientCfg"])
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(params["clientCfg"]);
        this.isInitialized = true;
      }
    );
  }
}
