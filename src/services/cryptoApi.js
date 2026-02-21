const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-8ED1FmqnQopADvixwhHb7R13"

const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=20&page=1&order=market_cap_desc&x_cg_demo_api_key=${API_KEY}`
}

export {
    getCoinList
}