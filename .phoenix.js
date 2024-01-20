/**
 *
 * Thirds
 *
 */

// Left third
Key.on("left", ["ctrl", "alt", "cmd"], function () {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.x,
      y: screen.y,
      width: screen.width / 3,
      height: screen.height,
    });
  }
});

// Middle third
Key.on("down", ["ctrl", "alt", "cmd"], function () {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.x + screen.width / 3,
      y: screen.y,
      width: screen.width / 3,
      height: screen.height,
    });
  }
});

// Right third
Key.on("right", ["ctrl", "alt", "cmd"], function () {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.x + (screen.width * 2) / 3,
      y: screen.y,
      width: screen.width / 3,
      height: screen.height,
    });
  }
});

/**
 *
 * Half Screens
 *
 */
Key.on("left", ["alt", "cmd"], function () {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.x,
      y: screen.y,
      width: screen.width / 2,
      height: screen.height,
    });
  }
});

Key.on("right", ["alt", "cmd"], function () {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.width / 2,
      y: screen.y,
      width: screen.width / 2,
      height: screen.height,
    });
  }
});

//Since I use them interchangbly, keep up and down to same setup

function alt_command_key() {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.width / 4,
      y: screen.y,
      width: screen.width / 2,
      height: screen.height,
    });
  }
}
Key.on("up", ["alt", "cmd"], alt_command_key);
Key.on("down", ["alt", "cmd"], alt_command_key);

/**
 *
 * Full Screen
 *
 */

Key.on("up", ["ctrl", "alt", "cmd"], function () {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();
  if (window) {
    window.setFrame({
      x: screen.x,
      y: screen.y,
      width: screen.width,
      height: screen.height,
    });
  }
});
