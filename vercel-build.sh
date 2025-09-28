#!/bin/bash

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "Installing dependencies..."
npm install --production=false

# Run TypeScript check
echo "Running TypeScript check..."
npx tsc --noEmit

# Run the build
echo "Building frontend..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully. Output directory: dist/"
    echo "📁 Build contents:"
    ls -la dist/
    echo "📊 Build size:"
    du -sh dist/
else
    echo "❌ Build failed. Output directory not found."
    exit 1
fi
