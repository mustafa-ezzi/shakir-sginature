import { gapi } from "gapi-script";

const CLIENT_ID = "803820540345-265on6s45e7u720g9ir8ja387q9ca7rg.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";

export const initGoogle = () => {
  return new Promise((resolve) => {
    gapi.load("client:auth2", async () => {
      await gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
      resolve(gapi);
    });
  });
};

export const signInGoogle = async () => {
  const auth = gapi.auth2.getAuthInstance();
  await auth.signIn();
};

export const getAnalyticsReport = async (propertyId) => {
  await gapi.client.load("https://analyticsdata.googleapis.com/$discovery/rest?version=v1beta");

  const response = await gapi.client.analyticsdata.properties.runReport({
    property: `properties/${propertyId}`,
    dimensions: [{ name: "city" }],
    metrics: [{ name: "activeUsers" }],
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
  });

  return response.result;
};
