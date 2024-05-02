const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
mouse.bird.size; // mouse object does not have bird key
mouse[bird["size"]]; // true code because, i know in JS key of object is of string and JS interprets the statement which is lies in between the [] so in this case first evaluate the value of bird["size"] then it evaluate the value of mouse["small"]
mouse[bird.size]; // true because, [bird.size]="small" then it evaluate mouse["small"]

