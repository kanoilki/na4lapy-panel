export default  process.env.NODE_ENV === 'development' ? 'http://localhost:8123/' : 'http://api.na4lapy.org/';
export const DATE_FORMAT = 'DD MMM, YYYY';
export const TOAST_DURATION = 2000;
export const FILE_SIZE_LIMIT_IN_MB = 3;
export const REJECT_AUTH_HTTP_CODE = 403;
export const AUTH_COOKIE_KEY = 'kitura-session-id';

export const failedFilesMessage = (failedFiles) => {
  let message = "Wystąpił błąd przy przesyłaniu następujących plików: ";
  message += failedFiles.join(", ");

  message += ". Może są za duże? Spróbuj zmniejszyć ich rozmiar.";
  return message;
};


export const loaderOptions = {
  color: '#2FA59A',
  opacity: 0.25
};
