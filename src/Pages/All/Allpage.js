import React from "react";
import "./Allpages.css";

const Allpage = () => {
  return (
    <div>
      <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae qui deca rode
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut numquam
                  delectus
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat. Aliquam
                  ratione
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor molestiae
                  doloribu
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Why Us Section ======= --> */}
      <section id="why-us" class="why-us section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            {/* <div
              class="col-lg-5 align-items-stretch video-box"
              style='background-image: url("assets/img/why-us.jpg");'
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                class="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div> */}

            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
              <div class="content">
                <h3>
                  Eum ipsam laborum deleniti{" "}
                  <strong>velit pariatur architecto</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>

              <div class="accordion-list">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      class="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      <span>01</span> Non consectetur a erat nam at lectus urna
                      duis? <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1"
                      class="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      class="collapsed"
                    >
                      <span>02</span> Feugiat scelerisque varius morbi enim
                      nunc? <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-2"
                      class="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      class="collapsed"
                    >
                      <span>03</span> Dolor sit amet consectetur adipiscing
                      elit? <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-3"
                      class="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allpage;