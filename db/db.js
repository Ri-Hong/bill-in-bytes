
export class Receipt {
    store;
    date;
    totalPrice;
    category;
    itemsList = [
        {
            itemName: "",
            itemPrice: ""
        }
    ]
}

export const receipts = [];

export const addReceipt = function (receipt) {
    receipts.push(receipt);
}

export const getReceipts = function() {
    return receipts;
}

export const getDate = function(id) {
    return receipts[id].date;
}

export const getStore = function(id) {
    return receipts[id].store;
}

export const getCategory = function(id) {
    return receipts[id].category;
}

export const getTotalPrice = function(id) {
    return receipts[id].totalPrice;
}

export const getItem = function(receiptId, itemId) {
    return receipts[receiptId].itemsList[itemId];
}

export const getAllFromStore = function(store) {
    ret = []
    for (receipt in receipts) {
        if (receipt.store === store) {
            ret.push(receipt)
        }
    }
    return ret;
}

export const getAllOnDate = function(date) {
    ret = []
    for (receipt in receipts) {
        if (receipt.date === date) {
            ret.push(receipt)
        }
    }
    return ret;
}

export const getAllFromCategory = function(category) {
    ret = []
    for (receipt in receipts) {
        if (receipt.category === category) {
            ret.push(receipt)
        }
    }
    return ret;
}