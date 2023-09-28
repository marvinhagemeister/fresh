import { assertEquals } from "$std/testing/asserts.ts";
import { Status } from "$fresh/server.ts";
import { withFakeServe } from "./test_utils.ts";

Deno.test("serves GET", async () => {
  await withFakeServe(
    "./tests/fixture_export_all/main.ts",
    async (server) => {
      const res = await server.get(`/all`);
      const text = await res.text();

      assertEquals(res.status, Status.OK);
      assertEquals(text, "GET: it works");
    },
  );
});

Deno.test("serves HEAD", async () => {
  await withFakeServe(
    "./tests/fixture_export_all/main.ts",
    async (server) => {
      const res = await server.head(`/all`);
      assertEquals(res.status, Status.OK);

      await res.body?.cancel();
    },
  );
});

Deno.test("serves POST", async () => {
  await withFakeServe(
    "./tests/fixture_export_all/main.ts",
    async (server) => {
      const res = await server.post(`/all`);
      assertEquals(res.status, Status.OK);

      await res.body?.cancel();
    },
  );
});
