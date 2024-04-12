
import React from 'react';
import LoginPage from "./loginPage/firstScreen.js"; // ייתכן שתצטרך לשנות את הנתיב אם הקובץ של LoginPage נמצא במיקום אחר

function App() {
  return (
    <div>
      <h1 >Welcome to Discover</h1>
      {/* קומפוננטת ההתחברות */}
      <LoginPage />
    </div>
  );
}

export default App;
