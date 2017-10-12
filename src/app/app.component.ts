import { Component } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
//import {SystemService} from "./shared/services/system/system.service";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        //private translate: TranslateService,
        //private systemService:SystemService
    ) {
        // translate.addLangs(['cn','en', 'fr', 'ur', 'es', 'fa']);
        // translate.setDefaultLang('cn');
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/cn|en|fr|ur|es|fa/) ? browserLang : 'cn');

    }
}
