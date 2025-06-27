/**
 * API Service
 *
 * Main API service layer for communicating with the backend.
 * Handles HTTP requests, authentication, and error handling.
 */

const API_BASE_URL = '/api';

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

class ApiService {
  // @ts-expect-error - baseUrl will be used when HTTP methods are implemented
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Generic GET request method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get<T>(_endpoint: string): Promise<ApiResponse<T>> {
    // TODO: Implement GET request functionality
    throw new Error('Not implemented');
  }

  /**
   * Generic POST request method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async post<T>(_endpoint: string, _data?: unknown): Promise<ApiResponse<T>> {
    // TODO: Implement POST request functionality
    throw new Error('Not implemented');
  }

  /**
   * Generic PUT request method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async put<T>(_endpoint: string, _data?: unknown): Promise<ApiResponse<T>> {
    // TODO: Implement PUT request functionality
    throw new Error('Not implemented');
  }

  /**
   * Generic DELETE request method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async delete<T>(_endpoint: string): Promise<ApiResponse<T>> {
    // TODO: Implement DELETE request functionality
    throw new Error('Not implemented');
  }
}

export const apiService = new ApiService();
export default apiService;