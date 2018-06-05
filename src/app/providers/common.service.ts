import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CommonService {
    constructor(private toastr: ToastrService) { }
    messageSuccess(message: string, title?: string) {
        this.toastr.success(message, title);
    }

    messageError(message: string, title?: string) {
        this.toastr.error(message, title);
    }
}
