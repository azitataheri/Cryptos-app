const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-8ED1FmqnQopADvixwhHb7R13"

const getCoinList = (page, currency) => `${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&order=market_cap_desc&x_cg_demo_api_key=${API_KEY}`
const searchCoin = (query) => `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`

export {
    getCoinList, searchCoin
}