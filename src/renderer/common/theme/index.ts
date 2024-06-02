export function themeInit() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  media.addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newColorScheme);
  });

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
