let array = Array.from({length: 50}, () => Math.floor(Math.random() * 40));

function fastSorts(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr.shift();
    let less = arr.filter(x => x <= pivot);
    let greater = arr.filter(x => x > pivot);
    return fastSorts(less).concat(pivot, fastSorts(greater));
}

function vybor(array) {
	for (i = 0, min = i; i < array.length - 1; i++) {
		for (j = i; j < array.length; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		if (i != min) {
			tmp = array[min];
			array[min] = array[i];
			array[i] = tmp;
		}
	}
	return array;
}

function vstavka(array) {
	for (i = 1; i < array.length; i++) {
		for (j = i, max = 0; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				max = array[j];
				array[j] = array[j - 1];
				array[j - 1] = max;
			}
		}
	}
	return array;
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
console.log('start array', array)

let sorted = fastSorts(array);
console.log('fast sort', sorted)

sorted = vybor(array)
console.log('vybor', sorted)

sorted = vstavka(array)
console.log('vstavka', sorted)

const searchValue = 7
let foundIndex = search(sorted, searchValue)

console.log('search value', searchValue, 'index:', foundIndex, 'value:', sorted[foundIndex])

let graph = []
graph['sdlfj'] = ['sdf']

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