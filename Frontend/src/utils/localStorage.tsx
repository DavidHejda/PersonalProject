export const saveToLocalStorage = (key: string, value: any) => {
  if (value || value.length > 1) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string) => {
  const retrievedString = localStorage.getItem(key);
  if (retrievedString) {
    const retrievedValue = JSON.parse(retrievedString);
    return retrievedValue;
  }
};
