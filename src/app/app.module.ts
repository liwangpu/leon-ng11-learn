import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './components/home/home.component';
import { GridXModule, RENDER_POLICY } from 'gridx';
import { DefaultTableCellComponent } from './components/default-table-cell/default-table-cell.component';
import { GridRenderPolicyService } from './services';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(zh);

const icons: Array<IconDefinition> = [MenuFoldOutline, MenuUnfoldOutline];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DefaultTableCellComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NzIconModule.forRoot(icons),
        NzMenuModule,
        NzButtonModule,
        GridXModule
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        { provide: RENDER_POLICY, useClass: GridRenderPolicyService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
