import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteinerCadastroComponent } from './pages/conteiner/conteiner-cadastro/conteiner-cadastro.component';
import { ConteinerListaComponent } from './pages/conteiner/conteiner-lista/conteiner-lista.component';
import { MovimentacaoCadastroComponent } from './pages/movimentacoes-conteiner/movimentacao-cadastro/movimentacao-cadastro.component';
import { MovimentacaoListaComponent } from './pages/movimentacoes-conteiner/movimentacao-lista/movimentacao-lista.component';
import { NavbarComponent } from './pages/page-fragments/navbar/navbar.component';
import { SidebarComponent } from './pages/page-fragments/sidebar/sidebar.component';
import { ShowValidationErrorsComponent } from './pages/page-fragments/show-validation-errors/show-validation-errors.component';
import { RelatorioComponent } from './pages/movimentacoes-conteiner/relatorio/relatorio.component';
import { ConteinerService } from './services/conteiner.service';
import { MovimentacaoConteinerService } from './services/movimentacao-conteiner.service';

@NgModule({
  declarations: [
    AppComponent,
    ConteinerCadastroComponent,
    ConteinerListaComponent,
    MovimentacaoCadastroComponent,
    MovimentacaoListaComponent,
    NavbarComponent,
    SidebarComponent,
    ShowValidationErrorsComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({})
  ],
  providers: [
    ConteinerService,
    MovimentacaoConteinerService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
