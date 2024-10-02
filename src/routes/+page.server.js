export const actions = {
  default: async (event) => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // ?? at wust: /login post request body
    fetch('https://wust.rezahandzalah.workers.dev/login')
      .then(response => response.json())
      .then(json => console.log(json))
  }
};
