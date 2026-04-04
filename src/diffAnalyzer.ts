// main function to analyze and catalog diffs
export function analyzeDiffs(diffObject: any) {
  // loop over object and access relevant field
  for (const diffs of diffObject) {
    if (diffs.status == "renamed")
      return (diffs.previous_filename, diffs.filename);
    else if (diffs.status == "removed") return diffs.filename;
    // No files affected
    else return "No changes";
  }
}
