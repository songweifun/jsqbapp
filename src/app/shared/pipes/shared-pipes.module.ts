import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fomatshijianchaPipe} from "./time.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        fomatshijianchaPipe
    ]
})
export class SharedPipesModule { }
