// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";

// const ModelList = ({ data , onItemClick }) => {
//     console.log("Data in ModelList:", data);
//     if (!data || data.length === 0) {
//         return <div>No data available</div>;
//       }
// //   console.log("Data in ModelList:", data); // Log data received from props

// const handleItemClick = (item) => {
//     onItemClick(item);
//   };

//   return (
//     <>
//       <Grid className="container" container gap={2}>
//         {data.map((item) => (
//           <Card onClick={() => handleItemClick(item)} style={{width:"30vh"}} key={item.id}> {/* Added key attribute */}
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {item.name}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default ModelList;


// ModelList.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ModelList = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Link to={`/details/${item.id}`} style={{ textDecoration: "none" }}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
              <Button size="small">Learn More</Button>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ModelList;

