# SupplySnap - Raw Material Supply Platform

SupplySnap connects Indian street food vendors with trusted raw material suppliers, featuring real-time pricing, group orders, and supplier discovery.

## Features

- **Supplier Discovery**: Find and compare verified suppliers
- **Group Orders**: Join bulk orders for better pricing
- **Live Price Board**: Real-time market rates
- **Order Management**: Track current and past orders
- **Admin Panel**: Manage suppliers and pricing
- **Responsive Design**: Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd supply-snap
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your actual Firebase and API keys
```

4. Configure Firebase
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication (Email/Password)
   - Copy your Firebase configuration values to `.env.local`

5. Run the development server
```bash
npm run dev
# or
yarn dev
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# OpenWeather API
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
