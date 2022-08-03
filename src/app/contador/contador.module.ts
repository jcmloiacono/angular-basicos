import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ContadorComponent } from "./contador/contador.componet";

@NgModule({
    declarations: [
        ContadorComponent,
    ], 
    
    exports: [
        ContadorComponent, 
    ],

    imports: [
    ]
})

export class ContadorModule{}