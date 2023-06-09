const url = "http://localhost:3001"

export const createUser = async(payload)=>{
    console.log(url)
    console.log("hello")
    console.log(payload)
    try{
        const res = await fetch(`http://localhost:3001/api/v1/createuser`,
        {
            mode:"no-cors",
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                // "Access-Control-Allow-Origin": "https://localhost:3000"
            },
            body:JSON.stringify(payload)
        })
        const data = res.json();
        return data;   
    }
    catch(err){
        console.log(err)
    }
}

export const login = async (payload) => {
    try{
        const res = await fetch(`${url}/api/v1/login`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin":  "http://127.0.0.1:3001",
                "Access-Control-Allow-Methods": "*"
            },
            body:JSON.stringify(payload)
            // body:payload
        })
        const data = await res.json();
        console.log(data);
        return data
        
    }
    catch(err){
        console.log(err)
    }
}

export const getUser = async(token)=>{
    try{
        const res = await fetch(`${url}/api/v1/getuser`,{
            method:"GET",
            headers:{
                "token":token
            }
        })
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export const putStartup = async(token,obj)=>{
    try{
        const res = await fetch(`${url}/api/v1/startup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "token":token
            },
            body:JSON.stringify(obj)
        })
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}