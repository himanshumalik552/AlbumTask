import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../style/AlbumList.css";
import AlbumCard from "./AlbumCard";
import {setAlbums} from '../redux/action/albumAction';
const AlbumList = () => {
  const albums = useSelector((state) => state);
  const dispatch = useDispatch(); 
  //fetch album
  const fetchAlbums = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/albums/")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setAlbums(response.data));
  };

  useEffect(() => {
    fetchAlbums()
  },[]);

  console.log("Albums", albums);
  return (
    <div>
      <div className="container">
        <div className="head_title">
          <h1>List Of the Album</h1>
        </div>
        <AlbumCard />
      </div>
    </div>
  );
};

export default AlbumList;
