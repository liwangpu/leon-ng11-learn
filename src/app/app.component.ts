import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Excel from "exceljs/dist/exceljs.min.js";
import { saveAs } from 'file-saver'


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
            datas: []
        });
    }

    public ngOnInit(): void {

    }


    public parseExcelFile2(files: FileList) {
        if (!files.length) return;
        var file = files[0];

        // console.time();
        var reader = new FileReader();
        reader.onloadend = (event) => {
            var arrayBuffer = reader.result;

            var workbook = new Excel.Workbook();
            workbook.xlsx.load(arrayBuffer).then((workbook) => {
                var datas = [];
                workbook.worksheets.forEach(function (sheet) {
                    sheet.eachRow(function (row, rowNumber) {
                        // result += row.values + ' | \n'
                        if (rowNumber === 1) { return; }
                        const currRow = sheet.getRow(rowNumber);
                        let name = currRow.getCell(1).value;
                        let age = currRow.getCell(2).value;
                        datas.push({ name, age });
                    });
                });
                this.form.patchValue({ datas });
                // console.log('datas:', datas);
            });
        };
        reader.readAsArrayBuffer(file);
    }

    public async downloadTemplate(): Promise<void> {
        const wb = new Excel.Workbook()

        const ws = wb.addWorksheet()

        const row = ws.addRow(['姓名', '年级'])
        // row.font = { bold: true }

        const buf = await wb.xlsx.writeBuffer()

        saveAs(new Blob([buf]), '模板.xlsx')
    }

    public async upload(): Promise<void> {
        console.log('datas:', this.form.value);
    }
}
