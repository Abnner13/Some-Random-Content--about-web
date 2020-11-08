// // function minmaxArray(array) {
// //     let min, max;
// //     array.forEach(() => {
// //         min = array[0];
// //         max = array[0];

// //         if(max > array ){

// //         }
// //     });
// // }


// // var min, max;
// // function minmaxArray(array) {
// //     array.reduce((acc, curr) => {
// //         if (curr > max) {
// //             max = curr
// //         }

// //         if (curr < min) {
// //             min = curr
// //         }

// //         return `${min, max}`
// //     });
// // }
// // console.log(minmaxArray([0,7,11,100]));


// function minmaxArray() {
//     const array = [0,7,11,100]
//     minValue = Infinity;
//     maxValue = -Infinity;
    
//     for (item of array) {
//         // find minimum value
//         if (item < minValue)
//         minValue = item;
                    
//         // find maximum value
//         if (item > maxValue)
//         maxValue = item;
//     }
// }

// console.log(minmaxArray())


// function findMinMax() { 
//     array = [50, 60, 20, 10, 40]; 
//     minValue = Infinity; 
//     maxValue = -Infinity; 

//     for (item of array) { 
//         // find minimum value 
//         if (item < minValue) 
//             minValue = item; 

//         // find maximum value 
//         if (item > maxValue) 
//             maxValue = item; 
//     } 

//     console.log(maxValue)
//     console.log(minValue)

// } 


(function findMinMax() { 
    array = [50, 60, 20, 10, 40]; 
    minValue = Infinity; 
    maxValue = -Infinity; 

    for (item of array) { 
        // find minimum value 
        if (item < minValue) 
            minValue = item; 

        // find maximum value 
        if (item > maxValue) 
            maxValue = item; 
    } 

    document.querySelector( 
    '.min').textContent = minValue; 
    document.querySelector( 
    '.max').textContent = maxValue; 
    console.log(minValue)
    console.log(maxValue)
}) 
