import {Directive} from '@angular/core';
import {AbstractTuiDialogDirective, AbstractTuiDialogService} from '@taiga-ui/cdk';

import {TuiPdfViewerOptions} from './pdf-viewer.options';
import {TuiPdfViewerService} from './pdf-viewer.service';

@Directive({
    selector: 'ng-template[tuiPdfViewer]',
    providers: [
        {
            provide: AbstractTuiDialogService,
            useExisting: TuiPdfViewerService,
        },
    ],
    inputs: ['options: tuiPdfViewerOptions', 'open: tuiPdfViewer'],
    outputs: ['openChange: tuiPdfViewerChange'],
})
export class TuiPdfViewerDirective<T> extends AbstractTuiDialogDirective<
    TuiPdfViewerOptions<T>
> {}
