"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var switch_model_1 = require("./switch-model");
var C_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SwitchComponent; }),
    multi: true
};
var SwitchComponent = (function () {
    function SwitchComponent() {
        this.checked = true;
        this.disabled = false;
        this.onLabel = '';
        this.offLabel = '';
        this.theme = switch_model_1.SwitchTheme.THTME_PRIMARY;
        this.onChange = new core_1.EventEmitter();
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
    }
    SwitchComponent.prototype.toggle = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onChange.emit(this.checked);
            this.onChangeCallback(this.checked);
            this.onTouchedCallback(this.checked);
        }
        else {
            this.checked = false;
        }
    };
    //From ControlValueAccessor interface
    SwitchComponent.prototype.writeValue = function (ck) {
        if (ck !== this.checked && !this.disabled) {
            this.checked = !!ck;
        }
        else {
            this.checked = false;
        }
    };
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return SwitchComponent;
}());
__decorate([
    core_1.Input()
], SwitchComponent.prototype, "checked", void 0);
__decorate([
    core_1.Input()
], SwitchComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input()
], SwitchComponent.prototype, "onLabel", void 0);
__decorate([
    core_1.Input()
], SwitchComponent.prototype, "offLabel", void 0);
__decorate([
    core_1.Input()
], SwitchComponent.prototype, "theme", void 0);
__decorate([
    core_1.Output()
], SwitchComponent.prototype, "onChange", void 0);
SwitchComponent = __decorate([
    core_1.Component({
        selector: 'app-switch',
        templateUrl: './switch.component.html',
        styleUrls: ['./switch.component.scss'],
        providers: [C_SWITCH_CONTROL_VALUE_ACCESSOR]
    })
], SwitchComponent);
exports.SwitchComponent = SwitchComponent;
