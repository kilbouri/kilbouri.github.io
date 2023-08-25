import axios, { Axios, HttpStatusCode } from "axios";

interface RepositorySummary {
  name: string;
  fork: boolean;
  url: string;
}

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/vnd.github+json" },
});

const getGithubRepositories = async (
  accountName: string,
  keepForks: boolean = false,
  sort: "created" | "updated" | "pushed" | "full_name" = "full_name"
): Promise<RepositorySummary[]> => {
  return DUMMY_API_RESPONSE;

  const url = `users/${accountName}/repos?sort=${sort}`;
  const result = await githubApi.get<RepositorySummary[]>(url);

  const { status, statusText, data } = result;

  if (status !== HttpStatusCode.Ok) {
    throw `Unable to reach the Github API (${status}: ${statusText})`;
  }

  if (!keepForks) {
    return data.filter((repo) => !repo.fork);
  }

  return data;
};

const DUMMY_API_RESPONSE = [
  {
    id: 318436376,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTg0MzYzNzY=",
    name: "advent-of-code",
    full_name: "kilbouri/advent-of-code",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/advent-of-code",
    description: "Repo of my Advent of Code Programs, written in Python.",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/advent-of-code",
    forks_url: "https://api.github.com/repos/kilbouri/advent-of-code/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/advent-of-code/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/advent-of-code/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/advent-of-code/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/advent-of-code/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/advent-of-code/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/advent-of-code/deployments",
    created_at: "2020-12-04T07:22:32Z",
    updated_at: "2022-07-12T02:33:17Z",
    pushed_at: "2022-12-26T05:27:57Z",
    git_url: "git://github.com/kilbouri/advent-of-code.git",
    ssh_url: "git@github.com:kilbouri/advent-of-code.git",
    clone_url: "https://github.com/kilbouri/advent-of-code.git",
    svn_url: "https://github.com/kilbouri/advent-of-code",
    homepage: "",
    size: 436,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "unlicense",
      name: "The Unlicense",
      spdx_id: "Unlicense",
      url: "https://api.github.com/licenses/unlicense",
      node_id: "MDc6TGljZW5zZTE1",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 636984444,
    node_id: "R_kgDOJfecfA",
    name: "among-us-utility-bot",
    full_name: "kilbouri/among-us-utility-bot",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/among-us-utility-bot",
    description:
      "A DiscordJS v14 Discord Bot with various utilities for hosting Among Us events.",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/among-us-utility-bot",
    forks_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/teams",
    hooks_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/among-us-utility-bot/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/among-us-utility-bot/deployments",
    created_at: "2023-05-06T06:42:40Z",
    updated_at: "2023-06-03T23:58:27Z",
    pushed_at: "2023-05-15T19:27:10Z",
    git_url: "git://github.com/kilbouri/among-us-utility-bot.git",
    ssh_url: "git@github.com:kilbouri/among-us-utility-bot.git",
    clone_url: "https://github.com/kilbouri/among-us-utility-bot.git",
    svn_url: "https://github.com/kilbouri/among-us-utility-bot",
    homepage: null,
    size: 262,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 662844364,
    node_id: "R_kgDOJ4IzzA",
    name: "blaze-weather",
    full_name: "kilbouri/blaze-weather",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/blaze-weather",
    description: "A Blazor-based weather app. For fun, and to learn Blazor.",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/blaze-weather",
    forks_url: "https://api.github.com/repos/kilbouri/blaze-weather/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/blaze-weather/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/blaze-weather/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/blaze-weather/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/blaze-weather/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/blaze-weather/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/blaze-weather/deployments",
    created_at: "2023-07-06T02:33:12Z",
    updated_at: "2023-07-06T06:54:05Z",
    pushed_at: "2023-07-08T04:52:41Z",
    git_url: "git://github.com/kilbouri/blaze-weather.git",
    ssh_url: "git@github.com:kilbouri/blaze-weather.git",
    clone_url: "https://github.com/kilbouri/blaze-weather.git",
    svn_url: "https://github.com/kilbouri/blaze-weather",
    homepage: null,
    size: 2517,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 430147585,
    node_id: "R_kgDOGaOIAQ",
    name: "c-doku",
    full_name: "kilbouri/c-doku",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/c-doku",
    description:
      "Ever wanted to play Sudoku in your terminal? No? Oh... well, you can now.",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/c-doku",
    forks_url: "https://api.github.com/repos/kilbouri/c-doku/forks",
    keys_url: "https://api.github.com/repos/kilbouri/c-doku/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/c-doku/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/c-doku/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/c-doku/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/c-doku/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/c-doku/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/c-doku/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/c-doku/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/c-doku/tags",
    blobs_url: "https://api.github.com/repos/kilbouri/c-doku/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kilbouri/c-doku/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kilbouri/c-doku/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kilbouri/c-doku/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kilbouri/c-doku/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kilbouri/c-doku/languages",
    stargazers_url: "https://api.github.com/repos/kilbouri/c-doku/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/c-doku/contributors",
    subscribers_url: "https://api.github.com/repos/kilbouri/c-doku/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/c-doku/subscription",
    commits_url: "https://api.github.com/repos/kilbouri/c-doku/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/c-doku/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/c-doku/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/c-doku/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/c-doku/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/c-doku/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/c-doku/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/c-doku/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kilbouri/c-doku/downloads",
    issues_url: "https://api.github.com/repos/kilbouri/c-doku/issues{/number}",
    pulls_url: "https://api.github.com/repos/kilbouri/c-doku/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/c-doku/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/c-doku/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kilbouri/c-doku/labels{/name}",
    releases_url: "https://api.github.com/repos/kilbouri/c-doku/releases{/id}",
    deployments_url: "https://api.github.com/repos/kilbouri/c-doku/deployments",
    created_at: "2021-11-20T16:05:13Z",
    updated_at: "2022-07-12T02:33:13Z",
    pushed_at: "2021-11-24T21:33:45Z",
    git_url: "git://github.com/kilbouri/c-doku.git",
    ssh_url: "git@github.com:kilbouri/c-doku.git",
    clone_url: "https://github.com/kilbouri/c-doku.git",
    svn_url: "https://github.com/kilbouri/c-doku",
    homepage: "",
    size: 10,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 479208427,
    node_id: "R_kgDOHJAj6w",
    name: "comp3150-backend",
    full_name: "kilbouri/comp3150-backend",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/comp3150-backend",
    description:
      "An Express backend hacked together for a group project... its not secure, don't use it.",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/comp3150-backend",
    forks_url: "https://api.github.com/repos/kilbouri/comp3150-backend/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/comp3150-backend/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/comp3150-backend/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/comp3150-backend/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/comp3150-backend/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/comp3150-backend/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/comp3150-backend/deployments",
    created_at: "2022-04-08T01:51:03Z",
    updated_at: "2023-02-20T05:03:40Z",
    pushed_at: "2022-04-10T20:21:10Z",
    git_url: "git://github.com/kilbouri/comp3150-backend.git",
    ssh_url: "git@github.com:kilbouri/comp3150-backend.git",
    clone_url: "https://github.com/kilbouri/comp3150-backend.git",
    svn_url: "https://github.com/kilbouri/comp3150-backend",
    homepage: "",
    size: 383,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 478746812,
    node_id: "R_kgDOHIkYvA",
    name: "comp3150-frontend",
    full_name: "kilbouri/comp3150-frontend",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/comp3150-frontend",
    description: "A frontend hacked together in 1 week for a group project",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/comp3150-frontend",
    forks_url: "https://api.github.com/repos/kilbouri/comp3150-frontend/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/comp3150-frontend/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/comp3150-frontend/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/comp3150-frontend/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/comp3150-frontend/deployments",
    created_at: "2022-04-06T22:28:59Z",
    updated_at: "2023-02-20T05:01:56Z",
    pushed_at: "2022-04-10T20:03:26Z",
    git_url: "git://github.com/kilbouri/comp3150-frontend.git",
    ssh_url: "git@github.com:kilbouri/comp3150-frontend.git",
    clone_url: "https://github.com/kilbouri/comp3150-frontend.git",
    svn_url: "https://github.com/kilbouri/comp3150-frontend",
    homepage: "",
    size: 424,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Svelte",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 461571394,
    node_id: "R_kgDOG4MFQg",
    name: "comp3710-group-project-1",
    full_name: "kilbouri/comp3710-group-project-1",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/comp3710-group-project-1",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kilbouri/comp3710-group-project-1",
    forks_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/teams",
    hooks_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-1/deployments",
    created_at: "2022-02-20T18:01:48Z",
    updated_at: "2023-02-20T05:22:01Z",
    pushed_at: "2022-04-18T18:06:31Z",
    git_url: "git://github.com/kilbouri/comp3710-group-project-1.git",
    ssh_url: "git@github.com:kilbouri/comp3710-group-project-1.git",
    clone_url: "https://github.com/kilbouri/comp3710-group-project-1.git",
    svn_url: "https://github.com/kilbouri/comp3710-group-project-1",
    homepage: null,
    size: 798,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: "main",
  },
  {
    id: 483048958,
    node_id: "R_kgDOHMq9_g",
    name: "comp3710-group-project-2",
    full_name: "kilbouri/comp3710-group-project-2",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/comp3710-group-project-2",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kilbouri/comp3710-group-project-2",
    forks_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/teams",
    hooks_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/comp3710-group-project-2/deployments",
    created_at: "2022-04-19T01:09:24Z",
    updated_at: "2023-02-20T04:47:46Z",
    pushed_at: "2022-04-26T16:54:49Z",
    git_url: "git://github.com/kilbouri/comp3710-group-project-2.git",
    ssh_url: "git@github.com:kilbouri/comp3710-group-project-2.git",
    clone_url: "https://github.com/kilbouri/comp3710-group-project-2.git",
    svn_url: "https://github.com/kilbouri/comp3710-group-project-2",
    homepage: null,
    size: 1808,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 532443559,
    node_id: "R_kgDOH7xxpw",
    name: "Discord-Tools-ThemeOnly",
    full_name: "kilbouri/Discord-Tools-ThemeOnly",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/Discord-Tools-ThemeOnly",
    description:
      "Fork that provides just the theme because I don't need the fancy extras.",
    fork: true,
    url: "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly",
    forks_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/teams",
    hooks_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/Discord-Tools-ThemeOnly/deployments",
    created_at: "2022-09-04T05:06:31Z",
    updated_at: "2023-02-20T04:44:38Z",
    pushed_at: "2022-09-04T06:58:49Z",
    git_url: "git://github.com/kilbouri/Discord-Tools-ThemeOnly.git",
    ssh_url: "git@github.com:kilbouri/Discord-Tools-ThemeOnly.git",
    clone_url: "https://github.com/kilbouri/Discord-Tools-ThemeOnly.git",
    svn_url: "https://github.com/kilbouri/Discord-Tools-ThemeOnly",
    homepage:
      "https://marketplace.visualstudio.com/items?itemName=kilbouri.discord-tools-theme",
    size: 9358,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 326883491,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjY4ODM0OTE=",
    name: "kilbouri.github.io",
    full_name: "kilbouri/kilbouri.github.io",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/kilbouri.github.io",
    description: "My personal website... you might even be on it now!",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/kilbouri.github.io",
    forks_url: "https://api.github.com/repos/kilbouri/kilbouri.github.io/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/kilbouri.github.io/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/kilbouri.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/kilbouri.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/kilbouri.github.io/deployments",
    created_at: "2021-01-05T04:14:17Z",
    updated_at: "2022-01-08T01:26:19Z",
    pushed_at: "2023-08-22T03:58:32Z",
    git_url: "git://github.com/kilbouri/kilbouri.github.io.git",
    ssh_url: "git@github.com:kilbouri/kilbouri.github.io.git",
    clone_url: "https://github.com/kilbouri/kilbouri.github.io.git",
    svn_url: "https://github.com/kilbouri/kilbouri.github.io",
    homepage: "",
    size: 1524,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
  {
    id: 628374824,
    node_id: "R_kgDOJXQ9KA",
    name: "mathy-notes",
    full_name: "kilbouri/mathy-notes",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/mathy-notes",
    description:
      "Do math in your text editor! Ctrl-Enter or Shift-Enter to evaluate. Mainly a personal project, do not expect stability from this.",
    fork: true,
    url: "https://api.github.com/repos/kilbouri/mathy-notes",
    forks_url: "https://api.github.com/repos/kilbouri/mathy-notes/forks",
    keys_url: "https://api.github.com/repos/kilbouri/mathy-notes/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/mathy-notes/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/mathy-notes/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/mathy-notes/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/mathy-notes/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/mathy-notes/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/mathy-notes/deployments",
    created_at: "2023-04-15T18:46:25Z",
    updated_at: "2023-04-15T21:47:02Z",
    pushed_at: "2023-05-01T05:04:29Z",
    git_url: "git://github.com/kilbouri/mathy-notes.git",
    ssh_url: "git@github.com:kilbouri/mathy-notes.git",
    clone_url: "https://github.com/kilbouri/mathy-notes.git",
    svn_url: "https://github.com/kilbouri/mathy-notes",
    homepage: "",
    size: 4818,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Rust",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 549337804,
    node_id: "R_kgDOIL46zA",
    name: "pokemon-uranium-on-macos",
    full_name: "kilbouri/pokemon-uranium-on-macos",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/pokemon-uranium-on-macos",
    description: "Guide to running Pokémon Uranium on macOS under Wine",
    fork: true,
    url: "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos",
    forks_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/teams",
    hooks_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/pokemon-uranium-on-macos/deployments",
    created_at: "2022-10-11T03:11:34Z",
    updated_at: "2023-02-25T06:21:59Z",
    pushed_at: "2023-02-25T06:16:42Z",
    git_url: "git://github.com/kilbouri/pokemon-uranium-on-macos.git",
    ssh_url: "git@github.com:kilbouri/pokemon-uranium-on-macos.git",
    clone_url: "https://github.com/kilbouri/pokemon-uranium-on-macos.git",
    svn_url: "https://github.com/kilbouri/pokemon-uranium-on-macos",
    homepage: null,
    size: 1074,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Shell",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 606319100,
    node_id: "R_kgDOJCOx_A",
    name: "pokepanion",
    full_name: "kilbouri/pokepanion",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/pokepanion",
    description:
      "A tool to automate looking up information about Pokemon while playing.",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/pokepanion",
    forks_url: "https://api.github.com/repos/kilbouri/pokepanion/forks",
    keys_url: "https://api.github.com/repos/kilbouri/pokepanion/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/pokepanion/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/pokepanion/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/pokepanion/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/pokepanion/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/pokepanion/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/pokepanion/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/pokepanion/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/pokepanion/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/pokepanion/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/pokepanion/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/pokepanion/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/pokepanion/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/pokepanion/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kilbouri/pokepanion/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/pokepanion/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/pokepanion/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/pokepanion/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/pokepanion/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/pokepanion/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/pokepanion/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/pokepanion/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/pokepanion/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/pokepanion/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/pokepanion/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/pokepanion/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/pokepanion/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kilbouri/pokepanion/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/pokepanion/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/pokepanion/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/pokepanion/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/pokepanion/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/pokepanion/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/pokepanion/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/pokepanion/deployments",
    created_at: "2023-02-25T05:55:20Z",
    updated_at: "2023-02-25T05:55:27Z",
    pushed_at: "2023-02-25T06:04:10Z",
    git_url: "git://github.com/kilbouri/pokepanion.git",
    ssh_url: "git@github.com:kilbouri/pokepanion.git",
    clone_url: "https://github.com/kilbouri/pokepanion.git",
    svn_url: "https://github.com/kilbouri/pokepanion",
    homepage: null,
    size: 32,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 456290834,
    node_id: "R_kgDOGzJyEg",
    name: "python-garbage-truck",
    full_name: "kilbouri/python-garbage-truck",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/python-garbage-truck",
    description:
      "Me and the boys on the way to roll up to a scam site with our garbage trucks full of fake logins",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/python-garbage-truck",
    forks_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/forks",
    keys_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/teams",
    hooks_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/python-garbage-truck/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/python-garbage-truck/deployments",
    created_at: "2022-02-06T22:40:46Z",
    updated_at: "2023-01-27T23:10:52Z",
    pushed_at: "2022-02-06T23:08:08Z",
    git_url: "git://github.com/kilbouri/python-garbage-truck.git",
    ssh_url: "git@github.com:kilbouri/python-garbage-truck.git",
    clone_url: "https://github.com/kilbouri/python-garbage-truck.git",
    svn_url: "https://github.com/kilbouri/python-garbage-truck",
    homepage: null,
    size: 5,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "main",
  },
  {
    id: 639153120,
    node_id: "R_kgDOJhiz4A",
    name: "rustlings",
    full_name: "kilbouri/rustlings",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/rustlings",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kilbouri/rustlings",
    forks_url: "https://api.github.com/repos/kilbouri/rustlings/forks",
    keys_url: "https://api.github.com/repos/kilbouri/rustlings/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/rustlings/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/rustlings/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/rustlings/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/rustlings/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/rustlings/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/rustlings/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/rustlings/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/rustlings/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/rustlings/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/rustlings/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/rustlings/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/rustlings/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/rustlings/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kilbouri/rustlings/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/rustlings/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/rustlings/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/rustlings/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/rustlings/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/rustlings/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/rustlings/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/rustlings/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/rustlings/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/rustlings/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/rustlings/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/rustlings/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/rustlings/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kilbouri/rustlings/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/rustlings/issues{/number}",
    pulls_url: "https://api.github.com/repos/kilbouri/rustlings/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/rustlings/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/rustlings/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kilbouri/rustlings/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/rustlings/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/rustlings/deployments",
    created_at: "2023-05-10T21:53:36Z",
    updated_at: "2023-05-10T21:58:07Z",
    pushed_at: "2023-05-12T16:44:21Z",
    git_url: "git://github.com/kilbouri/rustlings.git",
    ssh_url: "git@github.com:kilbouri/rustlings.git",
    clone_url: "https://github.com/kilbouri/rustlings.git",
    svn_url: "https://github.com/kilbouri/rustlings",
    homepage: null,
    size: 2191,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Rust",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
  {
    id: 332290033,
    node_id: "MDEwOlJlcG9zaXRvcnkzMzIyOTAwMzM=",
    name: "terminal-3d",
    full_name: "kilbouri/terminal-3d",
    private: false,
    owner: {
      login: "kilbouri",
      id: 52428953,
      node_id: "MDQ6VXNlcjUyNDI4OTUz",
      avatar_url: "https://avatars.githubusercontent.com/u/52428953?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kilbouri",
      html_url: "https://github.com/kilbouri",
      followers_url: "https://api.github.com/users/kilbouri/followers",
      following_url:
        "https://api.github.com/users/kilbouri/following{/other_user}",
      gists_url: "https://api.github.com/users/kilbouri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kilbouri/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kilbouri/subscriptions",
      organizations_url: "https://api.github.com/users/kilbouri/orgs",
      repos_url: "https://api.github.com/users/kilbouri/repos",
      events_url: "https://api.github.com/users/kilbouri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kilbouri/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kilbouri/terminal-3d",
    description: "A 3D mesh viewer for the Linux terminal written in C!",
    fork: false,
    url: "https://api.github.com/repos/kilbouri/terminal-3d",
    forks_url: "https://api.github.com/repos/kilbouri/terminal-3d/forks",
    keys_url: "https://api.github.com/repos/kilbouri/terminal-3d/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kilbouri/terminal-3d/teams",
    hooks_url: "https://api.github.com/repos/kilbouri/terminal-3d/hooks",
    issue_events_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/issues/events{/number}",
    events_url: "https://api.github.com/repos/kilbouri/terminal-3d/events",
    assignees_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/branches{/branch}",
    tags_url: "https://api.github.com/repos/kilbouri/terminal-3d/tags",
    blobs_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/languages",
    stargazers_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/stargazers",
    contributors_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/contributors",
    subscribers_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/subscribers",
    subscription_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/subscription",
    commits_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kilbouri/terminal-3d/merges",
    archive_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/downloads",
    issues_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kilbouri/terminal-3d/deployments",
    created_at: "2021-01-23T19:20:33Z",
    updated_at: "2023-08-14T09:54:42Z",
    pushed_at: "2023-06-03T03:04:24Z",
    git_url: "git://github.com/kilbouri/terminal-3d.git",
    ssh_url: "git@github.com:kilbouri/terminal-3d.git",
    clone_url: "https://github.com/kilbouri/terminal-3d.git",
    svn_url: "https://github.com/kilbouri/terminal-3d",
    homepage: "",
    size: 2935,
    stargazers_count: 8,
    watchers_count: 8,
    language: "C",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["hacktoberfest"],
    visibility: "public",
    forks: 1,
    open_issues: 5,
    watchers: 8,
    default_branch: "main",
  },
];

export { getGithubRepositories };
