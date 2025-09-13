interface CacheEntry {
  url: string;
  data: string | HTMLImageElement;
  size: number;
  lastAccessed: number;
}

class AssetPreloader {
  private cache: Map<string, CacheEntry> = new Map();
  private maxCacheSize = 50 * 1024 * 1024; // 50MB
  private currentCacheSize = 0;

  // Preload an image
  async preloadImage(url: string): Promise<HTMLImageElement> {
    // Check cache first
    const cached = this.cache.get(url);
    if (cached) {
      cached.lastAccessed = Date.now();
      return cached.data as HTMLImageElement;
    }

    // Load image
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        // Estimate size (width * height * 4 bytes per pixel)
        const estimatedSize = img.width * img.height * 4;
        
        // Add to cache with LRU eviction if needed
        this.addToCache(url, img, estimatedSize);
        resolve(img);
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  // Preload multiple assets
  async preloadAssets(urls: string[]): Promise<void> {
    const promises = urls.map(url => {
      if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        return this.preloadImage(url);
      }
      // Could add audio preloading here
      return Promise.resolve();
    });

    await Promise.all(promises);
  }

  // Add to cache with LRU eviction
  private addToCache(url: string, data: any, size: number) {
    // Evict items if cache is too large
    while (this.currentCacheSize + size > this.maxCacheSize && this.cache.size > 0) {
      this.evictLeastRecentlyUsed();
    }

    this.cache.set(url, {
      url,
      data,
      size,
      lastAccessed: Date.now()
    });

    this.currentCacheSize += size;
  }

  // Evict least recently used item
  private evictLeastRecentlyUsed() {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      const entry = this.cache.get(oldestKey);
      if (entry) {
        this.currentCacheSize -= entry.size;
        this.cache.delete(oldestKey);
      }
    }
  }

  // Clear cache
  clear() {
    this.cache.clear();
    this.currentCacheSize = 0;
  }

  // Get cache info
  getCacheInfo() {
    return {
      itemCount: this.cache.size,
      currentSize: this.currentCacheSize,
      maxSize: this.maxCacheSize,
      usage: (this.currentCacheSize / this.maxCacheSize) * 100
    };
  }
}

// Singleton instance
export const assetPreloader = new AssetPreloader();