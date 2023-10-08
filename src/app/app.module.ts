import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BoostrapPanelComponent } from './boostrap-panel/boostrap-panel.component';
import { InputFormatDirective } from './input-format.directive';
@NgModule({
  declarations: [AppComponent, BoostrapPanelComponent, InputFormatDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
