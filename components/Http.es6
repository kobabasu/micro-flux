/*
 * - JSONを取得するクラス
 * XMLHTTPRequestをPromiseでラップ
 *
 * 使用例
 * import { http } from '../components/Http' ({}に注意)
 * var url = '/survey/api/entries/reports/';
 *
 * http.get(url).then(res => {
 *   _fields = JSON.parse(res);
 * }).catch(e => {
 *   console.error(e);
 * });
 *
 * @object http
 * @constructor
 */

export default {
  http: {
    get: (url) => {
      return new Promise( (resolve, reject) => {

        let rq = new XMLHttpRequest();

        rq.open('GET', url, true);

        rq.onload = () => {
          if (rq.readyState === 4 && rq.status === 200) {
            resolve(JSON.parse(rq.response));
          } else {
            reject( new Error(rq.statusText) );
          }
        }

        rq.onerror = () => {
          reject( new Error(rq.statusText) );
        }

        rq.send(null);
      });
    }
  }
}
