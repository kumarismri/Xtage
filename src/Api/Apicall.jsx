// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ModelList from "../Components/ModelList";

// const Apicall = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://mocki.io/v1/4a328d87-7495-45be-b740-c6310f0379f5`
//         );
//         console.log(response.data.models)
//         setData(response.data.models);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div>
//         {/* <Card data={data} /> */}
//         {data.length > 0 && <ModelList data={data} />}
//       </div>
//     </>
//   );
// };

// export default Apicall;


// Apicall.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ModelList from "../Components/ModelList";

const Apicall = ({ onItemClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mocki.io/v1/4a328d87-7495-45be-b740-c6310f0379f5`
        );
        setData(response.data.models);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <ModelList data={data} onItemClick={onItemClick} />;
};

export default Apicall;

