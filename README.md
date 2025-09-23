<img src="https://henryegloff.com/media/simple-counter-app-design.jpg" width="500" />
<br />

Counter Pro <a target="_blank" href="https://yusuf-youth.github.io/Counter-Pro/">app</a> built with React that focuses on user experience and robust state management. It features a customizable title, persistent data storage using localStorage, and a dynamic dark/light theme. The app is a showcase of clean code practices, including the use of useReducer, context, and custom hooks for a well-organized codebase.

<h2>Project Features</h2>
The project has several features that are worth paying attention to. 
<h3>React</h3>
<ul>
  <li>
    <b>Components. </b> The project's components are structured for reusability and a clear separation of concerns, with specific UI elements like <code>PlusButton.jsx</code> and <code>MinusButton.jsx</code> being grouped by more general components like <code>CounterButton.jsx</code> to form a logical UI.
  </li>
  <li>
    <b>Hooks. </b> This project uses a suite of React hooks, with <code>useState</code> for simple state, <code>useReducer</code> for complex numerical state, and <code>useEffect</code> to handle side effects like data persistence and keyboard events.
  </li>
  </li>
  <li>
    <b>Custom Hooks. </b> The custom hooks in this project, <code>useLocalStorageState</code>, <code>usePersistedReducer</code>, and <code>useKeyboardShortcut</code>, centralize logic, which makes the codebase cleaner and more organized. 
  </li>
  <li>
    <b>Context. </b> The Context API is used to share the counter's state and functions throughout the application, centralizing the state and allowing any component to easily access it via the <code>useCounter</code> and <code>useTheme</code> custom hooks.
  <!-- </li>
  <li>
    <b>useReducer. </b> The <code>useReducer</code> hook manages the counter's numerical state by centralizing all state-changing logic into a single reducer function, making it easier to debug and scale the app.
  </li> -->
  <li>
    <b>Dynamic CSS Class Management. </b> The app conditionally adds or removes CSS classes based on component state, enabling features like marking tasks as complete, ensuring smooth UI transitions without directly accessing or manipulating DOM elements.
  </li>
</ul>

<h3>Markup & Styles</h3>
<ul>
  <li>
    <b>BEM. </b>The project follows the BEM methodology for structuring SCSS, where each component is broken down into <i>blocks</i>, <i>elements</i>, and <i>modifiers</i>. This approach ensures that the code is modular, scalable, and easy to maintain.
  </li>
  <li>
    <b>Global Styles. </b>The project has <i>_global.scss</i> for global styles, <i>_normalize.scss</i> for resetting default styles, <i>_mixins.scss</i> and <i>_media.scss</i> for comfortable styling and others.
  </li>
  <li>
    <b>CSS Property Grouping. </b> CSS properties are organized in a consistent and logical order to improve readability, maintainability, and ease of debugging.
  </li>
  <li>
    <b>CSS Variables. </b>The project uses css variables throughout styles ensuring maintainability, reusability, and consistency of the code.
  </li>
  <li>
    <b>SCSS. </b>The project is written in the SCSS preprocessor and contains useful features such as mixins for comfortable styling.
  </li>
</ul>

<h2>App Features</h2>
The app has several features:
<ul>
  <li>
    <b>Customizable Name. </b> Users can give their counter a custom name or title, making it useful for tracking different activities like "Push Ups" or "Laps".
  </li>
  <li>
    <b>Persistent State. </b> The counter's value and its custom name are saved to the browser's <code>localStorage</code>, so the data remains even after the user closes and re-opens the app.
  </li>
  <li>
    <b>User-Friendly Interface. </b> The app has a clean, minimalist design with a large, central number and simple buttons for incrementing and decrementing the count.
  </li>
  <li>
    <b>Theming. </b> The app includes a light/dark theme toggle, allowing users to switch the color scheme to their preference.
  </li>
  <li>
    <b>Reset Functionality. </b> A dedicated button allows the user to quickly reset the counter to zero.
  </li>
  <li>
    <b>Keyboard Controls. </b> The app also has keyboard controls that allow users to increment and decrement the count using the <code>+</code> and <code>-</code> keys.
  </li>
</ul>
