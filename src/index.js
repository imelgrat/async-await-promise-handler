const appID = document.getElementById("app");

async function awaitPicture() {
  try {
    // The fetch() function returns a Promise object that resolves to a Response object
    // We use await to pause execution until the Promise is settled
    const response = await fetch("https://picsum.photos/200/200");

    // Convert the response object to an ArrayBuffer().
    // This also returns a Promise so it must be waited for
    const arrBuff = await response.arrayBuffer();

    // If the picture is 6KB or larger, reject the image.
    if (arrBuff.byteLength >= 6 * 1024) {
      throw new Error(
        `Sorry. The image is too large: ${parseInt(
          arrBuff.byteLength / 1024,
          10
        )} KB`
      );
    }

    // We now have the array buffer so we can convert it to a Base64 blob and insert it into the page.
    appID.insertAdjacentHTML(
      "beforeend",
      `<p><img src="data:;base64,${Buffer.from(arrBuff).toString(
        "base64"
      )}" /></p>`
    );

    // We received the picture's size. Let's display it!
    appID.insertAdjacentHTML(
      "beforeend",
      `<p><strong>Image size:</strong> ${parseInt(
        arrBuff.byteLength / 1024,
        10
      )} KB</p>`
    );
  }
  catch(reason)
  {
    appID.insertAdjacentHTML(
      "beforeend",
      `<p><strong>An error occurred:</strong> ${reason}</p>`
    );
  };
}


// Since await can't be used in top-level code,
// we wrap it inside an anonymous async function
(async () => {
  await awaitPicture();
})();