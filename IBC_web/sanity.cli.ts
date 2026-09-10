import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'idytbnwx',  
    dataset: 'production'  
  },
  deployment: {
    appId: 'q1gvbdrwsagrd6o18msf09xg'
  },
  autoUpdates: true
})
