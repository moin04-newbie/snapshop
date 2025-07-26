// App configuration constants
export const APP_CONFIG = {
  name: "SupplySnap",
  description: "Connects street food vendors with raw material suppliers",
  version: "1.0.0",
  author: "SupplySnap Team",
  url: "https://supplysnap.com",
  supportEmail: "support@supplysnap.com",
}

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  suppliers: "/api/suppliers",
  orders: "/api/orders",
  groupOrders: "/api/group-orders",
  auth: "/api/auth",
  profile: "/api/profile",
  admin: "/api/admin",
}

// Default pagination settings
export const PAGINATION = {
  defaultPageSize: 12,
  maxPageSize: 50,
}

// Order status options
export const ORDER_STATUS = {
  PENDING: "Pending",
  IN_TRANSIT: "In Transit",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
} as const

// Supplier categories
export const SUPPLIER_CATEGORIES = [
  "Vegetables",
  "Fruits",
  "Spices",
  "Grains",
  "Oils",
  "Dairy",
  "Meat & Poultry",
  "Bakery Items",
  "Beverages",
  "Other",
] as const

// Indian cities for location dropdown
export const INDIAN_CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
] as const

// Languages supported
export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "bn", name: "Bengali" },
  { code: "gu", name: "Gujarati" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "ur", name: "Urdu" },
] as const

// Price ranges for filtering
export const PRICE_RANGES = [
  { label: "₹ (Budget)", value: "1" },
  { label: "₹₹ (Moderate)", value: "2" },
  { label: "₹₹₹ (Premium)", value: "3" },
  { label: "₹₹₹₹ (Luxury)", value: "4" },
] as const

// Delivery speed options
export const DELIVERY_SPEEDS = ["30 mins", "1 hour", "2 hours", "Same day", "Next day", "2-3 days"] as const

// Business categories for vendor registration
export const BUSINESS_CATEGORIES = [
  "Street Food",
  "Restaurant",
  "Cafe",
  "Catering",
  "Bakery",
  "Food Truck",
  "Cloud Kitchen",
  "Other",
] as const

// Payment methods
export const PAYMENT_METHODS = [
  "UPI",
  "Bank Transfer",
  "Cash on Delivery",
  "Digital Wallet",
  "Credit Card",
  "Debit Card",
] as const

// Notification types
export const NOTIFICATION_TYPES = {
  ORDER_UPDATE: "order_update",
  PRICE_ALERT: "price_alert",
  GROUP_ORDER: "group_order",
  SUPPLIER_UPDATE: "supplier_update",
  SYSTEM: "system",
} as const

// File upload limits
export const UPLOAD_LIMITS = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedImageTypes: ["image/jpeg", "image/png", "image/webp"],
  allowedDocumentTypes: ["application/pdf", "image/jpeg", "image/png"],
}

// Feature flags (for gradual rollout of new features)
export const FEATURE_FLAGS = {
  enableWeatherIntegration: true,
  enableMapIntegration: true,
  enableGroupOrders: true,
  enableAdminPanel: true,
  enableNotifications: true,
} as const
