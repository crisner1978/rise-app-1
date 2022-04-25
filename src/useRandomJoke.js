import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const useRandomJoke = (firstName, lastName) => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      await fetch(
        `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      ).then((res) => res.json()).then((data) => setJoke(data.value.joke))
    };
    fetchCategory();
  }, [firstName, lastName]);

  return joke
}

export default useRandomJoke