


function pageCount(n, p) {
    // Write your code here
    const length = n / 2;
    const book = [];
    let pages = 0;

    if (p <= length) {
        for (let i = 0; i <= n; i++) {
            book.push(i);
        }
        for (let a = 0; a < book.length; a += 2) {
            if (book[a] === p || book[a + 1] === p) {
                return pages;
            } else {
                pages++;
            }
        }
    } else {
        for (let j = n; j >= 1; j--) {
            book.push(j);
        }
        console.log(book);
        for (let b = 0; b < book.length; b += 2) {
            if (book[b] === p || book[b + 1] === p) {
                return pages
            } else {
                pages++;
            }
        }
    }
}

// function pageCount(n, p) {
//     const isPageEven = p % 2 === 0;
//     const isBookEven = n % 2 === 0;
//     const distToStart = isPageEven ? p / 2 : (p - 1) / 2;
//     const distToEnd = isBookEven ? (n / 2) - distToStart : ((n - 1) / 2) - distToStart;
//     return Math.min(distToStart, distToEnd);
// }


console.log(pageCount(5, 3));
console.log(pageCount(5, 4));
console.log(pageCount(6, 2));
console.log(pageCount(6, 5));