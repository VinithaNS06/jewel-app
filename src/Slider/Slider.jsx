import { Grid, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import useStyles from "./style";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import teamWorkReviews from "../../../Model/Home/TeamWork";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modulesimport { Navigation, Pagination } from 'swiper'
const TeamWork = () => {
  const classes = useStyles();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h2">Clients about our teamwork</Typography>
        </Grid>
        <Grid item xs={12} className={classes.sliderWrapper}>
          <Grid item xs={1} className={classes.iconBtn}>
            <IconButton size="small" ref={prevRef}>
              <KeyboardArrowLeftOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={1}
              navigation={true}
              spaceBetween={12}
              pagination={{ clickable: true, type: "bullets" }}
              modules={[Navigation, Pagination]}
              grabCursor={true}
              className="mySwiper"
            >
              {teamWorkReviews?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <Grid item xs={12} className={classes.swiperContainer}>
                    {item?.slide?.map((data) => (
                      <Grid
                        item
                        xs={11.9}
                        sm={5.9}
                        md={3.8}
                        className={classes.box}
                        key={data?.id}
                      >
                        <section className={classes.icon}>
                          <FormatQuoteIcon />
                        </section>
                        <section className={classes.profileWrapper}>
                          <img
                            src={data?.profilePic}
                            alt="profilePic"
                            className={classes.img}
                          />{" "}
                          <Typography sx={{ fontWeight: 600 }} variant="h6">
                            {data?.name}
                          </Typography>
                        </section>
                        <section className={classes.content}>
                          <Typography variant="h6">{data?.content}</Typography>
                        </section>
                      </Grid>
                    ))}
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>{" "}
          <Grid item xs={1} className={classes.iconBtn}>
            {" "}
            <IconButton size="small" ref={nextRef}>
              <KeyboardArrowRightOutlinedIcon />
            </IconButton>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </>
  );
};
export default TeamWork;
