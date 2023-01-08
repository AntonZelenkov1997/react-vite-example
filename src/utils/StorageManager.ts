class StorageManager {
  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string) {
    const storageItem = localStorage.getItem(key);
    if (storageItem) return JSON.parse(storageItem);
    return null;
  }
}

export enum StorageKeys {
  TodoList = 'TodoList',
  Language = 'Language',
  Theme = 'Theme'
}

export const getInitialStorageValue = (key: StorageKeys, defaultValue: any) =>
  StorageManager.get(key) ?? defaultValue;

export default StorageManager;
