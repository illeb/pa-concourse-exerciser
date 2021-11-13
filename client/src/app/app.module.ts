import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestsInterceptor } from './RequestsInterceptor';
import { QuestionarrieChooserComponent } from './shared/questionarrie-chooser/questionarrie-chooser.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { UIReducer } from './state/ui/ui.reducer';
import { SharedModule } from './shared/shared.module';
import { QuizReducer } from '@state/quiz/quiz.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CategoriesComponent,
    QuestionarrieChooserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      ui: UIReducer,
      quiz: QuizReducer 
    }),
    SharedModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true
    },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
