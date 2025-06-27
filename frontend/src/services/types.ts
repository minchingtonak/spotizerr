/**
 * Service Types
 *
 * TypeScript type definitions for services and API responses.
 * Centralized type definitions for consistent typing across services.
 */

// Common types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Search related types
export interface SearchResult {
  id: string;
  title: string;
  artist: string;
  album?: string;
  type: 'track' | 'album' | 'artist' | 'playlist';
  url: string;
  thumbnail?: string;
  duration?: number;
  releaseDate?: string;
}

export interface SearchRequest {
  query: string;
  type?: 'all' | 'track' | 'album' | 'artist' | 'playlist';
  limit?: number;
  offset?: number;
}

// Download related types
export interface DownloadItem {
  id: string;
  title: string;
  artist: string;
  album?: string;
  url: string;
  status: 'pending' | 'downloading' | 'completed' | 'failed' | 'paused';
  progress: number;
  quality?: string;
  format?: string;
  addedAt: string;
  completedAt?: string;
  error?: string;
}

export interface DownloadRequest {
  url: string;
  type: 'track' | 'album' | 'playlist' | 'artist';
  quality?: string;
  format?: string;
}

// Configuration types
export interface AppConfig {
  downloadPath: string;
  audioQuality: 'low' | 'medium' | 'high' | 'lossless';
  downloadFormat: 'mp3' | 'flac' | 'ogg';
  concurrentDownloads: number;
  autoDownload: boolean;
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
}

// History types
export interface HistoryItem {
  id: string;
  title: string;
  artist: string;
  album?: string;
  downloadedAt: string;
  filePath: string;
  fileSize: number;
  quality: string;
  format: string;
}

// Watch list types
export interface WatchItem {
  id: string;
  name: string;
  type: 'artist' | 'playlist';
  url: string;
  lastChecked?: string;
  addedAt: string;
  isActive: boolean;
}

// Progress tracking types
export interface ProgressItem {
  id: string;
  progress: number;
  status: 'pending' | 'active' | 'completed' | 'failed';
  message?: string;
  startedAt?: string;
  completedAt?: string;
}