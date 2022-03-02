import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function SongCard({ image, title, movie, id,editButton, deleteButton }) {
  const history = useHistory();
  const [show, setshow] = useState(true);
 console.log(id);
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }} 
    className="card"
    style={{borderRadius: "30px 0px 30px 0px",boxShadow: "3px 3px 9px rgb(107, 107, 107)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          style={{ mouseCursor: "pointer" }}
          image={image}
          onClick={() => history.push(`/songs/${id}`)}
          alt="green iguana"
          style={{ objectFit: "cover" }}
        />
        <CardContent onClick={() => history.push(`/songs/${id}`)}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie}
          </Typography>
        </CardContent>
        <div className="buttons" style={{padding: "5px"}}>
            {/* Like button */}
            <IconButton
              aria-label="like-btn"
              style={{ color: "#f3077f", }}
              size="large"
              onClick={() => {
                setshow(!show);
              }}
            >
              {!show ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>

            {/* Delete button & Edit button */}
            <div>
              {deleteButton}
              {editButton}
            </div>
          </div>
      </CardActionArea>
    </Card>
  );
}
