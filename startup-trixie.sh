#!/bin/bash
export DISPLAY=:0
export XDG_RUNTIME_DIR=/run/user/$(id -u)
sleep 5

# Try Wayland (best vsync on Pi OS 64-bit)
chromium \
  --enable-features=UseOzonePlatform \
  --ozone-platform=wayland \
  --noerrdialogs \
  --disable-infobars \
  --kiosk "https://jennyo88.github.io" \
  --autoplay-policy=no-user-gesture-required \
  --no-first-run \
  --disable-session-crashed-bubble \
  --start-fullscreen || {

  # Fallback to EGL on X11
  xset s off -dpms s noblank
  chromium \
    --use-gl=egl \
    --noerrdialogs \
    --disable-infobars \
    --kiosk "https://jennyo88.github.io" \
    --autoplay-policy=no-user-gesture-required \
    --no-first-run \
    --disable-session-crashed-bubble \
    --start-fullscreen || {

    # Final fallback: disable GPU (debug)
    chromium \
      --disable-gpu \
      --noerrdialogs \
      --disable-infobars \
      --kiosk "https://jennyo88.github.io" \
      --autoplay-policy=no-user-gesture-required \
      --no-first-run \
      --disable-session-crashed-bubble \
      --start-fullscreen
  }
}
