import React, { useEffect, useState } from 'react'

const AfterCustom = (url) => {
    const [data, setdata] = useState(null);
   useEffect(() => {
        fetch(url).then((res) => res.json()).then((data) => setdata(data));
   }, [data])
  return [data];
}

export default AfterCustom