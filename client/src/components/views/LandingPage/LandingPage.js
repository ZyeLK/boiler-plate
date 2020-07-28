import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage(){
    useEffect(() => { // LandingPage에 들어오자마자 실행할 것
        axios.get('/api/hello') // http://localhost:5000 부분은 안 해도 됨
             .then(response => console.log(response.data))
    }, [])

    return(
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage