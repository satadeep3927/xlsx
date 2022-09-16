let file = document.querySelector('#file')
file.addEventListener('change', async (e) => {
    let uploadedFile = e.target.files[0]
    let {name} = uploadedFile
    document.querySelector('.text-label').innerHTML = name

    let exceltojson = new ExcelToJSON()
    let resObject = await exceltojson.parseExcel(uploadedFile)
    let flatArray = makeFlatArray(resObject)
    console.log(flatArray)
})