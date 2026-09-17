function inicialitzaInteraccionsPresentacio() {
  document.querySelectorAll("[data-pv-presentacio]").forEach((presentacio) => {
    if (presentacio.dataset.pvReady === "true") return;
    presentacio.dataset.pvReady = "true";

    const seccions = Array.from(presentacio.querySelectorAll(".pv-seccio"));
    if (!seccions.length) return;

    let indexActual = 0;
    const movimentReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const controls = document.createElement("nav");
    controls.className = "pv-controls";
    controls.setAttribute("aria-label", "Controls de la presentació");

    const anterior = document.createElement("button");
    anterior.type = "button";
    anterior.textContent = "Anterior";

    const estat = document.createElement("output");
    estat.setAttribute("aria-live", "polite");

    const seguent = document.createElement("button");
    seguent.type = "button";
    seguent.textContent = "Següent";

    controls.append(anterior, estat, seguent);
    document.body.appendChild(controls);

    const actualitzaControls = (nouIndex) => {
      indexActual = Math.max(0, Math.min(nouIndex, seccions.length - 1));
      seccions.forEach((seccio, index) => {
        seccio.classList.toggle("pv-activa", index === indexActual);
      });
      anterior.disabled = indexActual === 0;
      seguent.disabled = indexActual === seccions.length - 1;
      estat.value = `${indexActual + 1} / ${seccions.length}`;
      estat.textContent = estat.value;
    };

    const vesA = (nouIndex) => {
      actualitzaControls(nouIndex);
      seccions[indexActual].scrollIntoView({
        behavior: movimentReduit ? "auto" : "smooth",
        block: "start"
      });
    };

    anterior.addEventListener("click", () => vesA(indexActual - 1));
    seguent.addEventListener("click", () => vesA(indexActual + 1));

    if ("IntersectionObserver" in window) {
      const observador = new IntersectionObserver((entrades) => {
        const visible = entrades
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        actualitzaControls(seccions.indexOf(visible.target));
      }, { threshold: [0.45, 0.65] });

      seccions.forEach((seccio) => observador.observe(seccio));
    }

    if (window.pvControlTeclat) {
      document.removeEventListener("keydown", window.pvControlTeclat);
    }

    window.pvControlTeclat = (esdeveniment) => {
      if (!document.body.contains(presentacio)) return;
      const etiqueta = esdeveniment.target.tagName;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(etiqueta)) return;
      if (esdeveniment.key === "ArrowRight" || esdeveniment.key === "PageDown") {
        esdeveniment.preventDefault();
        vesA(indexActual + 1);
      }
      if (esdeveniment.key === "ArrowLeft" || esdeveniment.key === "PageUp") {
        esdeveniment.preventDefault();
        vesA(indexActual - 1);
      }
    };

    document.addEventListener("keydown", window.pvControlTeclat);
    actualitzaControls(0);
  });

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
