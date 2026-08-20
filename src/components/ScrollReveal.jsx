import useScrollReveal from "../hooks/useScrollReveal";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
