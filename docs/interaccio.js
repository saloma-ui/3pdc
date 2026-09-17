function inicialitzaInteraccionsPresentacio() {
  document.querySelectorAll("[data-pv-revela]").forEach((boto) => {
    if (boto.dataset.pvReady === "true") return;
    boto.dataset.pvReady = "true";

    const objectiu = document.getElementById(boto.dataset.pvRevela);
    if (!objectiu) return;

    objectiu.hidden = true;
    boto.setAttribute("aria-controls", objectiu.id);
    boto.setAttribute("aria-expanded", "false");

    boto.addEventListener("click", () => {
      const obrir = objectiu.hidden;
      objectiu.hidden = !obrir;
      boto.setAttribute("aria-expanded", obrir ? "true" : "false");
    });
  });

  document.querySelectorAll("[data-pv-quiz]").forEach((quiz) => {
    if (quiz.dataset.pvReady === "true") return;
    quiz.dataset.pvReady = "true";

    const opcions = quiz.querySelectorAll(".pv-opcio");
    const feedbacks = quiz.querySelectorAll(".pv-feedback");

    opcions.forEach((boto) => {
      boto.addEventListener("click", () => {
        opcions.forEach((opcio) => {
          const seleccionada = opcio === boto;
          opcio.classList.toggle("pv-seleccionada", seleccionada);
          opcio.setAttribute("aria-pressed", seleccionada ? "true" : "false");
        });

        feedbacks.forEach((feedback) => {
          feedback.hidden = feedback.dataset.feedbackId !== boto.dataset.feedback;
        });
      });
    });
  });

  document.querySelectorAll("[data-pv-classificacio]").forEach((bloc) => {
    if (bloc.dataset.pvReady === "true") return;
    bloc.dataset.pvReady = "true";

    bloc.querySelectorAll(".pv-terme").forEach((boto) => {
      boto.setAttribute("aria-expanded", "false");

      boto.addEventListener("click", () => {
        if (boto.dataset.pvResolved === "true") return;

        const etiqueta = document.createElement("span");
        etiqueta.className = "pv-etiqueta";
        etiqueta.textContent = boto.dataset.resposta;
        boto.appendChild(etiqueta);
        boto.dataset.pvResolved = "true";
        boto.setAttribute("aria-expanded", "true");
      });
    });
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(inicialitzaInteraccionsPresentacio);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicialitzaInteraccionsPresentacio);
} else {
  inicialitzaInteraccionsPresentacio();
}
