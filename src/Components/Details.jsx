import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/d4d07199-812f-4041-b214-8fe1a45e9e1e"
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
    <div className="centered">
      <Card sx={{ maxWidth: 345 }}>
        {user ? (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.description}
            </Typography>
            <Typography>
             Provider: {user.provider}
            </Typography>
            <h3>Use Case:</h3>
            <Typography variant="body2" color="text.secondary">
             {user.use_cases.map((val)=>(<p>{`${val}`}</p>))}
            </Typography>
            <Typography>Category:{user.category}</Typography>
            <CardActions>
              <Link to="/"><Button size="small">Go back</Button></Link>
            </CardActions>
          </CardContent>
        ) : (
          <p>Loading user details...</p>
        )}
      </Card>
    </div>
  );
};

export default Details;
