/**
 * A subset of the fields returned when fetching a user's public repositories
 * from the GitHub API
 * @typedef {{
 *  name: string;
 *  fork: boolean;
 *  url: string;
 *  html_url: string;
 *  description: string | null;
 *  language?: string | null;
 *  languages_url: string;
 *}} PublicRepository
 */

/**
 * @param {string} username the GitHub username to fetch repositories for
 * @return {Promise<?PublicRepository[]>} the list of public repositories for the given username, or `null` if an error occurs
 */
const fetchPublicRepos = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(url);

  if (response.status !== 200) {
    return null;
  }

  /** @type {PublicRepository[]} */
  const body = await response.json();

  return body;
};

export { fetchPublicRepos };
