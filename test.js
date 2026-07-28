/**
 * Locket RevenueCat VIP & Celebrity Interceptor for Shadowrocket
 * URL: https://raw.githubusercontent.com/kien234/tests/refs/heads/main/test.js
 */

let body = $response.body;

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.subscriber) {
      // 1. Mở khóa Locket Gold VIP vĩnh viễn (Đến năm 2099)
      obj.subscriber.entitlements = obj.subscriber.entitlements || {};
      obj.subscriber.entitlements.Gold = {
        expires_date: "2099-12-31T23:59:59Z",
        grace_period_expires_date: null,
        product_identifier: "locket_1600_1y",
        purchase_date: "2024-01-01T00:00:00Z"
      };

      obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
      obj.subscriber.subscriptions["locket_1600_1y"] = {
        auto_resume_date: null,
        billing_issues_detected_at: null,
        expires_date: "2099-12-31T23:59:59Z",
        is_sandbox: false,
        original_purchase_date: "2024-01-01T00:00:00Z",
        ownership_type: "PURCHASED",
        period_type: "normal",
        store: "app_store"
      };

      // 2. Chèn thuộc tính Celebrity VIP ⭐ & Vương miện Gold 👑
      obj.subscriber.subscriber_attributes = obj.subscriber.subscriber_attributes || {};
      
      obj.subscriber.subscriber_attributes["locket_gold_badge"] = {
        value: "true",
        updated_at_ms: 4102444800000
      };
      
      obj.subscriber.subscriber_attributes["locket_gold_badge_small"] = {
        value: "true",
        updated_at_ms: 4102444800000
      };
      
      obj.subscriber.subscriber_attributes["celebrity_badge_small"] = {
        value: "true",
        updated_at_ms: 4102444800000
      };

      obj.subscriber.subscriber_attributes["locket_gold_since"] = {
        value: "2024-01-01T00:00:00Z",
        updated_at_ms: 4102444800000
      };
    }

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
} else {
  $done({});
}
