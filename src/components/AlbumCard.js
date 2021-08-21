import React , {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../style/AlbumCard.css";
import Paginations from "./Paginations";
const AlbumCard = () => {
const [users, setUsers] = useState([])
const [page,setPage] = useState(1);
  const fetchUser = async()=>{
      const response = await axios.get('http://jsonplaceholder.typicode.com/users')
     
      return await response.data;
  }

  useEffect( async () => {
   setUsers(await fetchUser());
  }, [])


  const albums = useSelector((state) => state.allAlbums.albums);
  const renderAlbums = albums.slice((page-1)*5,((page-1)*5) + 5 ).map((albums) => {
    const {id, title, userId } = albums;
    return (
      <>
      <div key={id}>
        <div className="album row justify-content-center "  >
          <div className="card col-lg-9 col-12 ">
              <div className="card-body  ">
              <div className="row">
              <div className="col-lg-9 col-md-9  col-12  title-div">
                <h4 className="card-title">Album Title: {title}</h4>
                <h5 className="user-name">User Name: {
                 users.length !==0 && users.filter((user)=>user.id===userId)[0].name }</h5>
              </div>
              <div className="col-lg-3 col-md-3  col-12 link-div ">
              <Link to={`/albums/${id}/${userId}`} className="card-link">view more</Link>
              </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
       
      </>  
    );
  });
  return <>{renderAlbums}
  <div className="btn ">
  {page === 1 ? "" : (<button  className="special-btn" onClick={() => setPage(page+1)}>Previous</button>)}

  <Paginations limit={albums.length/5} setPage={setPage} />
  {page === (albums.length/5) ? "" : (<button className="special-btn"  onClick={() => setPage(page-1)}>Next</button>)}
  </div>
  </>;
  
};

export default AlbumCard;
