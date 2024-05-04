import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./ModelList.css";

const ModelList = ({ data }) => {

  return (
    <div>
      {/* <h1 className="Models">Other Popular Models</h1> */}
      {/*<h1 className="the">AI</h1> */}
      <div className="main-container">
      <h4 className="fav-models">Other Popular Models</h4>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Link
                to={`/details/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card style={{display:"flex",flexDirection: "column",height: "100%"}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
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
  );
};

export default ModelList;
