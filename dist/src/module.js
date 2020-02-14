import { NgModule } from "@angular/core";
import { AceEditorComponent } from "./component";
import { AceEditorDirective } from "./directive";
import * as i0 from "@angular/core";
const list = [
    AceEditorComponent,
    AceEditorDirective
];
export class AceEditorModule {
}
AceEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: AceEditorModule });
AceEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AceEditorModule_Factory(t) { return new (t || AceEditorModule)(); }, providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AceEditorModule, { declarations: [AceEditorComponent,
        AceEditorDirective], exports: [AceEditorComponent,
        AceEditorDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AceEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...list
                ],
                imports: [],
                providers: [],
                exports: list
            }]
    }], null, null); })();
//# sourceMappingURL=module.js.map