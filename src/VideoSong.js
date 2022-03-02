import { useParams } from "react-router-dom";
import { songsList } from "./songlist";
import { API } from "./global";
import { useState, useEffect  } from "react";

export function VideoSong() {
  const { id } = useParams();

  const [song, setSong]= useState({});
  const getSong = () => {
    fetch(`${API}/${id}`, 
    {method: "GET",}) // promise
    .then((data) => data.json()) // Response object
    .then((mvs) => setSong(mvs))
    .catch((err) => console.log(err));
  };

  useEffect(() => getSong(), []);
  // const song = songsList[id];
  console.log(song);
  return (
    <div className="song-box">
      <h1 className="title">{song.title}</h1>
      <iframe
        width="1200"
        height="550"
        style={{
          padding: "10px", backgroundColor: "white",
          borderRadius: "5px"
        }}
        src={song.video}
        title={song.title}
        frameborder="0"
        allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; 
gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="song-det">
        <p><b>Song Title: </b>{song.title}</p>
        <p><b>Movie: </b>{song.movie}</p>
        <p><b>Starring: </b>{song.cast}</p>
        <p><b>Singers: </b>{song.singers}</p>
        <p><b>Composed by </b>{song.music}</p>
        <p><b>Lyrics: </b>{song.lyrics}</p>
      </div>

    </div>
  );
}
