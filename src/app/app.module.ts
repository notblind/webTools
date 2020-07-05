import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { FontsComponent } from './fonts/fonts.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontComponent } from './font/font.component';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { PaletteComponent } from './palette/palette.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageComponent } from './image/image.component';

// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule} from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';

// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';


// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule} from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'fonts', component: FontsComponent},
    { path: 'font/:fontFamily', component: FontComponent},
    { path: 'color', component: ColorComponent},
    { path: 'images', component: PaletteComponent},
    { path: 'image/:idImage', component: ImageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FontsComponent,
    MainComponent,
    FontComponent,
    HomeComponent,
    ColorComponent,
    PaletteComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    // MatSelectModule,
    // MatCardModule,
    // MatButtonModule,
    // MatMenuModule,
    // MatToolbarModule,
    // MatIconModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
    // MatSelectModule,
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


