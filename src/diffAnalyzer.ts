// create a JS object for storing the diffs
export interface IDiffs {
  renames?: Map<string, string>;
  deletions?: Array<string>;
}

// main function to analyze and catalog diffs
export function analyzeDiffs(diffObject: any) {
  // renamedFiles exists like so: {'previous_filename' => 'filename'}
  let renamedFiles = new Map<string, string>();
  let deletedFiles: Array<string> = [];

  // loop over object and access relevant field
  for (const diffs of diffObject) {
    if (diffs.status == "renamed") {
      // set the key value pairs into the Map
      renamedFiles.set(diffs.previous_filename, diffs.filename);
    } else if (diffs.status == "removed") {
      // simply push the deleted file
      deletedFiles.push(diffs.filename);
    } else {
      continue;
    }
  }

  // Build the diffs objetc using the interface
  const diffs: IDiffs = { renames: renamedFiles, deletions: deletedFiles };
  return diffs;
}
