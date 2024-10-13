import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 10 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  const url = "http://10.10.10.69:31694/lrnzwr";
  const res = http.get(url);
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
