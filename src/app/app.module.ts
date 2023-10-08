import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BoostrapPanelComponent } from './boostrap-panel/boostrap-panel.component';
import { InputFormatDirective } from './input-format.directive';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
@NgModule({
  declarations: [AppComponent, BoostrapPanelComponent, InputFormatDirective, FormTemplateDrivenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
