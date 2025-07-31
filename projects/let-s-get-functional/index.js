// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
   const males = _.filter(array, function(customer){
    return customer.gender === "male";
   });
 return males.length;
};


var femaleCount = function(array) {
  return array.reduce(function(count, customer) {
    return customer.gender === "female" ? count + 1 : count;
  }, 0);
};
 
var oldestCustomer = function(array) {
  return array.reduce(function(oldest, customer) {
    return customer.age > oldest.age ? customer : oldest;
  }).name;
};

var youngestCustomer = function(array) {
  return array.reduce(function(youngest, customer) {
    return customer.age < youngest.age ? customer : youngest;
  }).name;
};

var averageBalance = function(array) {
  const total = array.reduce(function(sum, customer) {
    // Remove $ and commas, then parse as float
    const balance = parseFloat(customer.balance.replace(/[$,]/g, ""));
    return sum + balance;
  }, 0);
  return total / array.length;
};
var firstLetterCount = function(array, letter) {
  return array.reduce(function(count, customer) {
    return customer.name[0].toLowerCase() === letter.toLowerCase() ? count + 1 : count;
  }, 0);
};
var friendFirstLetterCount = function(array, customerName, letter) {
  const customer = array.find(c => c.name === customerName);
  if (!customer || !customer.friends) return 0;

  return customer.friends.reduce((count, friend) => {
    return friend.name[0].toLowerCase() === letter.toLowerCase() ? count + 1 : count;
  }, 0);
};
var friendsCount = function(array, name) {
  return array.reduce((result, customer) => {
    const hasFriend = customer.friends.some(friend => friend.name === name);
    if (hasFriend) result.push(customer.name);
    return result;
  }, []);
};
var topThreeTags = function(array) {
  const tagCounts = array.reduce((acc, customer) => {
    customer.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1]) // Sort descending by count
    .slice(0, 3)                  // Take top 3
    .map(entry => entry[0]);     // Return only tag names
};
var genderCount = function(array) {
  return array.reduce((acc, customer) => {
    const gender = customer.gender;
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
