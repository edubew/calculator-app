import React from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const App = () => (
  <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
);

export default App;
