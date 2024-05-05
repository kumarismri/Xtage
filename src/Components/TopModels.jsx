import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./ModelList.css";

const TopModels = () => {
  const [data, setData] = useState([]);
  //   const [state, setState] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mocki.io/v1/d4d07199-812f-4041-b214-8fe1a45e9e1e`
        );
        setData(response.data.models);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="Models">Models</h1>
        <h1 className="the">AI</h1>
        <div className="top-model-container">
        <h3 className="fav-models">Users Favorite Models</h3>
        <Grid container spacing={2}>
          {data
            .filter((val) => val.id >= "3" && val.id < "6")
            .map((row) => (
              <Grid item xs={12} sm={6} md={4} key={row.id}>
                <Link
                  to={`/details/${row.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card style={{display:"flex",flexDirection: "column",height: "100%"}}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {row.name}
                      </Typography>
                    </CardContent>
                    <Button size="small">Explore</Button>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </div>
      </div>
    </>
  );
};

export default TopModels;
