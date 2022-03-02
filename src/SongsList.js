import { SongCard } from "./SongCard";
import { API } from "./global";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";

export function SongsList({songlist, setList}) {

  const history= useHistory();
  const getSongs = () => {
    fetch(API, 
    {method: "GET",}) // promise
    .then((data) => data.json()) // Response object
    .then((mvs) => setList(mvs));};
  
    useEffect(() => getSongs(), []);
  
    // Delete movie -> Refresh data
    const deleteSong = (id) => {
      fetch(`${API}/${id}`,
       {method: "DELETE",})
       .then(() => getSongs());
      };
  
  return (
    <div>
      <h1 className="title">🎵Trending Songs List🎼</h1>
      <p style={{fontSize: "18px", opacity: "0.8"}}>To play the video, Just click song which you want👆</p>
      <div  className="box">
          {songlist.map(({image, title, movie, id}, index) => (
        <SongCard
        key={index}
          id={id}
          image={image}
          title={title}
          movie={movie}
          list={songlist} 
          setList={setList}
          deleteButton={
            <IconButton
                aria-label="delete-btn"
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={() => {
                 deleteSong(id)
                }}
              >
                <DeleteIcon />
              </IconButton>
          }
          editButton={
            <IconButton
            aria-label="edit-btn"
            color="secondary"
            onClick={() => {
              history.push(`/song-edit/${id}`);
            }}
          >
            <EditIcon />
          </IconButton>
          }
        />
      ))}
      
      </div>
      
    </div>
  );
}

