import fs from 'fs';
import xlsx from 'xlsx';

export class ExcelUtil{
    static readExcel(filePath: string, sheetName: string):any[]
    {
        if(!fs.existsSync(filePath))

        {
            throw new Error(`File not found: ${filePath}` )
        }
        
            //read the workbook from excel file

            const workbook=xlsx.readFile(filePath);
            //get the specified sheet from the workbook

            const sheet= workbook.Sheets[sheetName];
            if (!sheet)
            {
                throw new Error(`sheet not available`)
            }
            
                return xlsx.utils.sheet_to_json(sheet);
            
        
    };
   

};
let data= await ExcelUtil.readExcel("./typescript-training/utilities/emailList7July.xlsx", "Sheet1");

console.log(data)