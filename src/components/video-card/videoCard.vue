<template>
  <div id="videoCard">
    <div class="container-fluid">
      <div class="row">
        <div class="card" style="width: 100vw">
          <div class="card-body">
            <h5 class="card-title">
              {{ video.parent_name }}
            </h5>
            <p class="card-text published">{{ video.published }}</p>
            <div class="card-text title text-right my-3">
              {{ video.title }}
            </div>
            <img
              class="card-img-top img-fluid"
              src="../../assets/images/youtube-blank.png"
              alt="Card image cap"
            />
            <div class="card_footer mt-3">
              <!-- <div class="container-fluid"> -->
              <div class="row justify-content-between">
                <div class="col-lg-5 card_footer-actions text-left">
                  <div class="row justify-content-start">
                    <a href="#" class="col-lg-4">Like</a>
                    <a href="#" class="col-lg-4">Comment</a>
                    <a href="#" class="col-lg-4">Share</a>
                  </div>
                </div>
                <div class="col-lg-5 card_footer-info text-right">
                  <div class="row justify-content-start">
                    <a href="#" class="col-lg-4">{{ video.likes }} Likes </a>
                    <a href="#" class="col-lg-4"
                      >{{ video.comments }} Comments
                    </a>
                    <a href="#" class="col-lg-4">{{ video.views }} Views </a>
                  </div>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./videoCard.js"></script>