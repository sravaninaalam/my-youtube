
const Google_Api_Key="AIzaSyCYWlnZmZw4Smk5Qw8quLIhdaOjRultq-s"

export const Youtube_Video_Api=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
  Google_Api_Key

   const Youtube_Suggestions= "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  export const Youtube_Suggestions_CORS=`https://api.allorigins.win/raw?url=${encodeURIComponent(Youtube_Suggestions)}`

  export const Search_By_Keyword='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key='+Google_Api_Key+"&q="

  export const  Search_By_Id="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+
  Google_Api_Key+"&id="


  export const Live_Chat_Count=20


  export const SHORTS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoDuration=short&key=" +
  Google_Api_Key +
  "&q=trendingshorts";



  export const Hamburger_Icon="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"

export const Youtube_Icon="https://yt3.ggpht.com/a/AATXAJwPsenHD5u98E2kS48C-YZpIteYcLkBFU7b8Q=s900-c-k-c0xffffffff-no-rj-mo"

export const User_Icon="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
