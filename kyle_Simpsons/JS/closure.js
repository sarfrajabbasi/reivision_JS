// Example 1: Closure Retaining Lexical Scope

function parentFunc() {
  const parentVar = "I am from parent function";

  function childFunc() {
    console.log(parentVar); // child function retains access to parentVar
  }
  return childFunc; // Return the child function
}

const closureExample = parentFunc(); // invoking parentFunc returns childFunc

closureExample(); // Calling the child func retains access to parentVar.

// Example 2: Closure in Asynchronous AJAX

// Example 2: Closure in Asynchronous AJAX
function fetchData(url) {
  let data = null;

  // Simulating AJAX call
  fetch(url)
    .then((response) => response)
    .then((responseData) => {
      data = responseData;
      console.log("Data fetched:", data); // Data fetched: [actual data]
    });

  function getData() {
    console.log("Returning data:", data); // Accessing data from closure
    return data;
  }

  return getData;
}

const getDataClosure = fetchData("https://source.unsplash.com/random/?kitten");

// Although fetch is asynchronous, getDataClosure retains access to the fetched data
// setTimeout(() => {
//     getDataClosure(); // Returning data: [actual data]
// }, 3000);

// modified example:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response;
      })
      .then((data) => {
        //   console.log("Data fetched:", data);
        resolve(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        reject(error);
      });
  });
}

const image = document.getElementById("imageMe");

setInterval(() => {
  fetchData("https://source.unsplash.com/random/?kitten")
    .then((responseData) => {
      const url = responseData.url;
      // Update the image here using the url if needed
      image.src = url;
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
}, 3000);

// Example 3: timer Example

function ask() {
  const question = "What's your name?";
  setTimeout(function waitASec() {
    console.log(question); // Accesses the variable question from outer scope
  }, 1000);
}
ask();

//Example 4 :  Returning Function Example:

function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
// setInterval(()=>{

//     counter()
// },100)

// Closure over a variable

// Examples 1:--

function createTeacher() {
  let teacher = 'sarfraj';

  function getTeacher() {
    console.log(teacher);
  }

  teacher = 'asif'; // Change the value of 'teacher'

  return getTeacher;
}

const myTeacher = createTeacher();
myTeacher(); // Output: asif

// Examples 2: losure Inside a For Loop

const funcs = [];

for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    // console.log(i); // Accesses the shared variable 'i'
  });
}

funcs.forEach(func => func()); // Output: 4 4 4


// Examples 3: Using let in a For Loop


for (let i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i); // Each closure captures its own value of 'i'
  });
}

funcs.forEach(func => func()); // Output: 0 1 2


// Module Pattern

//  Example 4:  Classic Module Pattern:

const workshop = (function() {
  let teacher = 'Kyle';

  function ask(question) {
    console.log(teacher, question);
  }

  return {
    ask
  };
})();

workshop.ask('What is closure?'); // Output: Kyle What is closure?

// Examples 6 aapt:Factory Function Modules:

function createWorkshop(teacher) {
  return {
    ask: function(question) {
      console.log(teacher, question);
    }
  };
}

const workshop1 = createWorkshop('Kyle');
const workshop2 = createWorkshop('Suzy');

workshop1.ask('What is closure?'); // Output: Kyle What is closure?
workshop2.ask('How do modules work?'); // Output: Suzy How do modules work?
