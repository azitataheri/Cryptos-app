const getCoinList = () => {
    return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1&order=market_cap_desc&x_cg_demo_api_key=CG-8ED1FmqnQopADvixwhHb7R13"
}

export {
    getCoinList
}