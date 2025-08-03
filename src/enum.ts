enum ResponseStatus {SUCCESS, FAILUR, FORBIDDEN, UNOUTHORIZED}

interface ResAPI2<T>{ //captured type dynamically
    status: number;
    responseResult: ResponseStatus;
    data2: T;
}

//can be pass any type data with specifiedly telling
const response2: ResAPI2<object | string> = {
    status : 200,
    responseResult : ResponseStatus.FORBIDDEN,
    data2: "success"
}

console.log(response2);