import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/Sanjanak5157/Aiot-Internship---AIOT_BASED_OCCUPANCY_DETECTION_USING_TOF_SENSOR.git',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Proxy /api/* → FastAPI backend so no CORS issue in dev
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
