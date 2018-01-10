import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const hmrBootStrap: Function = async (): Promise<void> => {
    module['hot'].accept();
    const ngModule: NgModuleRef<AppModule> = await bootstrap();
    module['hot'].dispose(() => {
        const makeVisible: () => void = createNewHosts(
            ngModule.injector.get(ApplicationRef).components.map(
                c => c.location.nativeElement
            )
        );
        ngModule.destroy();
        makeVisible();
    });
};

const bootstrap: any = (): Promise<NgModuleRef<AppModule>> => {
    return platformBrowserDynamic().bootstrapModule<AppModule>(AppModule);
};

if (module['hot']) {
    hmrBootStrap();
} else {
    bootstrap();
}