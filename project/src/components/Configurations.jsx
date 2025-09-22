import ResetButton from "./ResetButton";
import ToggleThemeButton from "./ToggleThemeButton";
import SettingsButton from "./SettingsButton";

function Configurations() {
  return (
    <ul className="header__configurations configurations">
      <li className="configurations__item">
        <ResetButton />
      </li>
      <li className="configurations__item">
        <ToggleThemeButton />
      </li>
      {/* <li className="configurations__item">
        <SettingsButton />
      </li> */}
    </ul>
  );
}

export default Configurations;
