(function (d) {
  const $form = d.querySelector(".contact-formulario");
  const $response = d.querySelector(".contact-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(
      "https://formsubmit.co/ajax/juanusca45@gmail.com",
      { method: "POST", body: new FormData(e.target) })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let errMsg =
            err.statusText || "Ocurrio un error al enviar , intente nuevamente";
          $response.querySelector("h3").innerHTML =
            "Error" + err.status + ":" + err.errMsg;
        })
        .finally(() => {
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        })

  });
})(document);
