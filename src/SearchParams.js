import { useState } from "react";

const SeachParams = () =>{
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          <input id="location" onChange={(e) => setLocation(e.target.value)} value={location} type="text" />
        </label>
        <button>search</button>
      </form>
    </div>
  )
}

export default SeachParams;
