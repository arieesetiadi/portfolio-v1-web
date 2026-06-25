"use client";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section id="spacer">
        <div
          className="spacer"
          data-height="96"
          style={{ height: "96px" }}></div>
      </section>

      <span onClick={scrollToTop} id="return-to-top" role="button">
        <img
          width="18"
          height="18"
          src="/images/icons/arrow-up-white.svg"
          alt="Scroll to top icon"
        />
      </span>
    </>
  );
}
