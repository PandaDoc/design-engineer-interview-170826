import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// House rule: every component in src/components/ ships with a colocated
// test. This meta-test enforces it — adding Foo.tsx without Foo.test.tsx
// fails the suite. (Resolved from cwd: under jsdom, import.meta.url is
// not a file: URL.)
const DIR = join(process.cwd(), "src", "components");
const files = readdirSync(DIR);
const components = files.filter(
  (f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx"),
);

describe("component kit coverage", () => {
  it.each(components)("%s has a colocated test file", (file) => {
    expect(files).toContain(file.replace(/\.tsx$/, ".test.tsx"));
  });
});
