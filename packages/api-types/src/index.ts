// Financial data types
export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  category: string;
}

export interface FinancialSummary {
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  period: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
