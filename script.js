window.addEventListener("load", onVrViewLoad);

function onVrViewLoad() {
  var element = document.querySelector("dl8-video");
  element.start();

  var vrView1 = new VRView.Player("#vr-view-1", {
    video: "./file.mp4",
    is_stereo: true,
  });
}
