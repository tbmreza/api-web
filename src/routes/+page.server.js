export const actions = {
  default: async (event) => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://wust.rezahandzalah.workers.dev/login')
      .then(response => response.json())
      .then(json => console.log(json))
  }
};
