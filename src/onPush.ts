import { Context } from "probot";

// GitHub push handler function
export async function onPush(context: Context<"push">) {
  // deconstruction of context object
  const {
    payload: {
      before,
      after,
      repository: {
        // rename repository.name and
        // repository.owner.name to avoid conflicts
        name: repoName,
        owner: { login: ownerName },
      },
    },
  } = context;

  // octokit expects "base...head" instead of "base"..."head"
  const baseHeadConcat: string = `${before}...${after}`;

  // octokit uses compareCommitsWithBasehead(), which takes
  // a JS object as the parameter, so we need to build it
  const compareObject = {
    owner: ownerName,
    repo: repoName,
    basehead: baseHeadConcat,
  };

  const diffData =
    await context.octokit.repos.compareCommitsWithBasehead(compareObject);

  return diffData.data.files;
}
