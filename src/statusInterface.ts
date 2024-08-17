// Define the interface for a single status code
export interface StatusCode {
  code: number;
  description: string;
}

// Define the interface for a category of status codes
export interface StatusCategory {
  category: string;
  codes: StatusCode[];
}

// Define the main Status interface that is an array of status categories
export type Status = StatusCategory[];
