let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.fields) {
      obj.fields.is_celebrity = { booleanValue: true };
      obj.fields.celebrity_badge_small = { booleanValue: true };
      obj.fields.badge = { stringValue: "celebrity" };
      if (obj.fields.first_subscribed_at) {
        obj.fields.first_subscribed_at = { timestampValue: "2024-01-01T00:00:00Z" };
      }
    }
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
} else {
  $done({});
}
