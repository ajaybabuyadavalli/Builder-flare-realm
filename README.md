# Influbazzar - Influencer Marketing Platform 🚀

A comprehensive influencer marketing platform built with React, TypeScript, and modern web technologies. Connect brands with authentic creators for powerful marketing campaigns.

## ✨ Features

### 🎯 For Brands

- **Campaign Management**: Create, manage, and track influencer campaigns
- **Creator Discovery**: Find perfect creators with advanced filtering
- **Analytics Dashboard**: Real-time performance metrics and ROI tracking
- **Secure Payments**: Escrow-protected payments for safe transactions
- **Content Approval**: Review and approve creator content before publishing

### 👥 For Creators

- **Dashboard**: Track earnings, campaigns, and performance metrics
- **Campaign Discovery**: Browse and apply for relevant brand campaigns
- **Content Management**: Upload and manage your content portfolio
- **Earnings Tracking**: Monitor payments and withdrawal status
- **Analytics**: Detailed insights into your content performance

### 🔐 Authentication & Security

- Role-based access control (Creator, Brand, Agency, Admin)
- Secure login/signup with OTP verification
- Protected routes and data privacy
- Escrow system for secure payments

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Custom component library with shadcn/ui
- **State Management**: React Context API
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ajaybabuyadavalli/Builder-flare-realm.git
   cd Builder-flare-realm
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:8080`

## 🎮 Demo Credentials

### Creator Account

- **Email**: `creator@demo.com`
- **Password**: `password123`

### Brand Account

- **Email**: `brand@demo.com`
- **Password**: `password123`

### Agency Account

- **Email**: `agency@demo.com`
- **Password**: `password123`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Layout.tsx      # Layout wrapper with navigation
│   └── NavbarDynamic.tsx # Role-based navigation
├── contexts/           # React context providers
│   └── AuthContext.tsx # Authentication state management
├── pages/              # Application pages
│   ├── brand/          # Brand-specific pages
│   ├── creator/        # Creator-specific pages
│   └── ...            # Public pages
├── lib/               # Utility functions
└── App.tsx            # Main application component
```

## 🌟 Key Features Implemented

### Brand Dashboard

- Campaign overview with live metrics
- Creator discovery with advanced filters
- Campaign creation wizard (4-step process)
- Analytics and performance tracking
- Payment management with escrow

### Creator Dashboard

- Performance metrics with trend indicators
- Campaign discovery and application
- Content portfolio management
- Earnings tracking and withdrawals
- Detailed analytics and insights

### Navigation System

- Dynamic navigation based on user role
- Responsive design for mobile and desktop
- Dark/light mode support
- Profile dropdown with settings
- Real-time notifications

## 🎨 UI/UX Features

- **Responsive Design**: Works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Smooth transitions with Framer Motion
- **Interactive Elements**: Ripple effects and hover states
- **Loading States**: Elegant loading animations
- **Form Validation**: Real-time form validation
- **Toast Notifications**: Success/error notifications

## 📊 Demo Data

The platform includes comprehensive demo data:

- 6 diverse creator profiles with realistic metrics
- 5 active campaigns with performance data
- Real-time notifications and updates
- Interactive charts and analytics
- Sample content and portfolios

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check

## 🚀 Deployment

The application is configured for easy deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ajay Babu Yadavalli**

- GitHub: [@ajaybabuyadavalli](https://github.com/ajaybabuyadavalli)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Star this repository if you found it helpful!**
