const express = require("express");
const videoFile = __dirname + "/../../models/videos.json";
const videos = require(videoFile);
const videoInfoFile = __dirname + "/../../models/videoinfo.json";
const videoInfo = require(videoInfoFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image
    };
  });
  res.json(videoList);
});

router.get("/:id", (req, res) => {
  const found = videoInfo.some(video => video.id === req.params.id);
  if (found) {
    res.json(videoInfo.filter(video => video.id === req.params.id)[0]);
  } else {
    res
      .status(400)
      .json({ errorMessage: `video with ID:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  const newId = helper.getNewId();
  const newVideo = {
    id: newId,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };
  const newvideoinfo = {
    id: newId,
    title: req.body.title,
    channel: "New Channel",
    image: req.body.image,
    description: req.body.description,
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      }
    ]
  };

  if (!newVideo.title || !newVideo.description || !newVideo.image) {
    return res.status(400).json({
      errorMessage:
        "Please provide title, description, and imageUrl for the video"
    });
  }
  videos.push(newVideo);
  videoInfo.push(newvideoinfo);
  helper.writeJSONFile(videoFile, videos);
  helper.writeJSONFile(videoInfoFile, videoInfo);
  res.json(videos);
});

router.put("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    videos.forEach(video => {
      if (video.id === req.params.id) {
        video.title = req.body.title ? req.body.title : video.title;
        video.description = req.body.description
          ? req.body.description
          : video.description;
        video.imageUrl = req.body.imageUrl ? req.body.imageUrl : video.imageUrl;
      }
    });
    helper.writeJSONFile(videoFile, videos);
    res.json({ msg: "video Updated", videos: videos });
  } else {
    res
      .status(404)
      .json({ errorMessage: `video with ID: ${req.params.id} not found` });
  }
});

router.delete("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    const videosAfterDeletion = videos.filter(
      video => video.id !== req.params.id
    );
    helper.writeJSONFile(videosFile, videosAfterDeletion);
    res.json({
      msg: `video with ID: ${req.params.id} Deleted`,
      videos: videosAfterDeletion
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: `video with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
