function moveLastItem(sourceArray: any[], destinationArray: any[]): void {
  if (sourceArray.length === 0) {
    console.warn("Source array is empty.");
    return;
  }

  const lastItem = sourceArray.pop();
  destinationArray.push(lastItem);
}

// Example usage:
const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [5, 6, 7];

moveLastItem(array1, array2);

console.log("Array 1:", array1); // Output: [1, 2, 3]
console.log("Array 2:", array2); // Output: [5, 6, 7, 4]
