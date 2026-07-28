/**
 * =================================================================
 * 🔮 LOCKET HIDDEN FEATURES & DEBUG OVERRIDES INTERCEPTOR (SHADOWROCKET)
 * Target Domains: api.revenuecat.com, firestore.googleapis.com, locket-api.tryhelium.com
 * =================================================================
 */

let body = $response.body;

if (body) {
  try {
    let obj = JSON.parse(body);

    // 1. Intercept RevenueCat Subscriptions & Secret Feature Flags
    if (obj && obj.subscriber) {
      obj.subscriber.entitlements = obj.subscriber.entitlements || {};
      obj.subscriber.entitlements.Gold = {
        expires_date: "2099-12-31T23:59:59Z",
        product_identifier: "locket_1600_1y",
        purchase_date: "2024-01-01T00:00:00Z"
      };

      obj.subscriber.subscriber_attributes = obj.subscriber.subscriber_attributes || {};

      // 🔓 UNLOCK HIDDEN APP FEATURES & DEVELOPER DEBUG MENU:
      obj.subscriber.subscriber_attributes["debug_section_in_profile_menu"] = { value: "true", updated_at_ms: 4102444800000 };
      obj.subscriber.subscriber_attributes["join_testflight_enabled"] = { value: "true", updated_at_ms: 4102444800000 };
      obj.subscriber.subscriber_attributes["feature_gates_override"] = { value: "true", updated_at_ms: 4102444800000 };
      
      // 🔮 UNLOCK HIDDEN CAMERA FILTERS:
      obj.subscriber.subscriber_attributes["camera_filter_elf"] = { value: "true", updated_at_ms: 4102444800000 };
      obj.subscriber.subscriber_attributes["camera_filter_2026"] = { value: "true", updated_at_ms: 4102444800000 };
      obj.subscriber.subscriber_attributes["celebrity_camera_filter_config"] = { value: "celebrity_gold_v1", updated_at_ms: 4102444800000 };
      
      // 👑 UNLOCK BADGES:
      obj.subscriber.subscriber_attributes["locket_gold_badge"] = { value: "true", updated_at_ms: 4102444800000 };
      obj.subscriber.subscriber_attributes["celebrity_badge_small"] = { value: "true", updated_at_ms: 4102444800000 };
    }

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({ body });
  }
} else {
  $done({ body });
}
