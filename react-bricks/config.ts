import React from 'react'

// React Bricks configuration
const config = {
  appId: '4d6401c5-9ee1-4c1b-b368-1c8776fd47df',
  apiKey: process.env.API_KEY || '',
  environment: process.env.ENVIRONMENT || 'main',
  bricks: [
    // We'll add custom bricks here later
  ],
  pageTypes: [
    {
      name: 'page',
      pluralName: 'pages',
      defaultLocked: false,
      getDefaultContent: () => [],
    },
  ],
  logo: '/logo.png',
  contentClassName: 'content',
  renderLocalLink: (props: any) => React.createElement('a', props),
  navigate: (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path
    }
  },
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: 'body',
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enableDefaultEmbedBrick: true,
  enableUnsplash: true,
  unsplashApiKey: process.env.UNSPLASH_API_KEY || '',
  enableUnsplashSearch: true,
  // Development and deployment configuration
  isDevelopment: process.env.NODE_ENV === 'development',
  previewPath: '/',
  // Enable deployment hooks when available
  ...(process.env.DEPLOY_HOOK_URL && {
    deployHook: {
      url: process.env.DEPLOY_HOOK_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }),
  // Enable preview mode for development
  enablePreview: true,
  // Allow editing in development
  allowEditingInProduction: process.env.NODE_ENV === 'development',
}

export default config
