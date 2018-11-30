class SearchSchool{
  constructor(array){
    this.array = array;

    this.queryKey = 'SchoolName';
    this.locationSearch = decodeURI(location.search);

    // クエリキーを含むかの判定、
    this.containsQueryKey = (()=>{
      return this.locationSearch.indexOf(this.queryKey);
    })();

    // スペースを区切り文字として、配列に変換する
    this.splitSpace = (haystackStrings)=>{
      let regSpaces = /\s+/;
      return haystackStrings.split(regSpaces);
    };

    // クエリからKEYを削除
    this.schoolNames = (()=>{
      let queryStringsLength = this.queryKey.length + 2;
      if(this.containsQueryKey) {
        let query = this.locationSearch.slice(queryStringsLength);
        return this.splitSpace(query);
      }
    })();

    /**
     * haystack内にneedleの要素がすべて含まれていたらtrueを返す
     * @strings haystack
     * @array needle
     */
    this.searchAction = (haystack, needle)=>{
      let counter = 0;
      for(let i = 0; i < needle.length; i++){
        if(haystack.indexOf(needle[i]) > -1) counter++;
      }
      return counter === needle.length;
    };

    // 検索結果を返す
    this.search = (haystack, needle)=>{
      let resultArray = [];
      // haystack の中から needle を拾う
      for(let i = 0; i < haystack.length; i++){
        let target = haystack[i];
        if(this.searchAction(target, needle)) resultArray.push(target);
      }
      if(resultArray.length <= 0) return false;
      return resultArray;
    };

    this.doSearch = ()=>{
      let ary = this.search(this.array, this.schoolNames);
      console.log(ary);
    }
  }

// 異常の定義
// let validateSchoolName = function(schoolName){
//   let errorMessage;
//   if(!schoolName) errorMessage = '学校コードがセットされていません';
//
//   // 処理を終了してエラーメッセージを返す
//   if(errorMessage) return errorMessage;
//   return true;
// };

}

export {SearchSchool};
