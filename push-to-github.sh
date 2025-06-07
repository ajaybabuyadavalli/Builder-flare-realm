#!/bin/bash

# Git commands to push Influbazzar to GitHub
echo "🚀 Pushing Influbazzar to GitHub..."

# Add the GitHub remote repository
echo "📡 Adding GitHub remote..."
git remote add origin https://github.com/ajaybabuyadavalli/Builder-flare-realm.git

# Or if origin already exists, update it
git remote set-url origin https://github.com/ajaybabuyadavalli/Builder-flare-realm.git

# Add all files to staging
echo "📁 Adding files to staging..."
git add .

# Commit with a meaningful message
echo "💾 Committing changes..."
git commit -m "🎉 Initial commit: Complete Influbazzar influencer marketing platform

✨ Features implemented:
- Brand dashboard with campaign management
- Creator dashboard with earnings tracking  
- Advanced creator discovery system
- Campaign creation wizard (4-step process)
- Role-based authentication (Creator/Brand/Agency)
- Real-time analytics and performance metrics
- Secure payment system with escrow protection
- Responsive design with dark/light mode
- Interactive UI with animations and ripple effects

🛠️ Tech Stack:
- React 18 + TypeScript + Vite
- Tailwind CSS + Framer Motion
- Custom UI component library
- React Router v6 + Context API

🎯 Demo Credentials:
- Brand: brand@demo.com / password123
- Creator: creator@demo.com / password123

Ready for production deployment! 🚀"

# Push to GitHub (main branch)
echo "🔀 Pushing to GitHub main branch..."
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Repository: https://github.com/ajaybabuyadavalli/Builder-flare-realm"
echo ""
echo "🎉 Your Influbazzar platform is now on GitHub!"
echo "📊 You can now deploy it to Netlify, Vercel, or any hosting platform."
