import React, { useState } from "react";
// import { Carousel, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import MenuBar from "./MenuHome";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Slider from "react-slick";
import { Button } from "antd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  background: "rgba(0, 0, 0, 0)",
  boxShadow: 24,
};

const SliderHome = (movie) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    dots: true,
  };

  return (
    <div>
      <Slider style={{ width: "100%" }} {...settings}>
        {/* <Carousel afterChange={onChange}> */}
        <div className="slider1">
          <MenuBar />
          <h1 className="title">
            <strong>
              Doctor Strange in the<br></br>
              Multiverse of <br></br>
              Madness
            </strong>
          </h1>
          <p className="Deskripsi">
            Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending<br></br>
            and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.
          </p>
          <Button
            style={{
              textAlign: "center",
              color: "white",
              marginLeft: 30,
              marginTop: 20,
              fontSize: 10,
              borderRadius: 20,
            }}
            type={"primary"}
            danger
            icon={<PlayCircleOutlined />}
            onClick={handleOpen}
            id="slide1"
          >
            WATCH TRAILER
          </Button>
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
                  width="800"
                  height="500"
                  src="https://www.youtube.com/embed/aWzlQ2N6qqg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            </Fade>
          </Modal>
        </div>

        <div className="slider2">
          <MenuBar />
          <h1 className="title">
            <strong>Magnum Opus</strong>
          </h1>
          <p className="Deskripsi">
            Groot sets out to paint a family portrait of himself and the Guardians,<br></br>
            only to discover just how messy the artistic process can be.
          </p>
          <Button
            style={{
              textAlign: "center",
              color: "white",
              marginLeft: 30,
              marginTop: 20,
              fontSize: 10,
              borderRadius: 20,
            }}
            type={"primary"}
            danger
            icon={<PlayCircleOutlined />}
            onClick={handleOpen}
          >
            WATCH TRAILER
          </Button>
          {/* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <iframe
                  width="601"
                  height="351"
                  src="https://youtu.be/m9EX0f6V11Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            </Fade>
          </Modal> */}
        </div>

        <div className="slider3">
          <MenuBar />
          <h1 className="title">
            <strong>
              Minions: <br></br>
              The Rise of Gru
            </strong>
          </h1>
          <p className="Deskripsi">
            A fanboy of a supervillain supergroup known as the Vicious 6, <br></br>
            Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.
          </p>
          <Button
            style={{
              textAlign: "center",
              color: "white",
              marginLeft: 30,
              marginTop: 20,
              fontSize: 10,
              borderRadius: 20,
            }}
            type={"primary"}
            danger
            icon={<PlayCircleOutlined />}
            onClick={handleOpen}
          >
            WATCH TRAILER
          </Button>
          {/* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <iframe
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/6DxjJzmYsXo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            </Fade>
          </Modal> */}
        </div>

        <div className="slider4">
          <MenuBar />
          <h1 className="title">
            <strong>House of the Dragon</strong>
          </h1>
          <p className="Deskripsi">
            The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. <br></br>
            Most empires crumble from such heights. In the case of the Targaryens,<br></br>
            their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne.<br></br>
            But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.
          </p>
          <Button
            style={{
              textAlign: "center",
              color: "white",
              marginLeft: 30,
              marginTop: 20,
              fontSize: 10,
              borderRadius: 20,
            }}
            type={"primary"}
            danger
            icon={<PlayCircleOutlined />}
            onClick={handleOpen}
          >
            WATCH TRAILER
          </Button>
          {/* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <iframe
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/DotnJ7tTA34"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            </Fade>
          </Modal> */}
        </div>

        <div className="slider5">
          <MenuBar />
          <h1 className="title">
            <strong>Ms. Marvel (2022)</strong>
          </h1>
          <p className="Deskripsi">
            A great student, avid gamer, and voracious fan-fic scribe, Kamala Khan has a special affinity for superheroes, <br></br>
            particularly Captain Marvel. However, she struggles to fit in at home and at school — that is, <br></br>
            until she gets superpowers like the heroes she’s always looked up to. Life is easier with superpowers, right?
          </p>
          <Button
            style={{
              textAlign: "center",
              color: "white",
              marginLeft: 30,
              marginTop: 20,
              fontSize: 10,
              borderRadius: 20,
            }}
            type={"primary"}
            danger
            icon={<PlayCircleOutlined />}
            onClick={handleOpen}
          >
            WATCH TRAILER
          </Button>
          {/* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <iframe
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/m9EX0f6V11Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            </Fade>
          </Modal> */}
        </div>
        {/* </Carousel> */}
      </Slider>
    </div>
  );
};

export default SliderHome;
