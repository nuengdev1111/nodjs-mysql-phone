import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{

    getData()
}, []);

  const getData = async () => {
    const url = 'http://localhost:5000/api/product';
    const resp = await axios.get(url);
    setData(resp.data)
  };

  return <div>App

    {
      data.map((item,index)=>{
        console.log(item)
        return <li>{item.name}</li>
      })


    }
  </div>;
};

export default App;
