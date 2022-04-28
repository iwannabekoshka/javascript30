const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const now = new Date();
const year = now.getFullYear();

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAtLeastOneOlderThen19 = people.some(man => (year - man.year) >= 19);
console.log('isAtLeastOneOlderThen19: ', isAtLeastOneOlderThen19);
// Array.prototype.every() // is everyone 19 or older?
const isEveryOlderThen19 = people.every(man => (year - man.year) >= 19);
console.log('isEveryOlderThen19: ', isEveryOlderThen19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment823423 = comments.find(comment => comment.id === 823423);
console.log('comment823423', comment823423);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const comment823423_index = comments.findIndex(comment => comment.id === 823423);
const arrWithout823423 = comments.filter((comment, i) => i !== comment823423_index);
console.log('arrWithout823423: ', arrWithout823423);
