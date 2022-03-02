import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function AddNewSong() {


  const history= useHistory();

  const [Video, setvideo] = useState("");
  const [Image, setimage] = useState("");
  const [Name, setname] = useState("");
  const [Movie, setmovie] = useState("");
  const [Music, setmusic] = useState("");
  const [Singers, setsingers] = useState("");
  const [Cast, setcast] = useState("");
  const [Lyrics, setlyrics] = useState("");
  return (
<div className='addform'>
    <div className='inputdata'>
    <h1 className="title">🎶Add the new song here👇</h1>
      <div className='inputs'>
      <TextField id="outlined-basic" label="Video URL" variant="outlined"
          onChange={(event) => setvideo(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Poster" variant="outlined"
          onChange={(event) => setimage(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Song" variant="outlined"
          onChange={(event) => setname(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Movie" variant="outlined"
          onChange={(event) => setmovie(event.target.value)} /><br />
        <TextField id="outlined-basic" label="music"
          onChange={(event) => setmusic(event.target.value)} variant="outlined" /><br />
        <TextField id="outlined-basic" label='Singers'
          onChange={(event) => setsingers(event.target.value)} variant="outlined" />  <br />
        <TextField id="outlined-basic" label='Starring'
          onChange={(event) => setcast(event.target.value)} variant="outlined" />  <br />
        <TextField id="outlined-basic" label='Lyrics writer'
          onChange={(event) => setlyrics(event.target.value)} variant="outlined" /><br />
       

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" onClick={()=>{
           const newSong = {
            video:Video,
            title:Name,
            image:Image,
            movie:Movie,
            singers:Singers,
            music:Music,
            cast:Cast,
            lyrics:Lyrics
          };
          fetch(API, {
            method: "POST",body: JSON.stringify(newSong),
            headers: {"Content-Type": "application/json",},})
            .then(() => history.push("/songs-list"))
        }}
        >Add</Button>
         <Button className="addbtn" variant="contained"
         style={{backgroundColor: "#ff044f", margin: "10px"}}
         onClick={() => {
          history.goBack();
        }}>Cancel</Button>
      </div>
     </div>
    {/* <Movieslist list={list}/> */}
</div>
  );
}