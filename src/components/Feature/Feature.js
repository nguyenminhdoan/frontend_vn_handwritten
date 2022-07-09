import React, { useState } from "react";
import Result from "../../result/result.txt";
import "./Feature.css";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import * as pdfjs from "pdfjs-dist";
pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const PDFJS = window.pdfjsLib;

const Feature = () => {
  const [previewImage, setPreviewImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePrediction, setImagePrediction] = useState("");
  const [chosenFile, setChosenFile] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pdf, setPdf] = React.useState("");

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([imagePrediction], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    element.href = URL.createObjectURL(file);
    element.download = "result.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };
  const generatePreviewImage = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => callback(reader.result);
  };

  const convertPdfToImages = async (file) => {
    let images = [];
    const data = await readFileData(file);
    const pdf = await pdfjs.getDocument(data).promise;
    const canvas = document.createElement("canvas");
    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const viewport = page.getViewport({ scale: 1 });
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context, viewport: viewport }).promise;
      images.push(canvas.toDataURL());
    }
    canvas.remove();
    console.log(images);
    return images;
  };

  const readFileData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }
    if (file.type === "application/pdf") {
      convertPdfToImages(file);
    }

    setImageFile(file);
    generatePreviewImage(file, (previewImageUrl) => {
      setPreviewImage(previewImageUrl);
      setImagePrediction("");
    });
  };

  const uploadTransformerHandler = (event) => {
    if (!imageFile) {
      alert("please choose a file");
      return;
    }
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("file", imageFile, "img_transformer.png");
    let t0 = performance.now();

    getBase64(imageFile).then((result) => {
      let base_img = result.split(",")[1];
      const data = { img: base_img, type: "transformer" };
      axios
        .post("http://127.0.0.1:5000/api/recognize", data)
        .then((data) => {
          setImagePrediction(data.data.predicted);
          let t1 = performance.now();
          console.log(
            "The time Transformer model took to predict the image " +
              (t1 - t0) +
              " milliseconds."
          );
        })
        .catch((err) => console.log(err));
    });
  };

  const uploadCRNNHandler = (event) => {
    setTimeout(() => {
      handleClickOpen();
    }, 1000);

    if (!imageFile) {
      alert("please choose a file");
      return;
    }
    event.preventDefault();

    let t0 = performance.now();
    getBase64(imageFile).then((result) => {
      let base_img = result.split(",")[1];
      const data = { img: base_img, type: "rnn" };
      axios
        .post("http://127.0.0.1:5000/api/recognize", data)
        .then((data) => {
          setImagePrediction(data.data.predicted);
          let t1 = performance.now();
          console.log(
            "The time Transformer model took to predict the image " +
              (t1 - t0) +
              " milliseconds."
          );
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="container--feature">
      <div className="container--feature__col container--feature__uploading">
        <p>Upload Your Writting</p>
        {/* Button for choosing an image */}
        <div>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="btn"
          />
        </div>

        {/* Button for sending image to backend */}
        <span
          style={{ fontSize: 13, marginTop: "20px", display: "inline-block" }}
        >
          please choose algorithm you want to try...
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "1rem" }}>
            <button
              type="submit"
              onClick={uploadTransformerHandler}
              className="btn"
              // value="Transformer"
            >
              Transformer
            </button>
          </div>
          <div style={{ margin: "1rem" }}>
            <button
              type="submit"
              onClick={uploadCRNNHandler}
              className="btn"
              // value="LSTM & Attention"
            >
              Seg2Seg
            </button>
          </div>
        </div>

        {/* Field for previewing the chosen image */}
        <div className="container--image">
          {previewImage && (
            <img alt="inputimg" src={previewImage} className="previewImage" />
          )}
        </div>
      </div>
      {/* Text for model prediction */}
      <div className="container--feature__col container--feature__predicted ">
        {imagePrediction && <p>The model predicted: {imagePrediction}</p> && (
          <button
            style={{
              padding: 15,
              border: "none",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#71face",
            }}
            onClick={downloadTxtFile}
          >
            Click to download
          </button>
        )}
      </div>
      <div style={{ fontSize: 13, textAlign: "left", padding: 20 }}>
        {imagePrediction && (
          <div>
            {" "}
            <p>Your result is: </p> <span>{imagePrediction}</span>
          </div>
        )}
      </div>
      <DialogComp open={open} setOpen={setOpen} />
    </div>
  );
};

const DialogComp = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        {"Bạn có hài lòng với kết quả được dự đoán không?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Nếu thấy kết quả không đúng như ý hãy giúp chúng mình cải thiện hơn
          bằng cách upload hình ảnh và đoạn chữ tương ứng nhé &hearts;
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hài lòng lắm</Button>
        <Button onClick={handleClose}>Cải thiện nào</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Feature;
