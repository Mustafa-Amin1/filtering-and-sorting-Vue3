<template>
  <div class="d-flex">
    <div class="w-25 d-inline-block h-100">
      <div id="side" class="position-fixed w-25">
        <div class="container py-5">
          <div class="container">
            <!-- Filtering -->

            <div class="row justify-content-between mb-5">
              <label class="col-2 p-0 text-left align-self-center"
                >Search</label
              >
              <div class="col-md-9">
                <input
                  v-model="searchValue"
                  class="search form-control mr-sm-2 col-sm-8"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  @keyup="searchChange($event)"
                />
              </div>
            </div>
            <!-- Sorting -->

            <div class="row justify-content-between">
              <label class="col-2 p-0 text-left align-self-center"
                >Sort by:</label
              >
              <div class="col-md-9">
                <select
                  name="Sort by:"
                  class="sort form-control"
                  v-model="sortedValue"
                >
                  <option value="1" selected>Views</option>
                  <option value="2">Likes</option>
                  <option value="3">Shared</option>
                </select>
              </div>

              <div class="container">
                <div class="row my-5 mx-auto col-sm-8">
                  <label class="col-sm-6 d-flex justify-content-around"
                    ><input
                      type="radio"
                      v-model="sortType"
                      value="asc"
                    />Ascending</label
                  ><br />
                  <label class="col-sm-6 d-flex justify-content-around"
                    ><input
                      type="radio"
                      v-model="sortType"
                      value="desc"
                    />Descending</label
                  >
                </div>
              </div>
            </div>
            <button
              class="btn btn-outline-success my-2 my-sm-0 col-lg-3"
              @click="search()"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="main" class="w-75 mt-5 d-inline-block h-100">
      <div v-if="videosList.length > 0">
        <div class="" v-for="video in videosList" :key="video">
          <VideoCardComponent :video="video" />
        </div>
      </div>
      <div v-else class="empty mx-auto text-center my-5">
        <span>There Are not videos Found</span>
      </div>
    </div>
  </div>
</template>

<script src="./main-component.js"></script>
