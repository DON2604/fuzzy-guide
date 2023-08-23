import React, { useEffect } from 'react';

export const Ram = () => {
  const fetchData = async () => {
    const url =
      'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL&part=snippet&maxResults=50';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1d8f1e4f6fmsh176a1e23b5bbf6fp179f45jsn3c2d715fdf0f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the response as JSON
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Check the console for fetched data.</div>;
}


