import React, { useState, useEffect } from 'react'
// const key = "ae2f2758";
const API_ENDPOINT = 'https://api.github.com'
// const key = "ae2f2758"
const API_ENDPOINTT = `https://api.github.com`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
if(data){
   setData(data )

        setErr({ show: false, msg: '' })

}
else {
        setErr({ show: true, msg: data.Error })
      }
       setIsLoading(false)
     
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINTT}${urlParams}`)
  }, [urlParams])
  return { isLoading, err, data }
}

export default useFetch
