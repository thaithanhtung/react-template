import * as Sentry from '@sentry/browser';

export const trackingSentryError = (error) => Sentry.captureException(error);
export const trackingSentryErrorMessage = (error) =>
  Sentry.captureMessage(error);

export const trackingError = (response) => {
  try {
    if ((response && response.status === 500) || response.status === 404) {
      let messageError = response.data.message;
      if (response.data.apierror) {
        messageError = response.data.apierror.message;
      }
      trackingSentryErrorMessage(messageError);
    } else {
      trackingSentryError(response);
    }
  } catch (error) {
    trackingSentryError(error);
  }
};
