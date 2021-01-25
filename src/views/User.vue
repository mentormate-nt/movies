<template>
  <div
    class="mx-auto p-10"
  >
    <section class="py-40 bg-gray-100 bg-opacity-50 h-screen">
    <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
      <div
        class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t"
      >
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <img
              class="w-10 h-10 object-cover rounded-full"
              alt="User avatar"
              src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
            />

            <h1 class="text-gray-600">{{ user.name }}</h1>
          </div>
        </div>
      </div>
      <div class="bg-white space-y-6">
        <div
          class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center"
        >
          <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
          <div class="md:w-2/3 max-w-sm mx-auto">
            <label class="text-sm text-gray-400">Email</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                :value="user.email"
              />
            </div>
          </div>
        </div>

        <hr />
        <div
          class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center"
        >
          <h2 class="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <div>
              <label class="text-sm text-gray-400">Full name</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                  <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  id="fullname"
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  :value="user.name"
                />
              </div>
            </div>
            <div class="text-right">
              <button
                @click="updateUserInfo()"
                class="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span class="mr-2">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "User",
  data() {
    return {
      user: {
      "id": 13,
      "email": "johndoe@example.com",
      "name": "John Doe",
      "is_logged_in": false,
    }
    };
  },
  methods: {
    updateUserInfo() {
      this.user.email = $("#email").val();
      this.user.name = $("#fullname").val();
    },
  },
};
</script>
