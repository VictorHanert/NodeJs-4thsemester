<script>
    let name = "";
    let password = "";
  </script>
  
  <main>
            <h2 class="text-2xl font-bold mb-8 text-center">Sign up</h2>
              <form method="POST">
                  <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700">Username</label>
                  <input id="name" name="name" placeholder="insert here" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
          
                  <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="insert here"
                      required
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  </div>
          
                  <div class="mb-4">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="insert here"
                      required
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  </div>
          
                  <div class="mb-6">
                  <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      placeholder="insert here"
                      required
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  </div>
          
                  <button
                  class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  Sign Up
                  </button>
              </form>  
  </main>
  