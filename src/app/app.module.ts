import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {WebSocketService} from "./shared/services/web-socket.service";
import {SendArticleService} from "./shared/services/send-article.service";
import {TokenService} from "./shared/services/token.service";
import {OrderService} from "./shared/services/order/order.service";
import {HttpService} from "./shared/services/http/http.service";
import {SpinService} from "./shared/services/spin/spin.service";
// import {ToastService} from "./shared/services/toast/toast.service";
import {AppService} from "./app.service";
import {ToastService} from "./shared/components/toast/toast.service";
import {ToastComponent} from "./shared/components/toast/toast.component";
import {ToastBoxComponent} from "./shared/components/toast/toast-box.component";
import {SpinComponent} from "./shared/services/spin/spin.component";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {SystemService} from "./shared/services/system/system.service";
import {ApiUrlService} from "./shared/services/api-url.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        ToastComponent,
        ToastBoxComponent,
        SpinComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [
        AuthGuard,
        WebSocketService,
        SendArticleService,
        TokenService,
        OrderService,
        HttpService,
        SpinService,
        ToastService,
        AppService,
        SelectivePreloadingStrategy,
        SystemService,
        ApiUrlService,
        NgbActiveModal
    ],
    exports:[ToastBoxComponent,SpinComponent,ToastComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
