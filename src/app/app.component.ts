import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['cn','en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('cn');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/cn|en|fr|ur|es|fa/) ? browserLang : 'cn');
    }
}
