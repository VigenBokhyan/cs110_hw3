const stars = function (n) {
    let x = '';
    for (let i = 0; i < n; ++i) {
        x += '*';
    }
    return x;
};

const space = function (n) {
    let x = '';
    for (let i = 0; i < n; ++i) {
        x += ' ';
    }
    return x;
};

let starCount = 1;

const diamond = function (n) {
    if (n % 2 === 0 ) {
        ++n;
    }

    let spaceCount = n - starCount;
    let num = (n + 1) / 2;


    for (let i = 0; i < num; ++i) {
        console.log( space(spaceCount) + stars(starCount));
        starCount += 2;
        --spaceCount;
    }
    starCount -= 2;
    ++spaceCount;


    for (let j = 0; j < n - num; ++j ) {
        ++spaceCount;
        starCount -= 2;
        console.log( space(spaceCount) + stars(starCount));
    }

};

diamond(20);