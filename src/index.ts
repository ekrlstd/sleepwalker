import { Probot } from "probot";
import { onPush } from "./webhookHandler.js";
import { analyzeDiffs } from "./diffAnalyzer.js";

export default (app: Probot) => {
  // takes an event (push) and octokit context
  app.on("push", async (context) => {
    const diffData = await onPush(context);
    const res = analyzeDiffs(diffData);
    console.log(res);
  });
};
