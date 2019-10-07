import { IUser } from 'src/app/core/classes/user.class';
import { Component } from '@angular/core';
import { SplashScreenService } from './core/splash-screen/splash-screen.service';
import { ThemeConfigurationService } from './theme-configuration.service';
import { environment } from './../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _splashScreenService: SplashScreenService,
    private translate: TranslateService,
    public themeConfigService: ThemeConfigurationService) {

    let language = environment.defaultLanguage;
    if ('language' in localStorage) {
      language = localStorage.getItem('language');
      language = (language) ? language : 'en';
      this.translate.setDefaultLang(language);
      this.translate.use(language);
    } else {
      this.translate.setDefaultLang(language);
    }
  }
}
