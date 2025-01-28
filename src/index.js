#!/usr/bin/env node

require('dotenv').config();
const { program } = require('commander');
const { fetchMovies } = require('./api');

program
  .version('1.0.0')
  .option('-t, --type <type>', 'Type of movies to fetch (playing, popular, top, upcoming)')
  .parse(process.argv);

const options = program.opts();

async function main() {
  try {
    if (!options.type) {
      console.error('Error: Movie type is required');
      program.help();
      return;
    }

    const validTypes = ['playing', 'popular', 'top', 'upcoming'];
    if (!validTypes.includes(options.type)) {
      console.error('Error: Invalid movie type. Supported types are: playing, popular, top, upcoming');
      return;
    }

    const movies = await fetchMovies(options.type);
    movies.forEach(movie => {
      console.log('\n-------------------');
      console.log(`Title: ${movie.title}`);
      console.log(`Release Date: ${movie.release_date}`);
      console.log(`Rating: ${movie.vote_average}`);
      console.log(`Overview: ${movie.overview}`);
    });

  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();