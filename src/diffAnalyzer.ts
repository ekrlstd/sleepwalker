// main function to analyze and catalog diffs
export function analyzeDiffs(diffObject: any) {
  let renamedFiles: Array<string> = [];
  let deletedFiles: Array<string> = [];

  // loop over object and access relevant field
  for (const diffs of diffObject) {
    if (diffs.status == "renamed") {
      renamedFiles.push(diffs.previous_filename, diffs.filename);
    } else if (diffs.status == "removed") {
      deletedFiles.push(diffs.filename);
    } else {
      continue;
    }
  }
  const totalFiles = ["renamed", renamedFiles, "deleted", deletedFiles];
  return totalFiles;
}
