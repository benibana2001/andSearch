import {SearchSchool} from './SearchSchool.js';
let sampleAry = [
  'ファースト高校',
  'セカンド高校',
  'トリプル高校',
  'ファーストセカンド高校',
  'セカンドトリプル高校',
  'セカンド高校夜間学部',
  'セカンドトリプル高校夜間学部',
  'ファーストセカンド高校夜間学部'
];

let searchClient = new SearchSchool(sampleAry);

console.log('入力された文字列は : ' + searchClient.schoolNames);
console.log('検索される対象の配列は : ' + searchClient.array);
console.log('検索結果は　↓↓↓↓↓↓↓↓');
searchClient.doSearch();