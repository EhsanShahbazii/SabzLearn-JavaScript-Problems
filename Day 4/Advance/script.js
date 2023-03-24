const $ = document;
const input = $.getElementById("input"),
  output = $.getElementById("result"),
  btn = $.getElementById("submit_btn"),
  ctrl = $.getElementsByClassName("ctrl"),
  head = $.getElementsByClassName("head")[0];

let list = [],
  type;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const setData = () => {
  output.innerText = "";
  for (let i = 0; i < list.length; i++) output.innerText += ` ${list[i]},`;
};

const swap = (xp, yp) => {
  let temp = list[xp];
  list[xp] = list[yp];
  list[yp] = temp;
};

// const merge2Array = (arr, leftIndex, middleIndex, rightIndex) => {
//   let size1 = middleIndex - leftIndex + 1,
//     size2 = rightIndex - middleIndex;

//   let leftArray = new Array(size1),
//     rightArray = new Array(size2);

//   for (let i = 0; i < size1; i++) leftArray[i] = arr[leftIndex + i];
//   for (let j = 0; j < size2; j++) rightArray[j] = arr[middleIndex + 1 + j];
//   let i = 0,
//     j = 0,
//     k = leftIndex;

//   while (i < size1 && j < size2) {
//     if (leftArray[i] <= rightArray[j]) {
//       arr[k] = leftArray[i];
//       i++;
//     } else {
//       arr[k] = rightArray[j];
//       j++;
//     }
//     k++;
//   }

//   while (i < size1) {
//     arr[k] = leftArray[i];
//     i++;
//     k++;
//   }
//   while (j < size2) {
//     arr[k] = rightArray[j];
//     j++;
//     k++;
//   }
// };

const bubbleSort = async () => {
  let i, j;
  for (i = 0; i < list.length; i++) {
    for (j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        swap(j, j + 1);
        await sleep(100);
      }
      setData();
    }
  }
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
};

const selectionSort = async () => {
  let i, j, min;
  for (i = 0; i < list.length - 1; i++) {
    min = i;
    for (j = i + 1; j < list.length; j++) if (list[j] < list[min]) min = j;
    swap(min, i);
    await sleep(100);
    setData();
  }
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
};

const insertionSort = async () => {
  let i, element, j;
  for (i = 1; i < list.length; i++) {
    element = list[i];
    j = i - 1;
    while (j >= 0 && list[j] > element) {
      list[j + 1] = list[j];
      j = j - 1;
      await sleep(100);
      setData();
    }
    list[j + 1] = element;
  }
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
};

// const quickSort = async (arr) => {
//   let pivot = arr[0],
//     left = [],
//     right = [];
//   let i;
//   for (i = 1; i < arr.length; i++)
//     list[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//   await sleep(100);
//   setData();
//   return quickSort(left).concat(pivot, quickSort(right));
// };

// const mergeSort = async (arr, leftIndex, rightIndex) => {
//   if (leftIndex >= rightIndex) return;

//   let middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2);
//   mergeSort(arr, leftIndex, middleIndex);
//   mergeSort(arr, middleIndex + 1, rightIndex);
//   merge2Array(arr, leftIndex, middleIndex, rightIndex);
//   await sleep(100);
//   setData();
// };

btn.addEventListener("click", () => {
  let data, i;
  if (input.value !== "") {
    data = input.value.split(",");
    for (i = 0; i < data.length; i++) list.push(Number(data[i]));
    switch (type) {
      case "Bubble":
        bubbleSort();
        break;
      case "Selection":
        selectionSort();
        break;
      case "Insertion":
        insertionSort();
        break;
      default:
        bubbleSort();
    }
  } else {
    alert("please enter your on ordered list.");
  }
});

[...ctrl].map((btn) => {
  btn.addEventListener("click", (e) => {
    [...ctrl].map((b) => b.children[0].classList.remove("active"));
    e.target.classList.add("active");
    head.innerText = `${e.target.innerText} Sort`;
    type = e.target.innerText;
  });
});
