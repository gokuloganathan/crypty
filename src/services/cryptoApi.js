import {createApi,fetchBaseQuery} from '@reduxjs/toolkit'

const cryptoApiHeaders = {
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '2e52dacad3mshe6b02c58a2b6dd4p19571djsn708c46aa6aae'
}


const baseUrl='https://coinranking1.p.rapidapi.com/coins'

const createRequest=(url)=>({url,header:crytoApiHeaders})
export const createApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>{
        getCryptos:builder.query({
            query:()=>createRequest('/coins')
        })
    }
})

export const {
    useGetCryptosQuery,
}=cryptoApi
/* 
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '2e52dacad3mshe6b02c58a2b6dd4p19571djsn708c46aa6aae'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/