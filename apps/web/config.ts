export const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    // Falls back to a hosted URL if NEXT_PUBLIC_API_URL isn't set yet
    return process.env.NEXT_PUBLIC_API_URL || 'https://zenith-gear-api.example.com';
  }
  return 'http://localhost:5000';
};
