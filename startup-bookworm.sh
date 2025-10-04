#!/bin/bash
# Wait for network to come online (optional)
sleep 5

# Disable screensaver / power saving (optional)
# xset s off
# xset -dpms
# xset s noblank

# Launch Chromium in kiosk mode
chromium-browser \
  --noerrdialogs \
  --disable-infobars \
  --kiosk "https://jennyo88.github.io"  # Replace with your GitHub.io or local page
  --autoplay-policy=no-user-gesture-required
