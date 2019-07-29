var maptest = (arr, fn) =>{
    // return (arr.map(fn))
    var arrx = []
    for(var i = 0; i<arr.length; i++){
        arrx.push(fn(arr[i]))
    }
    return arrx
}
var arr1 = [1,2,3,4,5]
var arrhasil = maptest(arr1, (item)=> `Angka ${item}`) // = function a(item){return 'Angka' + item}
console.log(arrhasil)

var filtertest = (arr, fn) =>{
    var arrx = []
    for(var i = 0; i<arr.length ; i++){
        if(fn(arr[i])){
            arrx.push(arr[i])
        }
    }

    return arrx
   
}

var arrhasil = filtertest(arr1, (item) => item%2 === 0) // parameter ke2 itu adalah callback function, sama dgn function a(item){return item===0}
console.log(arrhasil)