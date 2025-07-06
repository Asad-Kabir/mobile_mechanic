export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
      border: string;
      success: string;
      warning: string;
      error: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    borderRadius: {
      small: number;
      medium: number;
      large: number;
    };
    fontSize: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
    fonts: {
      regular: string;
      medium: string;
      bold: string;
      heavy: string;
      light: string;
    };
    fontWeights: {
      light: string;
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
    };
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
      display: number;
    };
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  }
  
  export interface AppState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
  }
  