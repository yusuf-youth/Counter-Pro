<img src="https://henryegloff.com/media/simple-counter-app-design.jpg" width="500" />
<br />

This is a modern counter <a target="_blank" href="https://yusuf-youth.github.io/Counter-Pro/">app</a> built with React that focuses on user experience and robust state management. It features a customizable title, persistent data storage using localStorage, and a dynamic dark/light theme. The app is a showcase of clean code practices, including the use of useReducer, context, and custom hooks for a well-organized codebase.

<h2>Project Features</h2>
The project has several features that are worth paying attention to. 
<h3>React</h3>
<ul>
  <li>
    <b>Components. </b> This project's components are structured to promote reusability and a clear separation of concerns, with distinct files for each UI element. Components like PlusButton.jsx and MinusButton.jsx are highly specific and focus on a single action, while more general components like Controls.jsx group these smaller parts together to build a complete and logical UI section.
  </li>
  <li>
    <b>Hooks. </b> This project utilizes a suite of React hooks to manage its state and side effects. useState is used for simple state like the counter's name, while useReducer handles the more complex numerical count, and useEffect is used to persist state to localStorage and handle keyboard events.
  </li>
  <li>
    <b>Context. </b> The Context API is used to share the counter's state and functions throughout the application without manually passing props through every component level. This centralizes the state, allowing any component to easily access and modify the count, name, or theme using the useCounter and useTheme hooks.
  </li>
  <li>
    <b>useReducer. </b> The useReducer hook is used in this project to manage the counter's numerical state in a predictable and centralized way. By dispatching actions like "INCREMENT" or "DECREMENT," all state-changing logic is consolidated into a single reducer function, making it easier to debug and scale the application's core functionality.
  </li>
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
    <b>Mark Tasks. </b> Users can mark tasks as completed, helping to track progress.
  </li>
  <li>
    <b>Toggle Modes. </b> Users can toggle dark/light modes, which enhances the user experience.
  </li>
  <li>
    <b>Notes. </b> The app allows users to add additional details related to task list.
  </li>
  <li>
    <b>Persistent Storage. </b> The app implemented local storage that allows tasks, notes and theme mode option to be saved, ensuring users don't lose their settings upon closing the app.
  </li>
</ul>
