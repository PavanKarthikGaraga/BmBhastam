# BmBhastam

A modern web application built with Next.js and React, featuring a dashboard interface with various interactive components.

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** PostCSS
- **Components:**
  - Layer System
  - Notifications
  - Help Interface
  - Brand Management
  - Banner System

## Project Structure
my-app/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── LayerContent.tsx # Manages layered content display
│ │ │ ├── HelpContent.tsx # Help and documentation component
│ │ │ ├── NotificationContent.tsx# Notification system component
│ │ │ ├── BrandContent.tsx # Brand management interface
│ │ │ └── BannerContent.tsx # Banner display and management
│ │ └── dashboard/
│ │ └── page.tsx # Main dashboard page
├── postcss.config.mjs # PostCSS configuration
└── package.json # Project dependencies and scripts



## Component Documentation

### LayerContent
- Purpose: Manages multiple layers of content with z-index management
- Features: Layer switching, stacking, and visibility controls

### HelpContent
- Purpose: Provides user assistance and documentation
- Features: Searchable help topics, contextual help

### NotificationContent
- Purpose: Handles system notifications and alerts
- Features: Toast notifications, alert management

### BrandContent
- Purpose: Brand asset and identity management
- Features: Brand guidelines, asset library

### BannerContent
- Purpose: Manages promotional and informational banners
- Features: Banner scheduling, content management

## Getting Started

1. **Clone the repository:**