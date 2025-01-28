# TMDB CLI Application

A command-line interface tool that fetches and displays movie information from The Movie Database (TMDB) API. Users can easily access information about Now Playing, Popular, Top Rated, and Upcoming movies directly from their terminal.
> This project is inspired by the [TMDB CLI Tool project on roadmap.sh](https://roadmap.sh/projects/tmdb-cli)
## Features

- Fetch movie data from TMDB API
- View movies by different categories:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- Display key movie details including title, release date, rating, and overview
- Error handling for API and network issues
- Simple command-line interface

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (Node Package Manager)
- TMDB API Key ([Get it here](https://www.themoviedb.org/settings/api))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tmdb-cli.git
cd tmdb-cli
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```env
TMDB_API_KEY=your_api_key_here
```

4. Make the CLI tool globally accessible:
```bash
npm link
```

## Usage

The basic command syntax is:
```bash
tmdb-app --type "<type>"
```

Available types:
- `playing` - Now Playing movies
- `popular` - Popular movies
- `top` - Top Rated movies
- `upcoming` - Upcoming movies

Examples:
```bash
# Get now playing movies
tmdb-app --type "playing"

# Get popular movies
tmdb-app --type "popular"

# Get top rated movies
tmdb-app --type "top"

# Get upcoming movies
tmdb-app --type "upcoming"
```

Alternative usage (if not linked globally):
```bash
node src/index.js --type "popular"
# or
npm start -- --type "popular"
```

## Error Messages

You might encounter the following error messages:

- `Error: Invalid API key. Please check your configuration.`
  - Solution: Verify your TMDB API key in the `.env` file

- `Error: Unable to connect to TMDB. Please check your internet connection.`
  - Solution: Check your internet connection and try again

- `Error: Invalid movie type. Supported types are: playing, popular, top, upcoming`
  - Solution: Use one of the supported movie types listed above

## Project Structure

```
tmdb-cli/
├── .env
├── .gitignore
├── package.json
├── src/
│   ├── index.js    # Main entry point
│   ├── api.js      # API handling
│   └── utils.js    # Utility functions
└── README.md
```

## Development

To contribute to this project:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## Debugging

The application logs errors to help with debugging. If you encounter issues:

1. Check the error message displayed in the console
2. Verify your API key and internet connection
3. Ensure you're using the correct command syntax
4. Check for any console logs or error messages

## Dependencies

- `axios` - HTTP client for API requests
- `commander` - Command-line interface creation
- `dotenv` - Environment variable management

## License

This project is licensed under the ISC License.

## Acknowledgments

- [TMDB API](https://developer.themoviedb.org/docs) for providing the movie data
- The Node.js community for the excellent packages used in this project

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible about your environment and the problem

---

Made with ❤️ by Pratheek Nistala