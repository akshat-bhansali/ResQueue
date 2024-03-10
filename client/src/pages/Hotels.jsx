import React from "react";
import { Link } from "react-router-dom";

function Hotels() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Visit Your Favorite Restaurant
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              tempora exercitationem provident fugiat autem ipsa eum quae sequi
              voluptate laborum maxime, vel quas laboriosam rerum doloremque
              repellendus culpa reprehenderit sint? Soluta beatae totam ab iure
              reiciendis. Aliquam ut accusamus ex corporis, dicta soluta eos
              libero, reprehenderit, fuga assumenda inventore. Est, consequuntur
              iure! Illo vel quos sed doloribus voluptatibus aperiam aliquam.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to={"/amar"}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://lh3.googleusercontent.com/p/AF1QipNT0ZILrhHHN8Q89NU_spyk9jsBFm4-FLwI2KOx=s1360-w1360-h1020"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Location
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Amar
                  </h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to={"/marineroom"}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="data:image/jpeg;base64,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"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Location
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Marine Room
                  </h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to={"/royalcafe"}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7CHc5N3QgO2TQelR0hM9UzfcqgySM_Y0pA&usqp=CAU"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Location
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Royal cafe
                  </h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <Link to={"/cfc"}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFncUppcULosWWSSMDG62Jgx5QnEbsaQaj4g&usqp=CAU"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Location
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Cfc
                  </h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotels;
