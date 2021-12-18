import React from "react";
// import "./Banner.css";
import "./style.css";
// import hero from "../../img/hero-img.png";
import banner from "../../img/hero-img.png";
import img1 from "../../img/clients/client-1.png";
import img2 from "../../img/clients/client-2.png";
import img3 from "../../img/clients/client-3.png";
import img4 from "../../img/clients/client-4.png";
import img5 from "../../img/clients/client-5.png";
import img from "../../img/clients/client-6.png";
import service1 from "../../img/features-2.svg";
import service2 from "../../img/features-3.svg";
import service3 from "../../img/features-4.svg";
import service from "../../img/features-1.svg";
import agent2 from "../../img/team/team-4.jpg";
import agent1 from "../../img/team/team-2.jpg";
import agent5 from "../../img/team/team-3.jpg";
import agent3 from "../../img/team/team-1.jpg";
import Allpage from "../All/Allpage.js";
import Propertice from "../Propertise/Propertice.js";

// import img from "../../img/clients/client-6.png";

const Banner = () => {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div class="container fatema d-flex align-items-center justify-content-between">
          <div class="logo">
            <h1>
              <a href="index.html">
                Bocor<span>.</span>
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            <a href="index.html">
              <img src="assets/img/logo.png" alt="" class="img-fluid" />
            </a>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#features">
                  Feature
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div
              class=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
              data-aos="fade-right"
            >
              <h1>Your new digital experience with Bocor</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <a href="#about" class="btn-get-started scrollto">
                Get Started
              </a>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
            >
              <img src={banner} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* <!-- ======= Clients Section ======= --> */}

        <section id="clients" class="clients">
          <div class="container client">
            <div class="section-title" data-aos="fade-up">
              <h2>
                Our <strong>Clients</strong>
              </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div
              class="row no-gutters clients-wrap clearfix"
              data-aos="fade-up"
            >
              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img1} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img3} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img4} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img5} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img5} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img3} class="img-fluid" alt="" />
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-xs-6">
                <div class="client-logo">
                  <img src={img4} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Allpage></Allpage>
        <Propertice></Propertice>
        {/* <!-- End Clients Section -->

   
    <!-- ======= Services Section ======= --> */}

        <section id="features" class="features section-bg">
          <div class="container">
            <div class="section-title">
              <h2 data-aos="fade-in">Features</h2>
              <p data-aos="fade-in">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row content">
              <div class="col-md-5" data-aos="fade-right">
                <img src={service} class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 pt-4" data-aos="fade-left">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                </ul>
              </div>
            </div>

            <div class="row content">
              <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
                <img src={service1} class="img-fluid" alt="" />
              </div>
              <div
                class="col-md-7 pt-5 order-2 order-md-1"
                data-aos="fade-right"
              >
                <h3>Corporis temporibus maiores provident</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

            <div class="row content">
              <div class="col-md-5" data-aos="fade-right">
                <img src={service2} class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 pt-5" data-aos="fade-left">
                <h3>
                  Sunt consequatur ad ut est nulla consectetur reiciendis animi
                  voluptas
                </h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa.
                  Delectus quia minima quod. Sunt saepe odit aut quia voluptatem
                  hic voluptas dolor doloremque.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Facilis ut et voluptatem
                    aperiam. Autem soluta ad fugiat.
                  </li>
                </ul>
              </div>
            </div>

            <div class="row content">
              <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
                <img src={service3} class="img-fluid" alt="" />
              </div>
              <div
                class="col-md-7 pt-5 order-2 order-md-1"
                data-aos="fade-right"
              >
                <h3>
                  Quas et necessitatibus eaque impedit ipsum animi consequatur
                  incidunt in
                </h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" class="team section-bg">
          <div class="container">
            <div class="section-title">
              <h2 data-aos="fade-in">Team</h2>
              <p data-aos="fade-in">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="member" data-aos="fade-up">
                  <div class="pic">
                    <img src={agent1} alt="" />
                  </div>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                  <div class="pic">
                    <img src={agent3} alt="" />
                  </div>
                  <h4>Sarah Jhinson</h4>
                  <span>Product Manager</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                  <div class="pic">
                    <img src={agent2} alt="" />
                  </div>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                  <div class="pic">
                    <img src={agent5} alt="" />
                  </div>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div class="social">
                    <a href="">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Pricing Section ======= --> */}
        <section id="pricing" class="pricing section-bg">
          <div class="container">
            <div class="section-title">
              <h2 data-aos="fade-in">Pricing</h2>
              <p data-aos="fade-in">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row no-gutters">
              <div class="col-lg-4 box" data-aos="zoom-in">
                <h3>Free</h3>
                <h4>
                  $0<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i class="bx bx-check"></i> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Nulla at volutpat diam uteera
                  </li>
                  <li class="na">
                    <i class="bx bx-x"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li class="na">
                    <i class="bx bx-x"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" class="get-started-btn">
                  Get Started
                </a>
              </div>

              <div class="col-lg-4 box featured" data-aos="zoom-in">
                <span class="featured-badge">Featured</span>
                <h3>Business</h3>
                <h4>
                  $29<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i class="bx bx-check"></i> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Nulla at volutpat diam uteera
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Pharetra massa massa ultricies
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <a href="#" class="get-started-btn">
                  Get Started
                </a>
              </div>

              <div class="col-lg-4 box" data-aos="zoom-in">
                <h3>Developer</h3>
                <h4>
                  $49<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i class="bx bx-check"></i> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Nulla at volutpat diam uteera
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Pharetra massa massa ultricies
                  </li>
                  <li>
                    <i class="bx bx-check"></i> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <a href="#" class="get-started-btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id="faq" class="faq section-bg">
          <div class="container">
            <div class="section-title">
              <h2 data-aos="fade-in">Frequently Asked Questions</h2>
              <p data-aos="fade-in">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div
              class="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div class="col-lg-5">
                <i class="far fa-question-circle"></i>
                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </div>

            <div
              class="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="col-lg-5">
                <i class="far fa-question-circle"></i>
                <h4>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim.
                </p>
              </div>
            </div>

            <div
              class="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="col-lg-5">
                <i class="far fa-question-circle"></i>
                <h4>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus.
                </p>
              </div>
            </div>

            <div
              class="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="col-lg-5">
                <i class="far fa-question-circle"></i>
                <h4>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                  Voluptas dolorum accusantium sunt sit enim. Provident
                  consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                  Repellat assumenda soluta sunt pariatur error doloribus fuga.
                </p>
              </div>
            </div>

            <div
              class="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="col-lg-5">
                <i class="far fa-question-circle"></i>
                <h4>
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Contact Section ======= --> */}
      </main>

      {/* <!-- ======= Footer ======= --> */}
    </div>
  );
};

export default Banner;
