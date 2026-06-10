// @ts-nocheck
import "./star-wars-toggle.css";
import { useThemeMode } from "@/context/ThemeModeProvider";

/**
 * BB8 Star-Wars toggle (ported from UI Designs/Toggle_Switch.txt).
 * Drives the site experience mode: checked = brutalist, unchecked = standard.
 * @type {React.FC<{ className?: string }>}
 */
export function StarWarsToggle({ className = "" } = {}) {
  const { mode, toggleMode } = useThemeMode();
  const isBrutalist = mode === "brutalist";

  return (
    <label
      className={className ? `bb8-toggle ${className}` : "bb8-toggle"}
      aria-label="Toggle Neo-Brutalism mode"
      title={isBrutalist ? "Switch to Standard mode" : "Switch to Neo-Brutalism mode"}
    >
      <input
        className="bb8-toggle__checkbox"
        type="checkbox"
        checked={isBrutalist}
        onChange={toggleMode}
      />
      <div className="bb8-toggle__container">
        <div className="bb8-toggle__scenery">
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="tatto-1" />
          <div className="tatto-2" />
          <div className="gomrassen" />
          <div className="hermes" />
          <div className="chenini" />
          <div className="bb8-toggle__cloud" />
          <div className="bb8-toggle__cloud" />
          <div className="bb8-toggle__cloud" />
        </div>
        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__antenna" />
            <div className="bb8__antenna" />
            <div className="bb8__head" />
          </div>
          <div className="bb8__body" />
        </div>
        <div className="artificial__hidden">
          <div className="bb8__shadow" />
        </div>
      </div>
    </label>
  );
}

export default StarWarsToggle;
