export interface LogEntry {
  level: string;
  timestamp: string;
  message: string;
  details?: string;
}
