class ExcelToJSON {
    parseExcel = (file) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = (e) => {
                let finalData = [];
                let data = e.target.result;
                let workbook = XLSX.read(data, {
                    type: 'binary'
                })
                workbook.SheetNames.forEach((sheetName) => {
                    let resObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName], {header: 0, defval:""});
                    finalData = [...finalData, ...resObject]
                })

                resolve(finalData)
            }
            reader.onerror = (err) => {
                reject(err)
            }
            reader.readAsBinaryString(file);
        })
    }
}
const makeFlatArray = (array) => {
    let resArray = [];
    array.forEach((item) => {
        resArray.push(Object.values(item))
    })
    return resArray;
}