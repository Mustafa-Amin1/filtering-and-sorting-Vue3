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
            <video class="w-100" height="240" controls>
              <source src="../../assets/videos/movie.mp4" type="video/mp4" />
              <!-- <source src="../../assets/videso/movie.ogg" type="video/ogg" /> -->
              Your browser does not support the video tag.
            </video>
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