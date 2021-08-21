import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/AlbumDetail.css";
import Card from "./Card";
import Paginations from '../components/Paginations'
const AlbumDetail = () => {
  const { albumId, userId } = useParams();
  console.log(albumId, userId);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [album, setAlbum] = useState([]);
  const [page,setPage] = useState(1);

  const fetchTitle = async () => {
    const albumResponse = await axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    return albumResponse.data;
  };

  const fetchUsers = async () => {
    const usersResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    return await usersResponse.data;
  };

  const fetchPhoto = async () => {
    const photoResponse = await axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .catch((err) => {
        console.log("Error", err);
      });
    return await photoResponse.data;
  };

  useEffect( async() => {
    setAlbum( await fetchTitle());
  }, []);
  useEffect( async() => {
    setUsers (await fetchUsers());
  }, []);
  useEffect(async () => {
    setPhotos(await fetchPhoto());
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>{album.title}</h1>
          <h3>Upload By :{users.name}</h3>
        </div>
        <div className="card-div">
        {photos.slice((page-1)*9,((page-1)*9) + 9 ).map((photo) => (
          <Card img={photo.url} title={photo.title} />
        ))}
        </div>
        <div className="btn_bt ">
  {page === 1 ? "" : (<button type="button"  className=" special-btn"  onClick={() => setPage(page+1)}>Previous</button>)}

  <Paginations limit={photos.length/9} setPage={setPage} />
  {page === (photos.length/9) ? "" : (<button type="button"  className=" special-btn"   onClick={() => setPage(page-1)}>Next</button>)}
  </div>
      </div>
     
    </>
  );
};

export default AlbumDetail;
