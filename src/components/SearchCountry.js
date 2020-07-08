import React, { useEffect, useState } from "react";
import PaperBox from "./PaperBox";

const SearchCountry = ({ searchItem }) => {
  const [countryData, setCountryData] = useState();
  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${searchItem}`)
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, [searchItem]);
  return (
    <div>
      {setCountryData ? (
        <PaperBox
          title={`Cases in ${searchItem.toUpperCase()}`}
          globalData={countryData}
        />
      ) : null}
    </div>
  );
};
export default SearchCountry;
