const listener = {}

const Store = {}

Store.useListener = (name, func) => {
    return listener[name]=func
}

Store.setListener = (name, data) => {
    if(name) {
        return listener[name](data)
    } else {
        return
    }
}

Store.Date = (x, y) => {
    if (y === undefined) {
        y = x;
        x = new Date();
    } else {
        x = new Date(x);
    }
    let replaces = {
        yyyy: x.getFullYear(),
        yy: ("" + x.getFullYear()).slice(-2),
        mm: ("0" + (x.getMonth() + 1)).slice(-2),
        dd: ("0" + x.getDate()).slice(-2),
        HH: ("0" + x.getHours()).slice(-2),
        MM: ("0" + x.getMinutes()).slice(-2),
        SS: ("0" + x.getSeconds()).slice(-2),
        __: `  \u00A0\u00A0\u00A0\u00A0  `,
        _: `  \u00A0\u00A0  `,
    };
    for (const replace in replaces) {
        y = y.replace(replace, replaces[replace]);
    }
    return y;
};


export default Store;