import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/4a328d87-7495-45be-b740-c6310f0379f5"
        );
        const dataArray = Array.isArray(response.data.models)
          ? response.data.models
          : [];
        // Assuming the response data is an array of users
        const userWithId1 = dataArray.find((user) => user.id === parseInt(id)); // Parse the ID to an integer
        setUser(userWithId1);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {user ? (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      ) : (
        <p>Loading user details...</p>
      )}
    </Card>
  );
};

export default Details;
