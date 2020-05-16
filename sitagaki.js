var allDivElements = document.getElementsByTagName('div');

// 要素の一覧表示
console.log(allDivElements);

// read CSV file
// 次回

// 要素の中身表示
for (var i = 0; allDivElements.length; i++){
    console.log(allDivElements[i].textContent);
}

