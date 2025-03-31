/**
 * PostFactory - generates fake forum posts
 * 
 * Example usage:
 *    generatePosts(5)
 * 
 * Returns:
 *    An array of 5 fake posts
 */

const { faker } = require('@faker-js/faker');

let counter = 0;

/**
 * Creates a single fake post
 * @returns {Object} A post object
 */
function createPost() {
  counter += 1;
  return {
    id: counter,
    postID: 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    body: faker.lorem.paragraph()
  };
}

/**
 * Generates multiple fake posts
 * @param {number} max - Number of posts to generate
 * @returns {Array} Array of post objects
 */
function generatePosts(max = 1) {
  const results = [];
  for (let i = 0; i < max; i++) {
    results.push(createPost());
  }
  return results;
}

module.exports = {
  generatePosts
};