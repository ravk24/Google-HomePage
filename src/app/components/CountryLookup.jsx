"use client";
import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API}`
      );
      if (!response) return;
      const data = await response.json();
      const ipCountry = data.country;
      setCountry(ipCountry);
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
