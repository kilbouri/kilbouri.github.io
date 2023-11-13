import { fetchPublicRepos } from "./github.mjs";
import {
  findContainer,
  findTemplate,
  instantiateTemplate,
} from "./templating.mjs";

/**
 * @param {boolean} visible
 */
const setGithubLoadSpinnerState = (visible) => {
  document
    .querySelector("#github-loading-spinner")
    ?.classList.toggle("d-none", visible);
};

/**
 * @param {boolean} visible
 */
const setGithubLoadErrorState = (visible) => {
  document
    .querySelector("#github-error-message")
    ?.classList.toggle("d-none", visible);
};

/**
 * Fetches the public repositories of the given username and loads them into
 * the GitHub repository list.
 *
 * @param {string} username The username to populate repositories or
 */
const populateGithubReposForUser = async (username) => {
  const GH_REPO_TEMPLATE_NAME = "githubRepository";
  const GH_REPO_CONTAINER_NAME = "githubRepositories";

  // fetch the container and template, to avoid a network request if something goes wrong
  const repoTemplate = findTemplate(GH_REPO_TEMPLATE_NAME);
  const repoContainer = findContainer(GH_REPO_CONTAINER_NAME);

  if (!repoTemplate || !repoContainer) {
    // didn't locate the container and/or template, so no point bugging the API
    console.warn("Failed to locate GitHub repo template or container");
    setGithubLoadErrorState(true);
    setGithubLoadSpinnerState(false);
    return;
  }

  const publicRepos = await fetchPublicRepos(username);
  if (!publicRepos) {
    console.warn("Failed to contact GitHub API");
    setGithubLoadErrorState(true);
    setGithubLoadSpinnerState(false);
    return;
  }

  // By sorting first, we can guarantee that both forks and notForks will be in sorted order.
  const sortedRepos = publicRepos.sort((a, b) => a.name.localeCompare(b.name));

  const notForks = sortedRepos.filter((r) => !r.fork);
  const forks = sortedRepos.filter((r) => r.fork);

  for (const { name, description, html_url, fork } of [...notForks, ...forks]) {
    /** @type {import('./templating.mjs').TemplateFillParams} */
    const args = {
      repoName: [["innerText", name]],
      repoDescription: [["innerText", description || "No description."]],
      repoLink: [["href", html_url]],
      repoIsFork: [["innerText", fork ? "(fork)" : ""]],
    };

    const newElement = instantiateTemplate(repoTemplate, args);
    repoContainer.appendChild(newElement);
  }

  // kill the loading spinner
  setGithubLoadSpinnerState(false);
};

// IIFE to fake top-level await
(async () => {
  await populateGithubReposForUser("kilbouri");
})();
