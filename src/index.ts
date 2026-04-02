import { Probot } from "probot";
import { onPush } from "./onPush.js";

export default (app: Probot) => {
  // takes an event (push) and octokit context
  app.on("push", async (context) => {
    const data = await onPush(context);
    console.log(data);
  });
};
