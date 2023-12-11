import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations:[CounterComponent],
  exports:[CounterComponent]
})
export class CounterModule{

}
