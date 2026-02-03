// src/services/analytics.ts
export async function runReport(propertyId: string, accessToken: string, requestBody: any) {
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`GA API error: ${res.status} - ${txt}`)
  }
  return res.json()
}
