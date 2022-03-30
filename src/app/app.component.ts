import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Excel from "exceljs/dist/exceljs.min.js";

//  let workbook = new Excel.Workbook();

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public form: FormGroup;
    public constructor(
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            files: []
        });
    }

    public ngOnInit(): void {

    }

    // public onChange(fs: FileList): void {
    //     const files = [];
    //     for (let idx = fs.length - 1; idx >= 0; idx--) {
    //         files.push(fs[idx]);
    //     }
    //     this.form.patchValue({ files });
    //     console.log('value:', this.form.value)
    // }

    parseExcelFile2(files:FileList) {
        if (!files.length) return;
        var file = files[0];

        console.time();
        var reader = new FileReader();
        reader.onloadend = function (event) {
            var arrayBuffer = reader.result;
            // var buffer = Buffer.from(arrayBuffer)
            // debugger

            var workbook = new Excel.Workbook();
            // workbook.xlsx.read(buffer)
            workbook.xlsx.load(arrayBuffer).then(function (workbook) {
                // console.timeEnd();
                var result = ''
                workbook.worksheets.forEach(function (sheet) {
                    sheet.eachRow(function (row, rowNumber) {
                        result += row.values + ' | \n'
                    })
                })
                // result2.innerHTML = result
                console.log('result:',result);
            });
        };
        reader.readAsArrayBuffer(file);
    }

    public async readExcel(): Promise<void> {

    }
}
