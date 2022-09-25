import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '60s', target: 50 },
    { duration: '30s', target: 20 },
  ],
};
export default function() {
  let res = http.get('https://osrm.meena.fndev.net/route/v1/driving/-73.935242,40.730610;-73.971321,40.776676?overview=false');
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}