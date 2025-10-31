/**
 * Mock data for API config response
 * This replaces the /api/v2/config endpoint
 */
export const mockConfigData = {
  code: 200,
  data: {
    // Animation settings
    is_confetti_animation: true,
    
    // Timezone
    tz: "Asia/Jakarta",
    
    // Add other config fields as needed
    // You can customize these values based on your needs
  }
};

/**
 * Mock data for comment/guest data
 */
export const mockCommentData = {
  code: 200,
  data: {
    comments: [],
    // Add other comment-related data here
  }
};
