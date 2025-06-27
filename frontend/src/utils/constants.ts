/**
 * Application Constants
 *
 * Centralized constants used throughout the application
 * including API endpoints, configuration values, and UI constants.
 */

// API Configuration
export const API_BASE_URL = '/api';
export const API_ENDPOINTS = {
  SEARCH: '/search',
  DOWNLOAD: '/download',
  QUEUE: '/queue',
  CONFIG: '/config',
  HISTORY: '/history',
  WATCH: '/watch',
} as const;

// Download Configuration
export const DOWNLOAD_FORMATS = ['mp3', 'flac', 'ogg'] as const;
export const AUDIO_QUALITIES = ['low', 'medium', 'high', 'lossless'] as const;
export const DEFAULT_CONCURRENT_DOWNLOADS = 3;
export const MAX_CONCURRENT_DOWNLOADS = 10;

// UI Configuration
export const THEMES = ['light', 'dark', 'auto'] as const;
export const SEARCH_DEBOUNCE_MS = 300;
export const PROGRESS_UPDATE_INTERVAL_MS = 1000;

// File Size Limits
export const MAX_FILE_SIZE_MB = 500;
export const MAX_QUEUE_SIZE = 100;

// Status Constants
export const DOWNLOAD_STATUSES = [
  'pending',
  'downloading',
  'completed',
  'failed',
  'paused'
] as const;

export const SEARCH_TYPES = [
  'all',
  'track',
  'album',
  'artist',
  'playlist'
] as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error occurred',
  INVALID_URL: 'Invalid URL provided',
  DOWNLOAD_FAILED: 'Download failed',
  QUEUE_FULL: 'Download queue is full',
  FILE_TOO_LARGE: 'File size exceeds limit',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  DOWNLOAD_STARTED: 'Download started successfully',
  DOWNLOAD_COMPLETED: 'Download completed',
  QUEUE_CLEARED: 'Queue cleared successfully',
  CONFIG_SAVED: 'Configuration saved',
} as const;