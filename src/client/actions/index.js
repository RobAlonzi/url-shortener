import axios from "axios";

// URL Shortening Actions
export const SHORTEN_URL = 'shorten_url';
export const SHORTEN_LOADING = 'shorten_loading';
export const SHORTEN_URL_ERROR = 'shorten_url_error';
export const SHORTEN_URL_CREATED = 'shorten_url_created';

// Created URL Actions
export const CREATED_URLS_LOADING = 'created_urls_loading';
export const CREATED_URLS_FETCHED = 'created_urls_fetched';
export const CREATED_URLS_ADD = 'created_urls_add';

// URL Shortened Details Actions
export const SET_URL_DETAILS = 'set_url_details';

// API Connection
export const API = axios.create({ baseURL: "http://localhost:3000"});


