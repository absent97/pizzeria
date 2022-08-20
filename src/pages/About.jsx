import MultiplePizzas from "../assets/multiplePizzas.jpeg";

import "../styles/about.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{
          background: `url(${MultiplePizzas})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet,
          cumque praesentium fuga temporibus quasi aliquam, vero odio ullam
          dolorum architecto blanditiis quidem autem quis! Possimus impedit sint
          recusandae expedita eveniet voluptates nam harum libero laborum et,
          facilis tenetur necessitatibus repellendus, error ducimus sequi! Porro
          quisquam fuga iure modi nulla dolorem deleniti? Autem dolores facere
          delectus ipsum accusantium dolor temporibus, ullam eius culpa
          dignissimos optio, voluptatem pariatur quam. Odio quaerat ducimus quas
          atque tenetur! Architecto sequi qui harum magnam temporibus corrupti
          ipsa. A, totam blanditiis sapiente voluptatem, nesciunt, itaque
          dolores quidem quae rerum temporibus omnis praesentium alias! Ut, quod
          est.
        </p>
      </div>
    </div>
  );
};
