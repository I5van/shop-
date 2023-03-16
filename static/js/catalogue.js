function createParamObj() {
    let urlParams=window.location.search
    urlParams = urlParams.slice(1,urlParams.length)
    let massiveUrlParams = []
    massiveUrlParams = urlParams.split(`&`)

    let obj = {}
    let property = ""
    let value = []
    for (let i = 0; i < massiveUrlParams.length; i++) {
        for (let j = 0; j < massiveUrlParams[i].length; j++) {
            if (massiveUrlParams[i][j] == "=") {
                console.log(massiveUrlParams)
                property = massiveUrlParams[i].slice(0, j)
               obj[property]= massiveUrlParams[i].slice(j + 1, massiveUrlParams[i].length).split(",")
                break
            }

        }
       
    }
    return obj
}

let params = createParamObj()
console.log(params)