export const processChartData = (stockData) => {
    const formattedData =[];

    if(stockData["Time Series (Daily)"]){
        Object.entries(stockData["Time Series (Daily)"]).map(([key,value])=>{
            formattedData.push({
                x:key,
                y:[
                    value["1. open"],
                    value["2. high"],
                    value["3. low"],
                    value["4. close"],
                ]
            })
        })
    }
    else if(stockData["Weekly Time Series"]){
        Object.entries(stockData["Weekly Time Series"]).map(([key,value])=>{
            formattedData.push({
                x:key,
                y:[
                    value["1. open"],
                    value["2. high"],
                    value["3. low"],
                    value["4. close"],
                ]
            })
        })
    }
    else if(stockData["Monthly Time Series"]){
        Object.entries(stockData["Monthly Time Series"]).map(([key,value])=>{
            formattedData.push({
                x:key,
                y:[
                    value["1. open"],
                    value["2. high"],
                    value["3. low"],
                    value["4. close"],
                ]
            })
        })
    }
    
    return formattedData;
}