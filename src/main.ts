import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { Effect, Console } from "effect";
import { FileSystem } from "@effect/platform";
import { homedir } from "node:os";
import path from "node:path";

const program = Effect.gen(function* () {
  yield* Console.log("Download cleaner started...");

  const fs = yield* FileSystem.FileSystem;
  const dpath = path.join(homedir(), "Downloads");

  const exists = yield* fs.exists(dpath);

  if (!exists) return;

  const content = yield* fs.readDirectory(dpath);
  const filteredContent = content.filter((f) => f[0] !== ".");

  yield* Effect.forEach(filteredContent, (file) =>
    Effect.gen(function* () {
      yield* Console.log(file + " will be removed");
      yield* fs.remove(path.join(dpath, file), { recursive: true });
    }),
  );

  yield* Console.log("All files were removed...");
});

NodeRuntime.runMain(program.pipe(Effect.provide(NodeContext.layer)));
