const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function revealSite() {
    document.body.classList.add("loaded");

    const revealDelay = reducedMotion ? 50 : 1050;
    window.setTimeout(() => {
        document.body.classList.add("revealed");
    }, revealDelay);
}

if (document.readyState === "complete") {
    revealSite();
} else {
    window.addEventListener("load", revealSite, { once: true });
}