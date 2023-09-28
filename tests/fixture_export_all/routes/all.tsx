export default {
  GET() {
    return new Response("GET: it works", { status: 200 });
  },
  HEAD() {
    return new Response("POST: it works", { status: 200 });
  },
  POST() {
    return new Response("POST: it works", { status: 200 });
  },
  PUT() {
    return new Response("POST: it works", { status: 200 });
  },
  DELETE() {
    return new Response("POST: it works", { status: 200 });
  },
  PATCH() {
    return new Response("POST: it works", { status: 200 });
  },
  OPTIONS() {
    return new Response("POST: it works", { status: 200 });
  },
};
