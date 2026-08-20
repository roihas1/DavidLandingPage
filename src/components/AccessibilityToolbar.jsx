import AccessibilityControl from "./AccessibilityControl";

export default function AccessibilityToolbar() {
  return (
    <div
      className="fixed z-[60]"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom))",
        left: "max(1rem, env(safe-area-inset-left))",
      }}
    >
      <AccessibilityControl />
    </div>
  );
}
