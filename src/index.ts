import { Probot } from "probot";

export default (app: Probot) => {
  // takes an event (push) and the context which
  // has all info from the push event
  app.on("push", async (context) => {
    app.log.info(context.payload);

    // multi-level deconstruction
    // of the context object
    const {
      payload: {
        before,
        after,
        repository: {
          // rename repository.name and
          // repository.owner.name to avoid conflicts
          name: repoName,
          owner: { name: ownerName },
        },
      },
    } = context;

    console.log(before, after, repoName, ownerName);
    // we need owner, repo, before and after SHA
    // GET /repos/{owner}/{repo}/compare/{BASE}...{HEAD}
  });
};
