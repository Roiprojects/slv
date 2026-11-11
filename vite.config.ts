import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  // 1. Port numbers for server & preview strictly managed via .env / environment
  const rawPort = process.env.PORT || env.PORT || env.VITE_PORT;
  const devPort = rawPort ? parseInt(rawPort, 10) : 5173;

  const rawPreviewPort = process.env.PORT || env.PORT || process.env.PREVIEW_PORT || env.PREVIEW_PORT;
  const previewPort = rawPreviewPort ? parseInt(rawPreviewPort, 10) : 4173;

  // Host parsing: converts string "true" / "all" to boolean true (0.0.0.0)
  const parseHost = (val?: string): string | boolean => {
    if (!val || val === 'true' || val === 'all' || val === '*') return true;
    if (val === 'false') return false;
    return val;
  };
  const host = parseHost(process.env.HOST || env.HOST);

  // 2. Parse allowedHosts from .env with auto-sanitization
  // Handles:
  // - "true", "all", "*" -> returns true (bypasses host validation middleware)
  // - full URLs like "https://slvbore.roiclients.co.in/" -> strips protocol & slashes, adds wildcards
  // - comma-separated list of domains
  const parseAllowedHosts = (val?: string): string[] | true => {
    if (!val || val === 'true' || val === 'all' || val === '*') {
      return true;
    }

    const hosts = new Set<string>();
    // Always include roiclients domain pattern as a built-in safe host
    hosts.add('slvbore.roiclients.co.in');
    hosts.add('.roiclients.co.in');

    for (const raw of val.split(',')) {
      const trimmed = raw.trim();
      if (!trimmed) continue;
      if (trimmed === 'true' || trimmed === 'all' || trimmed === '*') {
        return true;
      }

      // Add raw string in case a proxy passes raw value
      hosts.add(trimmed);

      // Clean domain (remove protocol, path, port)
      const clean = trimmed
        .replace(/^https?:\/\//i, '')
        .split('/')[0]
        .split(':')[0]
        .trim();

      if (clean) {
        hosts.add(clean);
        if (!clean.startsWith('.') && clean.includes('.')) {
          hosts.add(`.${clean}`);
          const parts = clean.split('.');
          if (parts.length > 2) {
            hosts.add(`.${parts.slice(-2).join('.')}`);
            hosts.add(parts.slice(-2).join('.'));
          }
        }
      }

      // If raw contains ':', also allow prefix (e.g. 'https') because Vite parses before colon
      if (trimmed.includes(':')) {
        hosts.add(trimmed.split(':')[0]);
      }
    }

    return hosts.size > 0 ? Array.from(hosts) : true;
  };

  const allowedHosts = parseAllowedHosts(
    process.env.ALLOWED_HOSTS || env.ALLOWED_HOSTS || env.VITE_ALLOWED_HOSTS
  );

  // 3. Proxy configuration strictly driven by .env
  const proxyTarget = process.env.PROXY_TARGET || env.PROXY_TARGET || ((process.env.PROXY_PORT || env.PROXY_PORT) ? `http://localhost:${process.env.PROXY_PORT || env.PROXY_PORT}` : undefined);

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      port: devPort,
      host,
      allowedHosts,
      ...(proxyTarget ? {
        proxy: {
          '/api': {
            target: proxyTarget,
            changeOrigin: true,
            secure: false,
          },
        },
      } : {}),
    },
    preview: {
      port: previewPort,
      host,
      allowedHosts,
      ...(proxyTarget ? {
        proxy: {
          '/api': {
            target: proxyTarget,
            changeOrigin: true,
            secure: false,
          },
        },
      } : {}),
    },
  };
});

