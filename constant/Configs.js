  export const BASE_HOST = 'http://snorlax.tempat.com' ; // DEV -PART 2.2
  export const CREDENTIAL = {
    'grant_type'  : 'client_credentials',
    'client_id': '0vCQowPnun8UHLmIeoWhr2Cs17xVcY34loiA8Kd6',
    'client_secret': 'oRXrdH4jdfRS4rZ5PrfpwwQ549EYpSS47r0xRt9X75eq4zcrd9uUOYU2JvMiur4blUzgTII3nxjvK49HIOfqF58xweEuWdkHDHPTF8KtH6V2bIdY4Ss4iq6440svbzUS',

  };

  export const USER_AUTHENTICATION = BASE_HOST +'/api/v1/auth/token';
  export const GET_BRANCH_DETAIL = BASE_HOST +'/api/v2/branch/coffee-toffee-wonocolo?';
  export const GET_BRANCH = BASE_HOST + '/api/v2/search?page=1&per_page=10&query=coffee&class=provinsi&idx=11';


  //export const BASE_HOST = "https://localhost:8443"; // DEV -PART 2.2

// export const API = "/api/auth";
// export const API_POST = "/api/post";
// export const API_PROG_LANG = "/api/progLang";
// export const USER_AUTHENTICATION = BASE_HOST + API + "/signin";
// export const USER_REGISTRATION = BASE_HOST + API + "/signup";
// export const UPLOAD_FILE = BASE_HOST + "/uploadFile";
// export const DELETE_FILE = BASE_HOST + "/deleteFile?file=";
// export const CREATE_POST_TUTORIAL = BASE_HOST +API_POST + "/create_post";
// export const FETCH_ALL_PROGRAM_LANGUAGE = BASE_HOST + API_PROG_LANG +"/getAllProgrammingLanguage";
// export const FETCH_ALL_POST_TUTORIAL = BASE_HOST + API_POST +"/getAllTutorial";



// export const GET_POST_BY_USERID = BASE_HOST + "/"
