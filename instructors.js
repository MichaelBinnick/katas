const instructorWithLongestName = function(instructors) {
  let largestName = 0;
  let nameOwner;
  instructors.forEach(element => {
    if (element.name.length > largestName) {
      largestName = element.name.length;
      console.log(largestName);
      nameOwner = element;
      console.log(nameOwner);
    }
  });
  
  return nameOwner;
};


console.log(instructorWithLongestName([{ name: "Worlddestroyer", course: "iOs" }, { name: "Montgomery", course: "Web" }, { name: "Worlddestroyes", course: "Web" }]));