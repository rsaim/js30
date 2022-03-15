const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function streamCamera() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: { exact: 320 }, height: { exact: 240 } }
    })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
            // These values are 0 unless "canplay event is triggered"
            console.log(video.videoHeight, video.videoWidth);
        })
        .catch(err => { alert(err); })
}

streamCamera();

function handlePlay(e) {
    console.log(e);
    const w = video.videoWidth;
    const h = video.videoHeight;
    console.log(h, w);
    [canvas.width, canvas.height] = [w, h];

    ctx.drawImage(video, 0, 0, w, h);
    let pixels = ctx.getImageData(0, 0, w, h);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);

    return setInterval(handlePlay, 250);
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 100] = pixels.data[i + 0]; // RED
      pixels.data[i + 20]  = pixels.data[i + 1]; // GREEN
      pixels.data[i + 100] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }

video.addEventListener("canplay", handlePlay);

function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    var data = canvas.toDataURL("image/jpg");
    // console.log(data);
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "mypic");
    link.innerHTML = `<image src=${data}>`;
    strip.insertBefore(link, strip.firstChild);
}