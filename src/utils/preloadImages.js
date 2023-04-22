import imagesLoaded from "imagesloaded";

export default function preloadImages(selector) {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve,
    );
  });
}
