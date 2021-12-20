

export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())

    })
}

//фильтр для поиска

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value

    })
}

//фильтр для выбора категорий

export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== ''){
            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min === '' && max !== ''){
            return goodsItem.price < +max
        } else if (min !== '' && max === ''){
            return goodsItem.price > +min
        }

    })
}

//фильтр для ценового диапазона

export const hotSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if (value) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }

    })
}

//фильтр для кнопки акция