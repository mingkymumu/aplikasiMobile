  export const BASE_HOST = 'https://5.189.128.140:8443' ; // DEV -PART 2.2
//export const BASE_HOST = "https://localhost:8443"; // DEV -PART 2.2

export const API = "/api/auth";
export const API_POST = "/api/post";
export const API_PROG_LANG = "/api/progLang";
export const USER_AUTHENTICATION = BASE_HOST + API + "/signin";
export const USER_REGISTRATION = BASE_HOST + API + "/signup";
export const UPLOAD_FILE = BASE_HOST + "/uploadFile";
export const DELETE_FILE = BASE_HOST + "/deleteFile?file=";
export const CREATE_POST_TUTORIAL = BASE_HOST +API_POST + "/create_post";
export const FETCH_ALL_PROGRAM_LANGUAGE = BASE_HOST + API_PROG_LANG +"/getAllProgrammingLanguage";
export const FETCH_ALL_POST_TUTORIAL = BASE_HOST + API_POST +"/getAllTutorial";
// export const GET_POST_BY_USERID = BASE_HOST + "/"
