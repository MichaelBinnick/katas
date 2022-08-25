const organizeInstructors = function(instructors) {
  
  let organized = {};
  let course;

  for (let instructor of instructors) {
    course = instructor.course;
    organized[course] = [];
  }

  for (let instructor of instructors) {
    course = instructor.course;
    organized[course].push(instructor.name);
  }

  return organized;

};


console.log(organizeInstructors(
  [
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]
));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
