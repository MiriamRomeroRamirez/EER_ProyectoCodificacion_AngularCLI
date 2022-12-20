import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { Index1Component } from './pages/index1/index1.component';
import { Index2Component } from './pages/index2/index2.component';
import { Index3Component } from './pages/index3/index3.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { Card1Component } from './components/card1/card1.component';
import { MainComponent } from './pages/index1/main/main.component';
import { Card2Component } from './components/card2/card2.component';
import { Card3Component } from './components/card3/card3.component';
import { InputInfoComponent } from './components/input-info/input-info.component';
import { NAOInfoComponent } from './pages/index2/nao-info/nao-info.component';
import { QuienesSomosComponent } from './pages/index2/quienes-somos/quienes-somos.component';
import { ConcursosComponent } from './pages/index2/concursos/concursos.component';
import { PremiacionesComponent } from './pages/index2/premiaciones/premiaciones.component';
import { InputEncuestaComponent } from './components/input-encuesta/input-encuesta.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Main3Component } from './pages/index3/main3/main3.component';

@NgModule({
  declarations: [
    AppComponent,
    Index1Component,
    Index2Component,
    Index3Component,
    Card1Component,
    MainComponent,
    Card2Component,
    Card3Component,
    InputInfoComponent,
    NAOInfoComponent,
    QuienesSomosComponent,
    ConcursosComponent,
    PremiacionesComponent,
    InputEncuestaComponent,
    FormularioComponent,
    Main3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
