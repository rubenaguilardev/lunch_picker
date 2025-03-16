let lunches = [];

const addLunchToEnd = (arr, str) => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

const addLunchToStart = (arr, str) => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

const removeLastLunch = arr => {
  if (arr.length > 0) {
    let removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }
  return arr;
}

const removeFirstLunch = arr => {
  if (arr.length > 0) {
    let removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  } else {
      console.log('No lunches to remove.');
  }
  return arr;
}

const getRandomLunch = arr => {
  if (arr.length > 0) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomNumber]}`);
  } else {
    console.log('No lunches available.');
  }
}

const showLunchMenu = arr => {
  if (arr.length > 0) {
    let menuItems = arr.join(", ");
    console.log(`Menu items: ${menuItems}`);
  } else {
    console.log('The menu is empty.');
  }
}
