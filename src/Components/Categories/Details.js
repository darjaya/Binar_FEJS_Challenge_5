import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Modal } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { PlayCircleOutlined } from "@ant-design/icons";
import Genres from "../Movie/Genres";

import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  background: "rgba(0, 0, 0, 0)",
  boxShadow: 24,
};

export default function Details(movie) {
  // const getBg = (Bgpath) => {
  //   return `https://www.themoviedb.org/t/p/original${Bgpath}`;
  // };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [videos, setVideos] = useState(null);
  const [movieId, setMovieId] = useState("");
  const [mediaType, setMediaType] = useState("");

  //

  const videoUrl = videos?.filter((vid) => vid.type === "Trailer" && vid.site === "YouTube")[0].key;

  const getVideo = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8aced447ac0b69fe5ae000b735a3adef`);
    const result = await response.json();
    setVideos(result?.results);
  };

  useEffect(() => {
    if (movieId && mediaType) getVideo(movieId, mediaType);
  }, [movieId, mediaType]);

  //
  const [detailMovie, setDetailMovie] = useState([]);
  const params = useParams();

  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8aced447ac0b69fe5ae000b735a3adef&language=en-US`).then((response) => {
        setDetailMovie(response.data);
      });
    }
  }, [params.id]);
  return (
    <div>
      <div>
        <Genres />
      </div>

      <Box
        elevation={3}
        backgroundImage={`url(https://www.themoviedb.org/t/p/original/${detailMovie.backdrop_path})`}
        style={{
          border: "1px solid gray",
          margin: 15,
          height: 650,
          justifyContent: "center",
          textAlign: "start",
          backgroundImage: `url(https://www.themoviedb.org/t/p/original/${detailMovie.backdrop_path})`,
        }}
      >
        <Row>
          <Col md={3}>
            <img src={getPoster(detailMovie.poster_path)} alt="name" style={{ marginLeft: 15, marginTop: 15, width: 400, height: 600, borderRadius: 5, cursor: "pointer" }} />
          </Col>
          <Col style={{ color: "white" }}>
            <h1 style={{ margin: 15, fontWeight: "bold" }}>{detailMovie.title || detailMovie.name} </h1>
            <p style={{ margin: 15 }}>
              {detailMovie.status}
              {", "}
              {detailMovie.release_date}{" "}
            </p>
            <h5 style={{ margin: 15, fontWeight: "bold" }}>
              Genre: <span style={{ color: "gray" }}> {detailMovie?.genres?.map((e) => e.name).join(", ")}</span>
            </h5>
            <h5 style={{ margin: 15, fontWeight: "bold" }}>Overview:</h5>
            <p style={{ margin: 15 }}>{detailMovie.overview}</p>
            <h5 style={{ margin: 15, fontWeight: "bold" }}>
              Production Companies: <span style={{ color: "gray" }}> {detailMovie?.production_companies?.map((e) => e.name).join(", ")}</span>
            </h5>
            <Link to={`/${movie.media_type}/${movie.id}`} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  marginTop: 5,
                  marginLeft: "15px",
                  width: "25ch",
                  borderRadius: "20px",
                  fontSize: 15,
                }}
                variant="contained"
                size="small"
                // onClick={handleOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setMovieId(movie.id);
                  setMediaType(movie.media_type);
                  handleOpen();
                }}
              >
                <PlayCircleOutlined style={{ marginRight: "5px" }} />
                WATCH TRAILER
              </Button>
            </Link>
            <Modal
              aria-labelledby="transition-modal-title"
              open={open}
              id="slide1"
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style} id="slide1">
                  <iframe
                    width="900"
                    height="550"
                    src={`https://www.youtube.com/embed/${videoUrl}`}
                    title={movie.title ?? movie.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>
              </Fade>
            </Modal>
          </Col>
        </Row>
      </Box>
    </div>
  );
}
