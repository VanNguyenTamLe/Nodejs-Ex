function importCookiesFromString(jsonString) {
  return new Promise((resolve, reject) => {
    try {
      const cookiesData = JSON.parse(jsonString);
      const cookiesSetters = cookiesData.map(cookie => {
        return new Promise((resolve, reject) => {
          chrome.cookies.set(cookie, function(cookie) {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve();
            }
          });
        });
      });

      Promise.all(cookiesSetters)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
}
