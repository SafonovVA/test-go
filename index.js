let array = Array.from({length: 50}, () => Math.floor(Math.random() * 40));

function sorts(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr.shift();
    let less = arr.filter(x => x <= pivot);
    let greater = arr.filter(x => x > pivot);
    return sorts(less).concat(pivot, sorts(greater));
}

function search(arr, key) {
	let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}
console.log(array)
let sorted = sorts(array);

console.log(sorted)
let foundIndex = search(sorted, 7)

console.log(foundIndex, sorted[foundIndex])

/////////////
/*package main

import (
	"math/rand"
	"fmt"
)

func main()  {
	array := rand.Perm(40)
	fmt.Println(array)
	array = sort(array)
	fmt.Println(array)
	fmt.Println(1/2)
}

func sort(array []int) []int {
	if len(array) < 2 {
		return array
	}
	pivot := array[0]
	array = array[1:]

	less := []int{}
	for i := range array {
		if array[i] <= pivot {
			less = append(less, array[i])
		}
	}

	greater := []int{}
	for i := range array {
		if array[i] > pivot {
			greater = append(greater, array[i])
		}
	}

	lessPivot := append(sort(less), pivot)
	return append(lessPivot, sort(greater)...)
}*/